import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div className="sticky top-[20px] flex justify-center items-center gap-4 md:gap-[10%] px-4 z-50">
      <div className="w-[30px] h-[30px]">
        <img
          src="/iste_logo_mehAsset 1 (1).png"
          alt="ISTE Logo"
          className="w-full h-full"
        />
      </div>
      <Link
        to="/"
        className="font-['Black_Ops_One'] text-[#632753] dark:text-white text-xl md:text-[1.5rem] no-underline"
      >
        Home
      </Link>
      <Link
        to="/dashboard"
        className="font-['Black_Ops_One'] text-[#632753] dark:text-white text-xl md:text-[1.5rem] no-underline"
      >
        Dashboard
      </Link>
      <Link
        to="/about"
        className="font-['Black_Ops_One'] text-[#632753] dark:text-white text-xl md:text-[1.5rem] no-underline"
      >
        About
      </Link>
      <button
        onClick={toggleTheme}
        className="h-[50px] w-[50px] bg-[#632753] dark:bg-white text-white dark:text-[#632753] rounded-full border-none cursor-pointer flex-shrink-0"
      >
        Theme
      </button>
    </div>
  );
}