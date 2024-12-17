"use client";
import React, { useEffect, useState } from "react";

const createSnowflake = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`, // Random starting position from top
  left: `${Math.random() * 100}%`, // Random position across the entire width
  animationDuration: `${Math.random() * 10 + 5}s`, // Random falling time
  animationDelay: `${Math.random() * 5}s`, // Delay before falling starts
  size: `${Math.random() * 5 + 5}px`, // Random size for snowflakes
});

const SnowflakesBackground = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const addSnowflakePeriodically = () => {
      const newSnowflake = createSnowflake();
      setSnowflakes((currentSnowflakes) => [
        ...currentSnowflakes.slice(-50), // Keep only a maximum of 50 snowflakes
        newSnowflake,
      ]);
    };

    const interval = setInterval(addSnowflakePeriodically, 200); // Add snowflakes every 200ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {snowflakes.map((snowflake) => {
        return (
          <div
            key={snowflake.id}
            className="absolute rounded-full bg-white"
            style={{
              top: snowflake.top,
              left: snowflake.left,
              width: snowflake.size,
              height: snowflake.size,
              animation: `fall ${snowflake.animationDuration} linear infinite, drift ${snowflake.animationDuration} ${snowflake.animationDelay} infinite`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default SnowflakesBackground;
