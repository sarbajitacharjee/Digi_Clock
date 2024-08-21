import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="relative p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-30">
        <div className="text-6xl font-semibold text-white">
          {formatTime(time)}
        </div>
        <div className="text-xl text-gray-200 text-center mt-2">
          {time.toDateString()}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
