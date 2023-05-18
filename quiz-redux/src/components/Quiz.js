// Quiz.js
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { calculateScore } from "../redux/actions"
import Question from "./Question"
import "../styles.css"

const Quiz = () => {
  const questions = useSelector((state) => state.questions)
  const score = useSelector((state) => state.score)
  const dispatch = useDispatch()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (currentQuestionIndex === questions.length - 1) {
      dispatch(calculateScore())
      setSubmitted(true)
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    }
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="quiz">
      <Question question={currentQuestion} disabled={submitted} />
      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={submitted}
      >
        {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
      </button>
      {submitted && (
        <div className="results">
          <p className="score">Your score: {score}</p>
          <button
            className="start-over-btn"
            onClick={() => window.location.reload()}
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz
