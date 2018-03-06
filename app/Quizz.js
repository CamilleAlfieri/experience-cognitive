import React from 'react';

import { quizz } from './q'

import Question from './Question'
import Button from './Button'
import Image from './Image'

class Quizz extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      question: 0,
      answer: '',
      opacity: 0
    }
  }

  sendAnswer = () => {
    fetch('/answer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        answer: this.state.answer,
        question: this.state.question,
        token: window.localStorage.getItem('token')
      })
    })
    this.flashImage()
    this.setState((previousState)=>({
      question: previousState.question + 1,
      answer: ''
    }))
    
  }

  flashImage = () => {
    this.setState({opacity:1})
    setTimeout(()=>{
      this.setState({opacity:0})
    },5)
  }

  onChange = (e) => {
    this.setState({answer: e.target.value})
  }

  render(){
    const { question, answer,opacity } = this.state
    return (
      <div>
        Quizz
        <Question {...quizz[question]} numero={question} answer={answer} onChange={this.onChange} />
        <Button sendAnswer={this.sendAnswer} />
        <Image src={'https://cdn.pixabay.com/photo/2016/01/16/23/05/cat-1144198_960_720.png'} opacity={opacity} />
      </div>
    )
  }
}

export default Quizz