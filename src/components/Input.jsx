import React from 'react';

function Input({ search, setSearch, handleSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter a word"
        className="border-md rounded-md border-black px-2 py-2 mx-5 my-5"
      />
      <button
        className="px-2 py-2 bg-rose-700 text-white font-mono text-3xl rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Input;