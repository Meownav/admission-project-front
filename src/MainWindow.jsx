import React from "react";
import "./styles/MainWindow.css";

const MainWindow = () => {
  return (
    <div>
      <div className="main">
        <div className="card">
          <div className="option1">
            <h2>Create Course Master file. </h2>
            <button className="create">Create now</button>
          </div>
          <div className="option2">
          <h2>Create Course Master file. </h2>
            <button className="create">Create now</button>
          </div>
          <div className="option3">
          <h2>Create Date Master file. </h2>
            <button className="create">Create now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWindow;