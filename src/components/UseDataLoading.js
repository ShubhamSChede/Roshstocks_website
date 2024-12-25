import { useEffect } from 'react';
import { useLoading } from './loading-context';

export const useDataLoading = (loadDataFn) => {
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    let isSubscribed = true;

    const loadData = async () => {
      try {
        startLoading();
        await loadDataFn();
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        if (isSubscribed) {
          stopLoading();
        }
      }
    };

    loadData();

    return () => {
      isSubscribed = false;
    };
  }, [loadDataFn, startLoading, stopLoading]);
};

export default useDataLoading;