import React, { useState, useEffect } from "react";
import axios from "axios";

const ReportsPage = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      alert("Creating report 1. Please wait...");
      const response = await axios.get("http://localhost:5000/get_report");
      if (response.data.message === "Success") {
        const jsonData = JSON.parse(response.data.data);
        console.log(jsonData);
        setData(jsonData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [dataTwo, setDatatwo] = useState([]);
  const fetchDataTwo = async () => {
    try {
      alert("Creating report 2. Please wait...");
      const response = await axios.get("http://localhost:5000/get_reporttwo");
      if (response.data.message === "Success") {
        const jsonData = JSON.parse(response.data.data);
        console.log(jsonData);
        setDatatwo(jsonData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <div className="main">
        <div className="card">
          <h2 id="heading">Generate reports</h2>
          <div className="button">
            <button onClick={fetchData}>Student's Strength</button>
          </div>
          <div className="button">
            <button onClick={fetchDataTwo}>Gender Count</button>
          </div>
          <div className="button">
            <button>Drop-dow Menu</button>
          </div>
          {/*<div className="button">
            <button>button 4</button>
          </div>
          <div className="button">
            <button>button 5</button>
          </div>
          <div className="button">
            <button>button 6</button>
          </div>
          <div className="button">
            <button>button 7</button>
          </div>
          <div className="button">
            <button>button 8</button>
          </div>
          <div className="button">
            <button>button 9</button>
          </div> */}
        </div>
      </div>
      <hr  id="line"/>
      <center>
        <h1 id="report-heading" className="report-heading">
          Report 1 (Student's Strength)
        </h1>
      </center>
      <center>
        <table id="tbl" className="table">
          <thead>
            <tr>
              <th>Programme Name</th>
              <th>AEC</th>
              <th>Core</th>
              <th>DSC</th>
              <th>GE</th>
              <th>SEC</th>
              <th>VAC</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, idx) => (
              <tr key={idx}>
                <td key={"index" + idx}>{val["index"]}</td>
                <td key={"aec" + idx}>{val["AEC"]}</td>
                <td key={"core" + idx}>{val["CORE"]}</td>
                <td key={"dsc" + idx}>{val["DSC"]}</td>
                <td key={"ge" + idx}>{val["GE"]}</td>
                <td key={"sec" + idx}>{val["SEC"]}</td>
                <td key={"vac" + idx}>{val["VAC"]}</td>
                <td key={"total" + idx}>{val["Total"]}</td>
              </tr>
            ))}

            {/* {data.map((value, index) => (
            <tr key={index}>
              <td>{value["Programme Name"]}</td>
              <td>{value["Paper Type"]}</td>
              <td>{value["count"]}</td>
            </tr>
          ))} */}
          </tbody>
        </table>
      </center>
      {/*  */}
      <center>
        <h1 id="report-heading" className="report-heading">
          Report 2 (Gender Count)
        </h1>
      </center>
      <center>
        <table id="tb2" className="table">
          <thead>
            <tr>
              <th>Programme Name</th>
              <th>Female</th>
              <th>Male</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {dataTwo.map((val, idx) => (
              <tr key={idx}>
                <td key={"index" + idx}>{val["index"]}</td>
                <td key={"female" + idx}>{val["Female"]}</td>
                <td key={"male" + idx}>{val["Male"]}</td>
                <td key={"total" + idx}>{val["Total"]}</td>
              </tr>
            ))}

            {/* {data.map((value, index) => (
            <tr key={index}>
              <td>{value["Programme Name"]}</td>
              <td>{value["Paper Type"]}</td>
              <td>{value["count"]}</td>
            </tr>
          ))} */}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default ReportsPage;
