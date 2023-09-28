import React, { useContext, useEffect, useState } from "react";
import TimeSlots from "./TimeSlots";
import { weekContext } from "../App";
import checkBoxDates from "../checkBoxTest.json";

function getCurrentWeekDates(week) {
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay(); // 0 for Sunday, 1 for Monday, etc.
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - currentDayOfWeek + week + 1); // Set to the first day of the week (Sunday)

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    let date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    const month = date.toLocaleString("default", { month: "2-digit" }); // Get abbreviated month name
    const dayOfMonth = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    weekDates.push(`${dayOfMonth}/${month}/${year}`);
  }

  return weekDates;
}

const Calendar = () => {
  const { week } = useContext(weekContext);
  // array for week days
  const weekDayArray = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  //week dates
  const [weekDates, setWeekDates] = useState(getCurrentWeekDates(0));

  useEffect(() => {
    setWeekDates(getCurrentWeekDates(week));
  }, [week]);

  return (
    <div className="flex-center">
      <table className="cal-table">
        <tbody className="cal-body">
          {weekDayArray.map((day, index) => (
            <tr className="cal-row" key={index}>
              <td className="cal-left">
                <span style={{ lineHeight: "0" }}>
                  <h4>{day}</h4>
                  <p style={{ color: "#000" }}>
                    {weekDates[index].substring(0, 5)}
                  </p>
                </span>
              </td>
              <td className="cal-right" key={index}>
                <TimeSlots
                  checkedDates={
                    checkBoxDates.length !== 0
                      ? checkBoxDates.filter((d) => d.date === weekDates[index])
                      : []
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
