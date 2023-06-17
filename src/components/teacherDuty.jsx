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
				{/* <form className="form"> onSubmit={handleSubmit}> */}
				<form className="form">
					Teacher Details
					<input
						className="form-input"
						type="file"
						// onChange={handleFileChange}
					/>
					Exam Details
					<input
						className="form-input"
						type="file"
						// onChange={handleFileChange}
					/>
					{/* <button className="form-button" type="submit">
            Assign Duties
          </button> */}
				</form>
				<hr></hr>
				<button className="form-button" type="submit">
					Assign Duties
				</button>
				{/* <p className="message">{message}</p> */}
			</div>
		</div>
	);
};

export default TeacherDuty;
