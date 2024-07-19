import React from 'react';

function Input({ search, setSearch, handleSearch }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a word..."
        className="w-full p-3 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
      />
      <button
        onClick={handleSearch}
        className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md transition mb-4"
      >
        Search
      </button>
    </div>
  );
}

export default Input;
