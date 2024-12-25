import React, { createContext, useContext, useState, useEffect } from 'react';

// Create loading context
const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
  startLoading: () => {},
  stopLoading: () => {}
});

// Loading provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingCount, setLoadingCount] = useState(0);

  const startLoading = () => {
    setLoadingCount(prev => prev + 1);
  };

  const stopLoading = () => {
    setLoadingCount(prev => Math.max(0, prev - 1));
  };

  useEffect(() => {
    setIsLoading(loadingCount > 0);
  }, [loadingCount]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use loading context
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// PageLoader component
const PageLoader = ({ children }) => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative">
        <div className="relative">
          <div className="absolute w-16 h-16 bg-pink-500 rounded-full -translate-x-7 -translate-y-7 animate-heartbeat-l" />
          <div className="absolute w-16 h-16 bg-pink-500 rounded-full translate-x-7 -translate-y-7 animate-heartbeat-r" />
          <div className="w-16 h-16 bg-pink-500 rotate-45 animate-square-pulse" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-16 h-4 bg-gray-200 rounded-full animate-shadow-pulse" />
      </div>
    </div>
  );
};

export default PageLoader;