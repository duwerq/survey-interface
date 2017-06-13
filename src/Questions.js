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


let multiChoiceOptions = ['https://unsplash.it/200/300', 'https://unsplash.it/150/300', 'https://unsplash.it/200/400']
let multiSelectOptions = ["Pick Me", "No, Me!", "How about me?"]
let questions =  ["Which do you prefer?", "Select your favorites", "Any other feedback you can provide us?"]

class Questions extends Component {
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
    this._submit = this._submit.bind(this);
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
  _submit(progress) {
    if (progress < 1) {

    } else {
      let questionOne = multiChoiceOptions[this.state.questionOne]
      let questionTwo = []
      this.state.questionTwo.map((data) => {
        if (data.active) {
          questionTwo.push(data.option)
        } else {

        }
      })
      this.props.submit(questionOne, questionTwo, this.state.questionThree, questions)
    }
  }

  render() { 

    let questionOneProgress = this.state.questionOne > -1 ? (1/3) : 0
    let questionTwoProgress = this.state.questionTwo ? (1/3) : 0
    let questionThreeProgress = this.state.questionThree ? (1/3) : 0
    let progress = questionOneProgress + questionTwoProgress + questionThreeProgress

    return (
      <div className="question-container" >

        <div style={{flex: 3, alignItems: "center", overflowY: "scroll"}}>
          {this.state.questionNumber === 0 ? 
            <Question  
              question={"Which do you prefer?"} 
              number={1} 
              nextQuestion={this._nextQuestion} 
              previousQuestion={this._previousQuestion}
              progress={progress}
              submitQuestion={this._submit}
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
              question={"Select your favorites"} 
              number={2} 
              nextQuestion={this._nextQuestion} 
              previousQuestion={this._previousQuestion}
              progress={progress}
              submitQuestion={this._submit}
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
              question={"Any other feedback you can provide us?"} 
              number={3} 
              nextQuestion={this._nextQuestion} 
              previousQuestion={this._previousQuestion}
              progress={progress}
              submitQuestion={this._submit}
            >
              <Textarea
                maxRows={9}
                defaultValue={this.state.questionThree}
                placeholder="Type text here"
                fontSize={20}
                onChange={e => this._questionThreeSelect(e.target.value)}
              />
            </Question> 
            : null
          }
        </div>
        
      </div>
    );
  }
}

export default Questions;
