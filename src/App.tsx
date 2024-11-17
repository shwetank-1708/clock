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
      <div className="flex justify-center items-center h-[100vh]">
        <h1 className="text-9xl font-bold">{time}</h1>
      </div>
    </>
  );
}

export default App;
