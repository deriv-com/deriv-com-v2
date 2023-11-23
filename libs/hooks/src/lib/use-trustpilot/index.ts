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

export const useTrustpilotApi = (
  staticData?: TPilotDataProps | null,
): TrustpilotResult => {
  const [data, setData] = useState<TPilotDataProps | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState<TrustpilotResult['hasError']>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appName = process.env.NEXT_PUBLIC__TRUSTPILOT_APP_NAME || '';
        const apiKey = process.env.NEXT_PUBLIC_TRUSTPILOT_API_KEY || '';

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

        setData({
          stars: result.score?.stars || 0,
          trustScore: result.score?.trustScore || 0,
          numberOfReviews:
            result.numberOfReviews?.usedForTrustScoreCalculation.toLocaleString() ||
            '',
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (!staticData) {
      fetchData();
    } else {
      setData(staticData);
    }
  }, []);

  return { data, isLoading, hasError };
};

export default useTrustpilotApi;
