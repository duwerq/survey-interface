import React, { Component } from 'react';
import './App.css';
import {Line} from 'react-progressbar.js'

class Footer extends Component {
  constructor(props){
    super(props);
   
  } 

  render() {
  	let options = {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'},
      from: {color: '#FFEA82'},
      to: {color: '#00FF00'},
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
      }
    }
    return (
      <div className="footer">
        <div className="left-footer" />
        <div className="middle-footer">
        	<div className="middle-footer-container">
        		<div className="ion-arrow-left-c" onClick={this.props.previousQuestion}/>
        		<div className="progress-bar">
        			<Line
                progress={this.props.progress}
                options={options}
                containerClassName={'.progressbar'} 
              />
              <div className="submit-button-container">
                <div className="submit-button">
                  <button onClick={e => this.props.submitButton(this.props.progress)} style={{opacity: this.props.progress < 1 ? .6 : 1}}>SUBMIT</button>
                </div>
              </div>
        		</div>
        		<div className="ion-arrow-right-c" onClick={this.props.nextQuestion}/>
        	</div>
        </div>
        <div className="right-footer"/>
          
      </div>
    )
  }
}
export default Footer;



