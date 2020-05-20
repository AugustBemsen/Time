import React, { useState } from "react";

const App = () => {
  let now = new Date().toLocaleTimeString("en-US", { hour12: false });
  const [time, changeTime] = useState(now);
  const timing = () => {
    let newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    changeTime(newTime);
  };
  setInterval(timing, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timing}>Get Time</button>
    </div>
  );
};

export default App;
