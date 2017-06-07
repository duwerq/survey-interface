import React, { Component } from 'react';
import './App.css';

import MultiChoice from './MultiChoice'

class Question extends Component {
  constructor(){
    super();
      this.state = {
        active: null,
      }
    
  } 

  render() {
    console.log("question", this.props)
    return (
      <div className="question-container">
        <div className="question-number">
          <div style={{position: "absolute", top: "0px", right: "10px", display: "flex", flexDirection: "row", alignItems: 'center'}}>
            <span>{this.props.number}</span>
            <div className='ion-arrow-right-c' style={{paddingLeft: "10px", fontSize: "24px"}}/>
          </div>
        </div>
        <div className="question">
          <div className="question-text">
          {this.props.question}
          </div>
          <div>
          {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
export default Question;