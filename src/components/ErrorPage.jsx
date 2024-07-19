import React from 'react';

function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-red-500 text-center">Error fetching data. Please try again.</h1>
    </div>
  );
}

export default ErrorPage;
