import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group'



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
    	<CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
       >
      	<div className="submitted-answers-container">
          <span style={{alignSelf: "flex-start"}}>Submitted Answers:</span>
          <div className="answer">
            <div>
            	<span className="answer-question">{this.props.questions[0]}</span>
            </div>
            <div style={{width: "400px"}}>
            	<img src={this.props.one} alt="first-image"/>
            </div>
          </div>
          <div className="answer two">
            <div>
            	<span className="answer-question">{this.props.questions[1]}</span>
            </div>
            <div className="answer-two-container">
            {this.props.two.map((data,i ) => {
              return (
                <div style={{paddingLeft: "5px"}}>{`Choice ${i + 1}: ${data}`}</div>
              )
            })}
            </div>
          </div>
          <div className="answer">
            <div>
            	<span className="answer-question">{this.props.questions[2]}</span>
            </div>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            	<span style={{overflow: "auto"}}>{this.props.three}</span>
            </div>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default App;

