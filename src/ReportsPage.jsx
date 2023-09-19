import React, { useState, useEffect } from "react";
import axios from "axios";

const ReportsPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get_report");
      if (response.data.message === "Success") {
        const jsonData = JSON.parse(response.data.data);
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
          <div className="button">
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
          </div>
        </div>
      </div>

      <h1>Report</h1>
      <table>
        <thead>
          <tr >
            <th>Programme Name</th>
            <th>Paper Type</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td>{value["Programme Name"]}</td>
              <td>{value["Paper Type"]}</td>
              <td>{value["count"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsPage;
