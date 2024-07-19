import React from 'react';
import useTheme from '../context/ThemeContext';

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;

    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <button
      onClick={() => (themeMode === 'light' ? darkTheme() : lightTheme())}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500 dark:bg-yellow-500 text-white shadow-md transition-transform hover:scale-105"
    >
      <i className={`fa-solid ${themeMode === 'light' ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  );
}

export default ThemeBtn;
