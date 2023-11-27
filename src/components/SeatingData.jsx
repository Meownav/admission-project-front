import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./SeatingData.css";

const SeatingData = ({ showCumulativeCount }) => {
  
  // const location = useLocation();
  // console.log("Current Path:", location.pathname);
  // const isOnCurrentComponent = location.pathname === "/seating";
  // console.log(isOnCurrentComponent)

  const roomData = [
    { Room1: 100 },
    { Room2: 200 },
    { Room3: 200 },
    { Room4: 200 },
    { Room5: 200 },
    { Room6: 200 },
    { Room7: 100 },
    { Room8: 200 },
    { Room9: 200 },
    { Room10: 200 },
    { Room11: 200 },
    { Room12: 200 },
    { Room13: 100 },
    { Room14: 200 },
    { Room15: 200 },
    { Room16: 200 },
    { Room17: 200 },
    { Room18: 200 },
  ];

  const [cumsum, setCumsum] = useState(0);
  const [inputValues, setInputValues] = useState(new Array(roomData.length).fill(0));

  const handleInputChange = (e, index, capacity) => {
    // Convert the input value to a number
    const inputValue = parseInt(e.target.value, 10) || 0;

    // Update the input values array
    const newInputValues = [...inputValues];
    newInputValues[index] = inputValue;
    setInputValues(newInputValues);

    // Update the cumulative sum state
    setCumsum(newInputValues.reduce((sum, value) => sum + value, 0));
  };

  return (
    <div className="seating-container">
      <div className="room-data">
        {roomData.map((val, idx) => {
          const roomName = Object.keys(val)[0];
          const capacity = val[roomName];

          return (
            <div key={idx} className="rooms">
              <h1>{roomName}</h1>
              <p>
                <input
                  type="number"
                  min={0}
                  defaultValue={0}
                  max={capacity}
                  onChange={(e) => handleInputChange(e, idx, capacity)}
                />
                / {capacity}
              </p>
            </div>
          );
        })}
      </div>
      {showCumulativeCount && (
        <div className="cumulative-count">
          Total Seats Filled: {cumsum}
        </div>
      )}
    </div>
  );
};

export default SeatingData;
