import React, { useState } from "react";

function App() {
  let [time, setTime] = useState(new Date().toLocaleTimeString());

  function update() {
    setTime((time = new Date().toLocaleTimeString()));
  }
  setInterval(update, 1000);

  return (
    <div className="container">
      <div>
        <h1>{time}</h1>
      </div>
    </div>
  );
}

export default App;