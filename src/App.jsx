import { useEffect, useState } from "react";
import axios from "axios";
import useTheme, { ThemeProvider } from "./context/ThemeContext";
import Input from "./components/Input";
import Main from "./components/Main";

function App() {
  const [themeMode,setThemeMode] = useState()
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
        console.log(response.data)
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
    <div className="container mx-auto p-6">
    <Input search={search} setSearch={setSearch} handleSearch={handleSearch} />
    {loading && <p>Loading...</p>}
    {error && <p>Error fetching data.</p>}
    {data && <Main data={data} />}
  </div>
    
  );
}

export default App;
