import React, {Component} from 'react';
import logo from './logo.svg';
import './style/ionicons.css'
import './App.css';


const DEFAULT_HEIGHT = 20;

export default class Textarea extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: DEFAULT_HEIGHT,
      value: "Don't get lost in the upside down",
    };

    this.setValue = this.setValue.bind(this);
    this.setFilledTextareaHeight = this.setFilledTextareaHeight.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.setFilledTextareaHeight();
  }

  setFilledTextareaHeight() {
    if (this.mounted) {
      const element = this.ghost;

      this.setState({
        height: element.clientHeight,
      });
    }
  }

  setValue(event) {
    console.log('on change')
    const { value }= event.target;

    this.setState({ value });
  }

  getExpandableField() {
    const isOneLine = this.state.height <= DEFAULT_HEIGHT;
    const { height, value } = this.state;

    return (
      <div>
        <label htmlFor="textarea">Add some text...</label>
        <textarea
          className="textarea"
          name="textarea"
          id="textarea"
          autoFocus={true}
          defaultValue={value}
          style={{
            height,
            resize: isOneLine ? "none" : null
          }}
          onChange={this.setValue}
          onKeyUp={this.setFilledTextareaHeight}
        />

      </div>
    );
  }

  getGhostField() {
    return (
      <div
        className="textarea textarea--ghost"
        ref={(c) => this.ghost = c}
        aria-hidden="true"
      >
        
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.getExpandableField()}
        {this.getGhostField()}
      </div>
    );
  }
}