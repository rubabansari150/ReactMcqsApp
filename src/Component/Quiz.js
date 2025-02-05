import React, { useState } from "react";
import "./Quiz.css";
import questions from "./QuizData";
import QuizResult from "./QuizResult";
import LoginForm from "./LoginForm";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [click, setClick] = useState(false);
  const [user, setUser] = useState(null);

  const handleNextOption = () => {
    setClick(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const answerOptionHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5);
      setCorrectAnswer(correctAnswer + 1);
    }
    setClick(true);
  };

  const handleRestartBtn = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAnswer(0);
    setShowResult(false);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div className="app">
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : showResult ? (
        <QuizResult
          score={score}
          correctAnswer={correctAnswer}
          handleRestartBtn={handleRestartBtn}
        />
      ) : (
        <>
          <div className="question-section">
            <div className="wellcome">
            <h5>Welcome, {user.userName} Roll No: {user.rollNumber}</h5>
            <h5>Score: {score}</h5>
            </div>
           
            <div className="question-count">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answeroptions.map((ans, i) => (
              <button
                className={`button ${click && ans.isCorrect ? "correct" : "button"}`}
                disabled={click}
                onClick={() => answerOptionHandler(ans.isCorrect)}
                key={i}
              >
                {ans.answerText}
              </button>
            ))}
            <div className="action">
              <button onClick={handleRestartBtn}>Quit</button>
              <button onClick={handleNextOption} disabled={!click}>
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
