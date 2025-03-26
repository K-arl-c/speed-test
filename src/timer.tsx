import React, { useEffect, useState } from "react";

const Timer = ({ gameTime, onTimeUp, isRunning }) => {
  const [timeLeft, setTimeLeft] = useState(gameTime);

  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      onTimeUp();
    }
  }, [timeLeft, isRunning]);

  return <div className="timer">Time Left: {timeLeft}s</div>;
};

export default Timer;
