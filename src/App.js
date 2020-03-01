import React from 'react';
import logo from './logo.svg';
import './App.scss';
import FormExample from './examples/form/form-example';
import GoogleMapExample from './examples/form/google-map-example';

function App() {
  return (
    <div>
      <header>
        <div className="navbar navbar-dark bg-dark">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <img src={logo} width="30" height="30"/>
            Hyper Island
          </a>
        </div>
      </header>
      <div className="d-flex flex-column align-items-center container">
        <div className="jumbotron text-center">
          <h1 className="jumotron-heading">
            Choose your tomorrow
          </h1>
          <p className="lead text-muted">
          Discover how to anticipate and adapt to the latest trends and digital technology to make real progress in your career and accelerate business transformation.
          </p>
          <p>
            <a href="#" className="btn btn-primary m-2">Main action</a>
            <a href="#" className="btn btn-secondary m-2">Secondary action</a>
          </p>
        </div>
        <GoogleMapExample />
      </div>
      <footer className="d-flex mt-4 py-4 bg-light flex-column align-items-center">
        <div>
          <FormExample />
        </div>
      </footer>
    </div>
  );
}

export default App;
