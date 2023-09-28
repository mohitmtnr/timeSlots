import React, { useContext } from "react";
import { timeContext } from "../App";

const TimeZone = () => {
  const { timeZone, handleOnChange } = useContext(timeContext);
  return (
    <>
      <div className="flex-center">
        <div className="time-zone">
          <h4 style={{ textAlign: "left", margin: "0 35px" }}>Timezone : </h4>
          <select
            name="time-zone"
            id="unique-time"
            value={timeZone}
            onChange={handleOnChange}
          >
            <option value="UTC-0">UTC-0 Coordinated Universal Time</option>
            <option value="UTC-2 ">UTC-2 Coordinated Universal Time -2</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default TimeZone;
