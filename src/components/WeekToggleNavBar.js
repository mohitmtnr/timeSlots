import React, { useContext, useEffect, useState } from "react";
import { weekContext } from "../App";

function getCurrentWeekDate(prevNext) {
  const currentDate = new Date();
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() + prevNext);
  const dateFormat = `${startDate.toLocaleString("en-US", {
    month: "short",
  })} ${startDate.getDate()} ${startDate.getFullYear()}`;
  return dateFormat;
}

const WeekToggleNavBar = () => {
  let currentDate = new Date();
  currentDate = `${currentDate.toLocaleString("en-US", {
    month: "short",
  })} ${currentDate.getDate()} ${currentDate.getFullYear()}`;
  const { week, handleWeekChange } = useContext(weekContext);
  const [weekDate, setWeekDate] = useState(getCurrentWeekDate(week));

  useEffect(() => {
    setWeekDate(getCurrentWeekDate(week));
  }, [week]);

  return (
    <div className="flex-center">
      <div className="flex-space-between">
        <span>
          <i className="fa-solid fa-caret-left" style={{ fontSize: "20px" }} />
          <button onClick={() => handleWeekChange(-7)}>Previous Week</button>
        </span>
        <h5 style={{ padding: "0", margin: "0" }}>
          {currentDate === weekDate ? `Today : ${weekDate}` : weekDate}
        </h5>
        <span>
          <button onClick={() => handleWeekChange(+7)}>Next Week</button>
          <i className="fa-solid fa-caret-right" style={{ fontSize: "20px" }} />
        </span>
      </div>
    </div>
  );
};

export default WeekToggleNavBar;
