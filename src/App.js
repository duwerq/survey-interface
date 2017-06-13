import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group'

// components 
import MultiChoice from './MultiChoice'
import MultiSelect from './MultiSelect'
import Question from './Question'
import Textarea from 'react-textarea-autosize';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
    };
    this._nextQuestion = this._nextQuestion.bind(this);
    this._previousQuestion = this._previousQuestion.bind(this);
    this._questionOneSelect = this._questionOneSelect.bind(this);
    this._questionTwoSelect = this._questionTwoSelect.bind(this);
    this._questionThreeSelect = this._questionThreeSelect.bind(this);
  }

  _nextQuestion(){
    console.log('next question')
    if ((this.state.questionNumber + 1) === 3) {
      this.setState({
        questionNumber: 0
      })
    } else {
      this.setState({
        questionNumber: this.state.questionNumber + 1
      })
    }
  }

  _previousQuestion(){
    if ((this.state.questionNumber - 1) < 0) {
      this.setState({
        questionNumber: 2
      })
    } else {
      this.setState({
        questionNumber: this.state.questionNumber - 1
      })
    }
  }
  _questionOneSelect(questionOne) {
    console.log('questionOne', questionOne)
    this.setState({questionOne})
  }

  _questionTwoSelect(questionTwo) {
    this.setState({questionTwo})
  } 

  _questionThreeSelect(questionThree) {
    this.setState({questionThree})
  }

 
  render() { 
    let multiChoiceOptions = ['http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150']
    let multiSelectOptions = ["hello", "hello", "hello"]
    let questionOneProgress = this.state.questionOne > -1 ? .333 : 0
    let questionTwoProgress = this.state.questionTwo ? .333 : 0
    let questionThreeProgress = this.state.questionThree ? .333 : 0
    let progress = questionOneProgress + questionTwoProgress + questionThreeProgress
    return (
      <div className="App" >
        
        <div style={{flex: 3, alignItems: "center", overflowY: "scroll"}} >
          
          {this.state.questionNumber === 0 ? 
            <Question  
              question={"Which is your favorite?"} 
              number={1} 
              nextQuestion={this._nextQuestion} 
              previousQuestion={this._previousQuestion}
              progress={progress}
            >
              <MultiChoice 
                active={this.state.questionOne ? this.state.questionOne : null}  
                options={multiChoiceOptions} 
                onSelect={this._questionOneSelect}
              />
            </Question>
          : null
          }

          {this.state.questionNumber === 1 ?
            <Question 
              question={"Which is your favorite?"} 
              number={2} 
              nextQuestion={this._nextQuestion} 
              previousQuestion={this._previousQuestion}
              progress={progress}
            >
              <MultiSelect 
                options={multiSelectOptions} 
                onSelect={this._questionTwoSelect} 
                selected={this.state.questionTwo ? this.state.questionTwo : []} 
              />
            </Question>
          : null
          }

          {this.state.questionNumber === 2 ? 
            <Question 
              question={"Which is your favorite?"} 
              number={3} 
              nextQuestion={this._nextQuestion} 
              previousQuestion={this._previousQuestion}
              progress={progress}
            >
              <Textarea
                maxRows={15}
                defaultValue={this.state.questionThree}
                placeholder="Type text here"
                onChange={e => this._questionThreeSelect(e.target.value)}
              />
            </Question> 
            : null
          }
          
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
