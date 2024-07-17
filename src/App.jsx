import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [word, setWord] = useState('');
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  const handleSearch = () => {
    setWord(search);
  };

  useEffect(() => {
    if (!word) return; // Prevent running on initial render

    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [word, url]);

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
        placeholder="Enter a word"
        className="border-md rounded-md border-black px-2 py-2 mx-5 my-5"
      />
      <button
        className="px-2 py-2 bg-rose-700 text-white font-mono text-3xl rounded-md"
        onClick={handleSearch}
      >
        Click
      </button>
      {loading && <p className="text-center text-blue-400 font-mono font-semibold text-3xl">Loading...</p>}
      {error && <p className="text-center text-red-500 font-mono font-semibold text-3xl">Error fetching data</p>}
      {data && (
        <div>
          <h1 className="text-center text-blue-400 font-mono font-semibold text-3xl">{word}</h1>
          {data[0].phonetics.map((meaning, index) => (
            <div key={index}>
              <p><strong>{meaning.text}</strong></p>
              
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
