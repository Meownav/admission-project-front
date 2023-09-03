import React, { Component } from 'react';
import axios from 'axios';

import "./styles/MainWindow.css";

class MainWindow extends Component {
  state = {
    result: null,
  };

  // courseMaster = () =>{
    // const inputData = {src_path : "../admission-project-backend/Data/ExternalData/dummy_uts.xlsx",dest_path : "../admission-project-backend/Data/ExternalData/dummy_uts.xlsx"}; // Input data for the Python function
  //   axios.post('http://localhost:3000/course_master')//, inputData)
  //     .then((response) => {
  //       const result = response.data.result;
  //       this.setState({ result });
  //     })
      // .catch((error) => {
      //   console.error('Error calling Python function:', error);
      // });
  // };

  render() {
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
              <button className="create" onClick={() => {
                axios.post('/Course_master',{src_path : "../admission-project-backend/Data/ExternalData/dummy_uts.xlsx",dest_path : "../admission-project-backend/Data/ExternalData/dummy_uts.xlsx"})//, inputData)
                // .then((response) => {
                //   const result = response.data.result;
                //   this.setState({ result });
                // })
                .catch((error) => {
                  console.error('heyy calling Python function:', error);
                });
              }} >
                Create
                </button>
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
            <div className="manual">
              <h2>Enter dates manually.</h2>
              <button className="create">Click</button>
            </div>
            <div className="againDate">
              <h2>Map dates. </h2>
              <button className="create">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainWindow;
