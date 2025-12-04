// app/components/theme-toggle.js
'use client';

import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  
  // Kein useEffect, kein mounted State!
  // next-themes hat built-in loading
  
  // Wenn theme undefined (noch nicht geladen), nichts rendern
  if (!theme) {
    return (
      <div className="p-2 text-3xl">
        <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"></div>
      </div>
    );
  }

  // Entscheide welches Icon angezeigt wird
  const displayTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 text-3xl text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-500 duration-300 hover:cursor-pointer hover:scale-110 transition-transform"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {displayTheme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  );
}