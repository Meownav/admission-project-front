import React, { useState } from "react";
import axios from "axios";

import "./styles/MainWindow.css";

const MainWindow = () => {
  const [dbFile, setDbFile] = useState(null);
  const [dateFile, setDateFile] = useState(null);

  // Handles when the db_file is selected from the local system.
  const handle_db_change = (e) => {
    e.preventDefault();
    setDbFile(e.target.files[0]);
  };

  // Handles when the db_file is submitted.
  const handle_db_submit = (e) => {
    e.preventDefault();
    console.log(dbFile);
    const formData = new FormData();
    if (dbFile) {
      formData.append("dbFile", dbFile);
      console.log("Sending db_file from frontend to the backend.");
      axios
        .post("http://localhost:5000/submit_file", formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.error(err));
    }
  };

  // Request to create the course master.
  const handle_course_master = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/course_master")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  };

  // Request to create the subject master.
  const handle_subject_master = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/subject_master")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  };

  // Request to create the date master.
  const handle_date_master = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/date_master", { responseType: "blob" })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "date_master.xlsx");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => console.error(err));
  };

  // Handles when the datefile is selected from the local system.
  const handle_datefile_change = (e) => {
    e.preventDefault();
    setDateFile(e.target.files[0]);
  };

  // Handles when the datefile is submitted.
  const handle_datefile_submit = (e) => {
    e.preventDefault();
    console.log(dateFile);
    const formData = new FormData();
    if (dbFile) {
      formData.append("dateFile", dateFile);
      console.log("Sending db_file from frontend to the backend.");
      axios
        .post("http://localhost:5000/submit_date_file", formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.error(err));
    }
  };

  // Request to map the dates.
  const handle_dates_mapping = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/final_dates", { responseType: "blob" })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "dbFile.xlsx");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => console.error(err));
  };

  // const handle_dates_mapping = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div>
      <div className="main">
        <div className="card">
          <form className="dataFile" onSubmit={handle_db_submit}>
            <h2>Upload database file.</h2>
            <input type="file" className="create" onChange={handle_db_change} />
            <button type="submit" className="create">
              Submit
            </button>
          </form>
          <div className="option1">
            <h2>Create Course Master file. </h2>
            <button className="create" onClick={handle_course_master}>
              Create
            </button>
          </div>
          <div className="option2">
            <h2>Create Subject Master file. </h2>
            <button className="create" onClick={handle_subject_master}>
              Create
            </button>
          </div>
          <div className="option3">
            <h2>Create Date Master file. </h2>
            <button className="create" onClick={handle_date_master}>
              Create
            </button>
          </div>
          <hr />
          <center>
            <h5>Warning! Date master file must be created..</h5>
          </center>
          <div>
            <form onSubmit={handle_datefile_submit}>
              <div className="manual">
                <h2>Enter dates manually.</h2>
                <input
                  type="file"
                  className="create"
                  onChange={handle_datefile_change}
                />
                <button className="create" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div className="againDate">
              <h2>Map dates. </h2>
              <button className="create" onClick={handle_dates_mapping}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
