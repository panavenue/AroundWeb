import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import {TopBar} from './TopBar';
//import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
      </div>
    );
  }
 }

export default App;
