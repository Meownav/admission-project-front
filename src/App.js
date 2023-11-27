import React, { useState } from "react";

import UploadAndMap from "./components/UploadAndMap.jsx";
import SeatingData from "./components/SeatingData.jsx";
import ReporteS from "./ReportsPage.jsx";
import "./App.css";

const App = () => {
  const [reportsVisible, setReportsVisible] = useState(false);
  const [uploadVisible, setUploadVisible] = useState(true);
  const [seatsVisible, setSeatsVisible] = useState(false);

  // Function to show reports and set seatsVisible to true
  const showReports = () => {
    setSeatsVisible(true);
    // Other logic related to showing reports...
  };
  const hideReports = () => {
    setSeatsVisible(false);
    // Other logic related to showing reports...
  };

  return (
    <div>
      <div className="main">
        <UploadAndMap id="upload-map" />
      </div>
      {/* <button onClick={showReports}> Show Reports</button> */}
      {/* Example button to trigger the showReports function */}
      <div className="buttons">
        <button onClick={showReports}>Show Cumilative Sum Counter</button>
        {/* <button onClick={hideReports}>Hide Cumilative Sum Counter</button> */}
      </div>
      <div className="classroom-data-container">
        <SeatingData id="seating-data" showCumulativeCount={seatsVisible} />
      </div>
    </div>
  );
};

export default App;
