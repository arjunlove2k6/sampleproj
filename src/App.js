import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Row, Col} from 'react-bootstrap';

function App() {
  return (
    <Row className="App">
      <Col>1st Col</Col>
      <Col>2nd Col</Col>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Row>
  );
}

export default App;
