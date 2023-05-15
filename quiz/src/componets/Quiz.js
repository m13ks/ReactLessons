import { useContext } from "react"
import { QuizContext } from "../contexts/QuizContext"

const Quiz = () => {
  const { currentQuestion, handleAnswer } = useContext(QuizContext)

  return (
    <div className="quiz">
      <h2 className="question">{currentQuestion.question}</h2>
      <ul className="answers">
        {currentQuestion.answers.map((answer) => (
          <li className="answer" key={answer.id}>
            <button onClick={() => handleAnswer(answer.id)}>
              {answer.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Quiz
