import { useState, createContext } from "react"
import questions from "../questions"

export const QuizContext = createContext()

const QuizContextProvider = (props) => {
  const [score, setScore] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isQuizFinished, setIsQuizFinished] = useState(false)

  const handleAnswer = (answerId) => {
    if (isQuizFinished) {
      return
    }

    const currentQuestion = questions[currentQuestionIndex]
    const currentAnswer = currentQuestion.answers.find(
      (answer) => answer.id === answerId
    )

    if (currentAnswer.isCorrect) {
      setScore(score + 1)
    }

    const nextQuestionIndex = currentQuestionIndex + 1

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex)
    } else {
      setIsQuizFinished(true)
    }
  }

  const resetQuiz = () => {
    setScore(0)
    setCurrentQuestionIndex(0)
    setIsQuizFinished(false)
  }

  return (
    <QuizContext.Provider
      value={{
        score,
        currentQuestion: questions[currentQuestionIndex],
        isQuizFinished,
        handleAnswer,
        resetQuiz,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  )
}

export default QuizContextProvider
