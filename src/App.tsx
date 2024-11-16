import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("");

  const digitalClock = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setTime(formattedTime);
  };

  useEffect(() => {
    const timerId = setInterval(digitalClock, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <h1>{time}</h1>
    </>
  );
}

export default App;
