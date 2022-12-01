import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '';
import Menu from '';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
        <Navbar/>
        <Menu/>
      </BrowserRouter>
    );
  }
}

export default App;
