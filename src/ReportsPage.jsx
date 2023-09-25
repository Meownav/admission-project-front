import React, { useState, useEffect } from "react";
import axios from "axios";

const ReportsPage = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="main">
        <div className="card">
          <h2 id="heading">Generate reports</h2>
          <div className="button">
            <button onClick={fetchData}>Create Report 1</button>
          </div>
          {/* <div className="button">
            <button>button 2</button>
          </div>
          <div className="button">
            <button>button 3</button>
          </div>
          <div className="button">
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

      <center>
        <h1 id="report-heading">Report</h1>
      </center>
      <center>
        <table id="tbl">
          <thead>
            <tr>
              <th>Programme Name</th>
              <th>AEC</th>
              <th>Core</th>
              <th>DSC</th>
              <th>GE</th>
              <th>SEC</th>
              <th>VAC</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, idx) => (
              <tr key={idx} >
                <td key={"index" + idx}>{val["index"]}</td>
                <td key={"aec" + idx}>{val["AEC"]}</td>
                <td key={"core" + idx}>{val["CORE"]}</td>
                <td key={"dsc" + idx}>{val["DSC"]}</td>
                <td key={"ge" + idx}>{val["GE"]}</td>
                <td key={"sec" + idx}>{val["SEC"]}</td>
                <td key={"vac" + idx}>{val["VAC"]}</td>
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
