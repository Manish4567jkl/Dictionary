
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-blue-500 dark:border-yellow-400" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPage;
