import React, { useState, useEffect } from "react";
import SeatingData from "./SeatingData";
import "./SeatingData.css";

const SeatingDataPage = () => {
  const [rooms, setRooms] = useState([
    { roomName: "Room A", totalSeats: 50, seatsInUse: 10 },
    { roomName: "Room B", totalSeats: 200, seatsInUse: 30 },
    // Add more rooms as needed
  ]);

  useEffect(() => {
    // Calculate cumulative sum
    let cumulativeSum = 0;
    setRooms((prevRooms) =>
      prevRooms.map((room) => {
        cumulativeSum += room.seatsInUse;
        return { ...room, cumulativeSum };
      })
    );
  }, []);

  const handleInputChange = (roomName, field, value) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.roomName === roomName ? { ...room, [field]: Number(value) } : room
      )
    );
  };

  return (
    <div className="seating-page">
      {rooms.map((room, index) => (
        <SeatingData
          key={index}
          roomName={room.roomName}
          totalSeats={room.totalSeats}
          seatsInUse={room.seatsInUse}
          cumulativeSum={room.cumulativeSum}
          onInputChange={handleInputChange}
        />
      ))}
    </div>
  );
};

export default SeatingDataPage;
