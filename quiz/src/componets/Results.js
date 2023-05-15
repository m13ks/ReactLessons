import { useContext } from "react"
import { QuizContext } from "../contexts/QuizContext"

const Results = () => {
  const { score, resetQuiz, isQuizFinished } = useContext(QuizContext)

  if (!isQuizFinished) {
    return null
  }

  return (
    <div className="results">
      <h2 className="score">Your score is {score}</h2>
      <button className="start-over-btn" onClick={resetQuiz}>
        Start Over
      </button>
    </div>
  )
}

export default Results
