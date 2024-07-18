import React from 'react'


export default function Input({search,setSearch,handleSearch}) {
  return (
    <div>
      <input type="text"
      value={search}
      placeholder='Enter the word'
      onChange={(e) => {
        setSearch(e.target.value)
      }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
