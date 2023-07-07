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

  const handleStudentFileSubmit = (event) => {
    event.preventDefault();
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    if (file) {
      formData.append("file", file);
      console.log("Sending the students file.");
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

  const downloadDatesheet = (resultPath) => {
    axios
      .get("http://localhost:5000/download-datesheet", {
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

  const handleDatesheetChange = (event) => {
    console.log(event.target.files);
    const selectedFiles = Array.from(event.target.files);
    setDatesheet(selectedFiles);
  };

  const handleDatesheetSubmit = (event) => {
    event.preventDefault();
    if (!datesheet || datesheet.length === 0) {
      setMessage("Please select the datesheet.");
      return;
    }
    const formData = new FormData();
    datesheet.forEach((file) => {
      formData.append("datesheet", file);
    });
    console.log("Sending the datesheet file.");
    console.log(formData);

    axios
      .post("http://localhost:5000/process-datesheet", formData)
      .then((response) => {
        setMessage(response.data.message);
        downloadDatesheet(response.data.result_path);
      })
      .catch((error) => {
        setMessage(
          "An error occurred during datesheet processing. Check console."
        );
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="section">
        <h2 className="section-heading">Enter File</h2>
        <hr></hr>
        <form className="form" onSubmit={handleStudentFileSubmit}>
          <input
            className="form-input"
            type="file"
            accept=".xls,.xlsx"
            onChange={handleFileChange}
          />
          <button className="form-button" type="submit">
            Process File
          </button>
        </form>
        <form className="form" onSubmit={handleDatesheetSubmit}>
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
