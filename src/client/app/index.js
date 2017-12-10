import React, { Component } from 'react'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import MyRoute from './components/MyRoute'

import Topics from './pages/Topics';
import About from './pages/About';
import Home from './pages/Home';

export default class App extends Component {

  constructor(){
    super();
    this.state = { inputValue: '' }
  }

  onInputChange = (e) => {
    this.setState({inputValue: e.target.value })
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr/>
          <input type="text" onChange={this.onInputChange}></input>

          <MyRoute exact path="/" component={Home} inputValue={ this.state.inputValue }/>
          <MyRoute path="/about" component={About}/>
          <MyRoute path="/topics" component={Topics}/>
        </div>
      </BrowserRouter>
    )
  }x
}