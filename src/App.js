import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MultiChoiceContainer from './MultiChoiceContainer'
import Question from './Question'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div style={{flex: 3, alignItems: "center"}}>
          <Question question={"Which is your favorite?"} number={1}>
            <MultiChoiceContainer />
          </Question>
        </div>
        <div className="App-side-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default App;
