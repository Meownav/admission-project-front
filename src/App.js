import React, { useState } from "react";

import UploadAndMap from "./components/UploadAndMap.jsx";
import SeatingData from "./components/SeatingData.jsx";
import ReporteS from "./ReportsPage.jsx";
import "./App.css";

const App = () => {
  const [reportsVisible, setReportsVisible] = useState(false);
  const [uploadVisible, setUploadVisible] = useState(true);
  const [seatsVisible, setSeatsVisible] = useState(false);

  const showReports = () => {};

  return (
    <div>
      <div className="main">
        <UploadAndMap id="upload-map" />
      </div>
      <button onClick={showReports}> Show Reports</button>
      <div className="classroom-data-container">
        <SeatingData id="seating-data" />
      </div>
    </div>
  );
};

export default App;
