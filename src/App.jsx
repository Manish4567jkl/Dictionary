import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [word, setWord] = useState('');

  const handleSearch = () => {
    setWord(search);
  };

  useEffect(() => {
    if (!word) return;

    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [word]);

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 transition-all min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <Input search={search} setSearch={setSearch} handleSearch={handleSearch} />
      </div>
      {loading && <p className="text-gray-800 dark:text-gray-400">Loading...</p>}
      {error && <p className="text-red-500 dark:text-red-400">Error fetching data.</p>}
      {data && <Main data={data} />}
    </div>
  );
}

export default App;
