import React, { useState } from "react";
// import axios from "axios";
import "./teacherDuty.css";

const TeacherDuty = () => {
  return (
    <div className="container">
      <div className="section">
        <h2 className="section-heading">
          Teacher Duties<hr></hr>
        </h2>
        <form className="form">
          Teacher Details
          <input className="form-input" type="file" />
          Exam Details
          <input className="form-input" type="file" />
        </form>
        <hr></hr>
        <button className="form-button" type="submit">
          Assign Duties
        </button>
      </div>
    </div>
  );
};

export default TeacherDuty;
