import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SingleImageUploadComponent from './components/single-image-upload.component';
import MultipleImageUploadComponent from './components/multiple-image-upload.component';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Single Image Upload Preview
              </div>
              <div className="card-body">
                <SingleImageUploadComponent />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Multiple Image Upload Preview
              </div>
              <div className="card-body">
                <MultipleImageUploadComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;