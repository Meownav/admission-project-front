import React, { useState } from "react";

import UploadAndMap from "./components/UploadAndMap.jsx";
import SeatingData from "./components/SeatingData.jsx";
import ReporteS from "./ReportsPage.jsx";
import "./App.css";

const App = () => {
  const [reportsVisible, setReportsVisible] = useState(false);

  return (
    <div>
      {/* {currentPage === "schedular" && <MainWindow />}
      {currentPage === "reports" && <ReportsPage />} */}
      <div>
        <div className="main">
          <UploadAndMap />
        </div>
        <div className="classroom-data-container">
          <SeatingData /> 
        </div>
      </div>
    </div>
  );
};

export default App;
