import React, { useState } from "react";
import axios from "axios";
import "./InputFile.css";

const InputFile = () => {
	const [file, setFile] = useState(null);
	const [message, setMessage] = useState("");

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!file) {
			setMessage("Please select a file.");
			return;
		}

		const formData = new FormData();
		formData.append("file", file);

		axios
			.post("http://localhost:5000/process-file", formData)
			.then((response) => {
				console.log(response.data);
				setMessage(response.data.message);
				downloadResult(response.data.result_path); // Pass the result path for downloading
			})
			.catch((error) => {
				setMessage("An error occurred during file processing.");
				console.log(error);
			});
	};

	const downloadResult = (resultPath) => {
		console.log("In DLres, result path is ", resultPath);
		axios
			.get("http://localhost:5000/download-result", {
				params: {
					resultPath: resultPath,
				},
				responseType: "blob", // Set the response type to 'blob'
			})
			.then((response) => {
				const url = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", resultPath.split("/").pop());
				document.body.appendChild(link);
				link.click();
				link.remove();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="container">
			<div className="section">
				<h2 className="section-heading">Enter File</h2>
				<hr></hr>
				<form className="form" onSubmit={handleSubmit}>
					<input
						className="form-input"
						type="file"
						onChange={handleFileChange}
					/>
					{/* <hr></hr> */}
					<button className="form-button" type="submit">
						Process File
					</button>
				</form>
				<p className="message">{message}</p>
			</div>
			{/* <hr></hr> */}
			<div className="outer">
				<button className="form-button2" type="submit">
					Assign Teacher Duties
				</button>
			</div>
		</div>
	);
};

export default InputFile;
