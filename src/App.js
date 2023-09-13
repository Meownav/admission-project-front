// import InputFile from "./components/InputFile";
// import TeacherDuty from "./components/teacherDuty";
import React, { useState } from "react";

import MainWindow from "./MainWindow.jsx";
import ReportsPage from "./ReportsPage.jsx";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  // return <MainWindow />;
  return (
    <div>
      {currentPage === 1 ? <MainWindow nextPage={nextPage} /> : null}
      {currentPage === 2 ? <ReportsPage /> : null}
    </div>
  );
};

export default App;
