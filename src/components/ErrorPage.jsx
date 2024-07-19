import React from 'react';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">Page Not Found</p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg">
        Go Home
      </a>
    </div>
  );
}

export default ErrorPage;
