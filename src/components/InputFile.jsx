import React, { useState } from "react";
import axios from "axios";
import "./InputFile.css";

const InputFile = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [datesheet, setDatesheet] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDatesheetChange = (event) => {
    console.log(event.target.files);
    for (let i = 0; i < event.target.files.length; i++) {
      setDatesheet((prevDatesheet) => [
        ...prevDatesheet,
        event.target.files[i],
      ]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file && !datesheet) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    // if students file is provided and datesheet is not provided
    if (file && !datesheet) {
      formData.append("file", file);
      axios
        .post("http://localhost:5000/process-file", formData)
        .then((response) => {
          setMessage(response.data.message);
          downloadResult(response.data.result_path); // Pass the result path for downloading
        })
        .catch((error) => {
          setMessage(
            "An error occurred during file processing. Check console."
          );
          console.log(error);
        });
    }
    // if students file is not provided and datesheet is provided
    if (datesheet && !file) {
      formData.append("datesheet", datesheet);
      axios
        .post("http://localhost:5000/process-datesheet", formData)
        .then((response) => {
          console.log("Form data was : ", formData);
        })
        .catch((err) => {
          setMessage(err.message);
        });
    }
  };

  const downloadResult = (resultPath) => {
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
            accept=".xls,.xlsx"
            onChange={handleFileChange}
          />
          <button className="form-button" type="submit">
            Process File
          </button>
          <input
            type="file"
            className="form-input2"
            id=""
            accept="application/pdf"
            multiple
            onChange={handleDatesheetChange}
          />
          <button className="form-button3" type="submit">
            Process Datesheet
          </button>
        </form>
        <p className="message">{message}</p>
      </div>
      <div className="outer">
        <button className="form-button2" type="submit">
          Assign Teacher Duties
        </button>
      </div>
    </div>
  );
};

export default InputFile;
