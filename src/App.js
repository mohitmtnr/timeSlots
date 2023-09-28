import "./App.css";
import WeekToggleNavBar from "./components/WeekToggleNavBar";
import TimeZone from "./components/TimeZone";
import Calendar from "./components/Calendar";
import { createContext, useState } from "react";
export const timeContext = createContext();
export const weekContext = createContext();

function App() {
  const [timeZone, setTimeZone] = useState("UTC-0");
  const [week, setWeek] = useState(0);

  const handleOnChange = (event) => {
    setTimeZone(event.target.value);
  };

  const handleWeekChange = (value) => {
    setWeek((previous) => previous + value);
  };
  return (
    <>
      <timeContext.Provider value={{ timeZone, handleOnChange }}>
        <weekContext.Provider value={{ week, handleWeekChange }}>
          <div className="App ">
            <WeekToggleNavBar />
            <TimeZone />
            <Calendar />
          </div>
        </weekContext.Provider>
      </timeContext.Provider>
    </>
  );
}

export default App;
