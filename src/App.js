import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import './App.css';

class App extends Component {
  state = {
    input: '',
  };

  handleButtonClick = (value) => {
    if (value === '=') {
      this.calculateResult();
    } else if (value === 'C') {
      this.clearInput();
    } else if (value === 'DEL') {
      this.deleteLastCharacter();
    } else {
      this.setState((prevState) => ({
        input: prevState.input + value,
      }));
    }
  };

  calculateResult = () => {
    try {
      this.setState({
        input: eval(this.state.input).toString(),
      });
    } catch (error) {
      this.setState({
        input: 'Error',
      });
    }
  };

  clearInput = () => {
    this.setState({ input: '' });
  };

  deleteLastCharacter = () => {
    this.setState((prevState) => ({
      input: prevState.input.slice(0, -1),
    }));
  };

  render() {
    return (
      <div className="App">
        <Display input={this.state.input} />
        <div className="calculator">
          <Button value="7" onClick={this.handleButtonClick} />
          <Button value="8" onClick={this.handleButtonClick} />
          <Button value="9" onClick={this.handleButtonClick} />
          <Button value="DEL" onClick={this.handleButtonClick} className="lcol" />
          <Button value="4" onClick={this.handleButtonClick} />
          <Button value="5" onClick={this.handleButtonClick} />
          <Button value="6" onClick={this.handleButtonClick} />
          <Button value="/" onClick={this.handleButtonClick} />
          <Button value="1" onClick={this.handleButtonClick} />
          <Button value="2" onClick={this.handleButtonClick} />
          <Button value="3" onClick={this.handleButtonClick} />
          <Button value="*" onClick={this.handleButtonClick} />
          <Button value="0" onClick={this.handleButtonClick} />
          <Button value="." onClick={this.handleButtonClick} />
          <Button value="=" onClick={this.handleButtonClick} />
          <Button value="-" onClick={this.handleButtonClick} />
          <Button value="+" onClick={this.handleButtonClick} />
          
        </div>
      </div>
    );
  }
}

export default App;
