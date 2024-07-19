import React from 'react';

function Input({ search, setSearch, handleSearch }) {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter a word"
          className="w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-950 transition-colors dark:bg-gray-800 dark:text-white dark:border-gray-700 "
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-slate-700 hover:bg-slate-950 text-white rounded-md transition"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Input;
