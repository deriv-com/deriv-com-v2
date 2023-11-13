import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { firebaseConfig } from '@deriv-com/utils';

const usePricingFeed = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    const commoditiesRef = ref(db);
    const unsubscribe = onValue(
      commoditiesRef,
      (snapshot) => {
        setData(snapshot.val());
      },
      (err) => {
        setError(err);
      },
    );

    return unsubscribe;
  }, []);

  return [error, data];
};

export default usePricingFeed;
