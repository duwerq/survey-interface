import React, { Component } from 'react';
import '../App.css';
import { CSSTransitionGroup } from 'react-transition-group'
import  {ProgressBar} from 'react-progressbar.js'

import Footer from '../Footer'

class Question extends Component {
  constructor(props){
    super(props);
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
        <div className="question-main-container" onScroll={() => console.log('scroll')}>
          <div className="question-body">
            <div className="question-number">
              <div style={{position: "absolute", top: "0px", right: "10px", display: "flex", flexDirection: "row", alignItems: 'center'}}>
                <span>{`${this.props.number}.`}</span>
              </div>
            </div>
            <div className="question-container">
              <div className="question">
                <div className="question-text">
                {this.props.question}
                </div>
                <div className="question-input">
                {this.props.children}
                </div>
              </div>
            </div>
            <div style={{display: "flex", flex: 1}}/>
            
          </div>
          <Footer 
            nextQuestion={this.props.nextQuestion} 
            previousQuestion={this.props.previousQuestion}
            progress={this.props.progress}
            submitButton={this.props.submitQuestion}
          />
        </div>
      </CSSTransitionGroup>
    )
  }
}
export default Question;