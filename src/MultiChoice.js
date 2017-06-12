import React, {Component} from 'react';
import logo from './logo.svg';
import './style/ionicons.css'
import './App.css';

class MultiChoice extends Component {

  _handleClick() {
    this.props.onSelect(this.props.index)
  }


  render(){
    return (
      <div className="multi-choice">
        <div className="container">
          <div className={"checked " + (this.props.active ? "ion-checkmark-circled" : "")} />
          <img 
              src={this.props.imageURL} 
              className={this.props.active} 
              alt={`multi-choice-image${this.props.index}`}
              onClick={this._handleClick.bind(this)}
            />  
          
        </div>
      </div>
    );
  }
}

export default MultiChoice;
