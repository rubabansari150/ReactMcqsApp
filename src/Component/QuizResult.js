import React from 'react'
import questions from './QuizData'

const QuizResult = (props) => {
  return (
    <div className='score-section'>
     <h2>Completed!</h2>
     <h4>Total Score: {props.score}/20</h4>
     <h4>Your correct Question {props.correctAnswer} out of {questions.length}</h4>
     <button className='restartbtn'  onClick={props.handleRestartBtn}>Restart Quiz</button>
    </div>
  )
}

export default QuizResult
