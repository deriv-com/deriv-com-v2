import { useState, useEffect } from 'react';

export interface TrustPilotDataProps {
  id?: string;
  country?: string;
  name?: {
    referring?: [string];
    identifying?: string;
  };
  score?: {
    stars: number;
    trustScore: number;
  };
  numberOfReviews?: {
    total: number;
    usedForTrustScoreCalculation: number;
    oneStar: number;
    twoStars: number;
    threeStars: number;
    fourStars: number;
    fiveStars: number;
  };
}

export interface TPilotDataProps {
  numberOfReviews: string;
  stars: number;
  trustScore: number;
}

interface TrustpilotResult {
  data: TPilotDataProps | null | undefined;
  isLoading: boolean;
  hasError: Error | null | unknown;
}

interface StorageSetterProps {
  key: string;
  value: { [key: string]: string | number };
  expirationInDays?: number;
}

/*** NOTE: we need to move this to the utilities later  */

const setLocalItemWithExpiry = ({
  key,
  value,
  expirationInDays = 1,
}: StorageSetterProps) => {
  const now = new Date();
  const expiration = now.getTime() + expirationInDays * 24 * 60 * 60 * 1000; // Convert days to milliseconds

  const item = {
    value: value,
    expiry: expiration,
  };

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(item));
  }
};

const getLocalItemWithExpiry = (key: string) => {
  if (typeof localStorage !== 'undefined') {
    const itemString = localStorage.getItem(key);

    if (!itemString) {
      return null; // Item not found
    }

    const item = JSON.parse(itemString);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key); // Remove the item if it has expired
      return null;
    }

    return item.value;
  }

  return null;
};

/********************** */

export const useTrustpilotApi = (
  staticData?: TPilotDataProps | null,
): TrustpilotResult => {
  const [data, setData] = useState<TPilotDataProps | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState<TrustpilotResult['hasError']>(null);
  const localDataKey = 'trustpilot-data';
  const localData = getLocalItemWithExpiry(localDataKey);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appName =
          process.env.NEXT_PUBLIC_TRUSTPILOT_APP_NAME ||
          process.env.GATSBY_TRUSTPILOT_APP_NAME ||
          '';
        const apiKey =
          process.env.NEXT_PUBLIC_TRUSTPILOT_API_KEY ||
          process.env.GATSBY_TRUSTPILOT_API_KEY ||
          '';

        if (!appName || !apiKey) {
          throw new Error('Trustpilot app name or API key is missing');
        }

        const url = `https://api.trustpilot.com/v1/business-units/find?name=${appName}&apikey=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`,
          );
        }

        const result: TrustPilotDataProps = await response.json();
        const tpData = {
          stars: result.score?.stars || 0,
          trustScore: result.score?.trustScore || 0,
          numberOfReviews:
            result.numberOfReviews?.usedForTrustScoreCalculation.toLocaleString() ||
            '',
        };

        setData(tpData);
        setLocalItemWithExpiry({ key: localDataKey, value: tpData });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (!staticData) {
      if (localData) {
        setData(localData);
      } else {
        fetchData();
      }
    } else {
      setData(staticData);
    }
  }, []);

  return { data, isLoading, hasError };
};

export default useTrustpilotApi;
