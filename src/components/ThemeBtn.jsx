import React from 'react';
import useTheme from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    if (themeMode === 'dark') {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-3 rounded-full transition duration-200 ease-in-out 
        ${themeMode === 'dark'  ? 'bg-sky-400 text-yellow-400' : 'bg-slate-950 text-white'}`}
    >
      <FontAwesomeIcon icon={themeMode === 'dark' ? faSun : faMoon} />
    </button>
  );
}

export default ThemeBtn;
