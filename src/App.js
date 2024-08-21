import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex items-center justify-center min-h-screen transition-all duration-500 
      ${isDarkMode ? 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900' : 'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600'}`}>
      <div className="relative p-10 bg-white dark:bg-primary-dark rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <div className="absolute top-2 right-2">
          <button
            onClick={toggleTheme}
            className="focus:outline-none bg-accent p-2 rounded-full text-white dark:bg-gray-800"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>
        <h1 className="text-8xl font-extrabold text-gray-800 dark:text-primary-light tracking-widest transition-colors duration-500">
          {formatTime(time)}
        </h1>
      </div>
    </div>
  );
};

export default DigitalClock;
