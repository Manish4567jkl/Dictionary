import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import Main from "./components/Main";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import LoadingPage from "./components/LoadingPage";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [word, setWord] = useState('');
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  };

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const html = document.querySelector('html');
  useEffect(() => {
    html.classList.remove('light', 'dark');
    html.classList.add(themeMode);
  }, [themeMode]);

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
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="container mx-auto px-4 py-6 min-h-screen bg-white dark:bg-gray-900 transition-all">
        <Header />
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <Input search={search} setSearch={setSearch} handleSearch={handleSearch} />
          <ThemeBtn />
        </div>
        {loading && <LoadingPage />}
        {error && <ErrorPage />}
        {!loading && !error && data && <Main data={data} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
