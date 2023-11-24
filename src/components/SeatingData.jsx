import React from "react";
import "./SeatingData.css";

const SeatingData = ({
  roomName,
  totalSeats,
  seatsInUse,
  cumulativeSum,
  onInputChange,
}) => {
  return (
    <div className="seating-card">
      <h2>{roomName}</h2>
      <div className="seating-info">
        <div className="seats-in-use">
          <h3>Seats in Use</h3>
          <input
            type="number"
            value={seatsInUse}
            onChange={(e) =>
              onInputChange(roomName, "seatsInUse", e.target.value)
            }
          />
        </div>
        <div className="total-seats">
          <h3>Total Seats</h3>
          <input
            type="number"
            value={totalSeats}
            onChange={(e) =>
              onInputChange(roomName, "totalSeats", e.target.value)
            }
          />
        </div>
      </div>
      <div className="cumulative-sum">
        <h3>Cumulative Sum</h3>
        <p>{cumulativeSum}</p>
      </div>
    </div>
  );
};

export default SeatingData;
