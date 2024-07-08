import { useState, useRef } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const intervalTimeoutRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setCurrentTime(Date.now());

    clearInterval(intervalTimeoutRef.current);

    intervalTimeoutRef.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10); //interval time of 10ms
  };
  const handleStop = () => {
    clearInterval(intervalTimeoutRef.current);
  };

  let minutes = 0,
    seconds = 0;
  if (startTime != null && currentTime != null) {
    const durationInMilliSeconds = currentTime - startTime;
    seconds = (durationInMilliSeconds / 1000)%60;
    minutes = Math.floor(durationInMilliSeconds / (1000 * 60));
  }
  seconds=seconds<10?  "0"+seconds.toFixed(2):seconds.toFixed(2)
  minutes=minutes<10?  "0"+minutes:minutes

  return (
    <div>
      <h2>
        Minutes : {minutes} Seconds: {seconds}
      </h2>
      <button className="btn btn-info  m-2" onClick={handleStart}>Start</button>
      <button className="btn btn-warning  m-2" onClick={handleStop}>Stop</button>
    </div>
  );
};

export default StopWatch;
