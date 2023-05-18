import React from "react"
import { useDispatch } from "react-redux"
import { submitAnswer } from "../redux/actions"

const Question = ({ question }) => {
  const dispatch = useDispatch()

  const handleAnswerSelection = (questionId, selectedAnswer) => {
    dispatch(submitAnswer(questionId, selectedAnswer))
  }

  return (
    <div className="question">
      <h3>{question.question}</h3>
      <ul className="answers">
        {question.answers.map((answer) => (
          <li className="answer" key={answer.id}>
            <label>
              <input
                type="radio"
                name={`question_${question.id}`}
                value={answer.id}
                onChange={() => handleAnswerSelection(question.id, answer.id)}
              />
              {answer.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question
