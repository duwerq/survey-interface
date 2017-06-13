import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group'

// components 
import Questions from './Questions'
import Answers from './Answers'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyStart: false,
      surveyEnd: false,

    };
    this._submit = this._submit.bind(this);
  }

  _submit(one, two, three, questions) {
    this.setState({
      surveyEnd: true,
      one,
      two,
      three,
      questions
    })
    console.log('submission', one, two, three)
  }
 
  render() { 
    console.log('app state', this.state)
  
    return (
      <div className="app" >
        {!this.state.surveyStart ?
            <div className="app-body">
              <div className="survey-title">Tell Us How You Really Feel</div>
              <button onClick={() => this.setState({surveyStart: true})}>START SURVEY</button>
            </div>
          : null
        }
        {this.state.surveyEnd ? null : (this.state.surveyStart ? <Questions submit={this._submit}/> : null)}
        {this.state.surveyEnd ?
          <Answers one={this.state.one} two={this.state.two} three={this.state.three} questions={this.state.questions}/>
          : null
        }
      </div>
    );
  }
}

export default App;
