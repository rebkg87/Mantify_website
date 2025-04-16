import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';


const DarkModeSwitch = () => {
      const { darkMode, toggleDarkMode } = useTheme(); 

      const toggleDark = () => {
        toggleDarkMode(!darkMode);
    };
  
  return (
    <button
      onClick={toggleDark}
      className="p-2 rounded-full bg-tertiary dark:bg-secondary text-primary dark:text-white transition-colors ml-6"
    >
      {darkMode ? (
        <MoonIcon className="w-4 h-4" />
      ) : (
        <SunIcon className="w-4 h-4" />
      )}
    </button>)
}

export default DarkModeSwitch