import React from "react";
import "./styles/MainWindow.css";

const MainWindow = () => {
  return (
    <div>
      <div className="main">
        <div className="card">
          <div className="dataFile">
            <h2>Upload database file.</h2>
            <button className="create">Upload</button>
          </div>
          <div className="option1">
            <h2>Create Course Master file. </h2>
            <button className="create">Create</button>
          </div>
          <div className="option2">
            <h2>Create Subject Master file. </h2>
            <button className="create">Create</button>
          </div>
          <div className="option3">
            <h2>Create Date Master file. </h2>
            <button className="create">Create</button>
          </div>
          <hr />
          <center>
            <h5>Warning ! Date master file must be created..</h5>
          </center>
          <div className="againDate">
          <h2>Submit Date Master file. </h2>
          <button className="create">Submit</button>
        </div>
        <div className="manual">
        <h2>Entger dates manually</h2>
          <button className="create">Click</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
