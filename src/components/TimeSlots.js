import React, { useContext, useEffect, useState } from "react";
import { timeContext } from "../App";

// Function to generate an array of time slots
function generateTimeSlots(timeZone = "UTC-0") {
  const timeSlots = [];
  const startTime = new Date();
  timeZone === "UTC-0"
    ? startTime.setHours(8, 0, 0, 0)
    : startTime.setHours(6, 0, 0, 0);

  const endTime = new Date();
  timeZone === "UTC-0"
    ? endTime.setHours(23, 0, 0, 0)
    : endTime.setHours(21, 0, 0, 0);

  while (startTime <= endTime) {
    const time = startTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    timeSlots.push(time);
    startTime.setMinutes(startTime.getMinutes() + 30); // Add 30 minutes
  }

  return timeSlots;
}

const TimeSlots = (props) => {
  let { checkedDates } = props;
  const { timeZone } = useContext(timeContext);
  const [timeSlots, setTimeSlots] = useState(generateTimeSlots(timeZone));
  useEffect(() => {
    setTimeSlots(generateTimeSlots(timeZone));
  }, [timeZone]);

  return (
    <>
      {timeSlots.map((time, index) => (
        <span key={index} className="cal-day-time">
          <input
            type="checkbox"
            checked={
              checkedDates.length === 0
                ? 0
                : checkedDates.some((t) => t.time === time)
            }
            readOnly
          />
          <span className="cal-time"> {time}</span>
        </span>
      ))}
    </>
  );
};

export default TimeSlots;
