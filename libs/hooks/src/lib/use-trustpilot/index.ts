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

interface TrustpilotResult {
  data: TrustPilotDataProps | null;
  loading: boolean;
  error: Error | null | unknown;
}

export const useTrustpilotApi = (): TrustpilotResult => {
  const [data, setData] = useState<TrustPilotDataProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<TrustpilotResult['error']>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const appName = process.env.NEXT_PUBLIC_TRUSTPILOT_APP_NAME;
        // const apiKey = process.env.NEXT_PUBLIC_TRUSTPILOT_API_KEY;

        const appName = 'deriv.com';
        const apiKey = '1r8zJRzpGhWKWh6VuiAje4HWPVhEg3Hj';

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

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useTrustpilotApi;
