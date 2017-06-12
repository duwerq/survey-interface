import React, { Component } from 'react';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group'

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
      <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
      <div className="question-container">
      
          <div className="question-number">
            <div style={{position: "absolute", top: "0px", right: "10px", display: "flex", flexDirection: "row", alignItems: 'center'}}>
              <span>{this.props.number}</span>
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
          <div style={{display: "flex", flex: 1}}/>
        
      </div>
      </CSSTransitionGroup>
    )
  }
}
export default Question;