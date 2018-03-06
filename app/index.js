import React from 'react';

import { quizz } from './q'

import Quizz from './Quizz'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { started: false }
  }

  handleStart = async () => {
    console.log('click start')
    const response = await fetch('/register', { method: 'POST' })
    const json = await response.json()
    window.localStorage.setItem('token', json.token)
    this.setState({ started: true })
  }

  render(){
    if(this.state.started) return <Quizz/>
    return (
      <div>
        <button onClick={this.handleStart} > Commencer le quizz </button>
      </div>
    )
  }
}

export default App