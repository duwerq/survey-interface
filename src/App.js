import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group'

// components 
import MultiChoiceContainer from './MultiChoiceContainer'
import MultiSelect from './MultiSelect'
import Question from './Question'
import TextInput from './TextInput'
import Textarea from 'react-textarea-autosize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
    };
    this._nextQuestion = this._nextQuestion.bind(this);
    this._onSelect = this._onSelect.bind(this)
  }

  _nextQuestion(){
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

  _onSelect(data) {
    console.log('on select two', data)
    this.setState({
      questionTwo: data
    })
  } 
 
  render() {
    const questionOne = <Question question={"Which is your favorite?"} number={1}>
                          <MultiChoiceContainer />
                        </Question>
    const questionTwo = <Question question={"Which is your favorite?"} number={1}>
                          <MultiSelect options={["hello", "hello", "hello"]} onSelect={this._onSelect} selected={this.state.questionTwo} />
                        </Question>
    const questionThree =
      <Question question={"Which is your favorite?"} number={1}>
            <Textarea
              maxRows={5}
              defaultValue={this.state.value}
              onChange={e => console.log(e.target.value)}
            />
          </Question> 
    let questions = []
          
     questions.push(questionOne, questionTwo, questionThree)
     questions.map((question, i) => (
      <div key={i} onClick={() => this.handleRemove(i)}>
        {question}
      </div>
       ));
    return (
      <div className="App">
        
        <div style={{flex: 3, alignItems: "center", overflowY: "scroll"}}>
          <div className="ion-arrow-right-c" onClick={this._nextQuestion}/>
          {this.state.questionNumber === 0 ? 
            <Question question={"Which is your favorite?"} number={1}>
              <MultiChoiceContainer />
            </Question>
          : null
          }

          {this.state.questionNumber === 1 ?
            <Question question={"Which is your favorite?"} number={1}>
              <MultiSelect options={["hello", "hello", "hello"]} onSelect={this._onSelect} selected={!this.state.questionTwo ? [] : this.state.questionTwo} />
            </Question>
          : null
          }

          {this.state.questionNumber === 2 ? 
            <Question question={"Which is your favorite?"} number={1}>
              <Textarea
                maxRows={5}
                defaultValue={this.state.value}
                onChange={e => console.log(e.target.value)}
              />
            </Question> 
            : null
          }
        

          {/*questions.map((question,i) => {
            if (this.state.questionNumber === i)
              return (
                <div>
                  <div className="ion-arrow-right-c" onClick={this._nextQuestion}/>
                  {question}
                </div>
              )
          })*/}
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
