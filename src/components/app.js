import React, { Component } from 'react';
import * as math from 'mathjs';

import { Button } from './button';
import { Input } from './input';
import { ClearBtn } from './clear';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  }

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) })
  }

  render() {
    const ops = [["/","7","8","9"], ["*","4","5","6"], ["+","1","2","3"], ["-",".","0","^"]]
    return (
      <div className="calc-wrapper">
        <Input input={this.state.input}/>
        {ops.map((row, index) => {
          return (
            <div className="row" key={index}>
              {row.map((digit, index) => <Button handleClick={this.addToInput} key={index}>{digit}</Button>)}
            </div>
          )
        })}
        <div className="row">
          <Button handleClick={() => this.handleEqual()}>=</Button>
          <ClearBtn handleClear={() => this.setState({ input: "" })}>Clear</ClearBtn>
        </div>
      </div>
    )
  }
}
