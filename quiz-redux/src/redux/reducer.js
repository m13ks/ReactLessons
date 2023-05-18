// reducer.js
import questions from "../components/questions"

const initialState = {
  questions: questions,
  answers: {},
  score: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_ANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.selectedAnswer,
        },
      }
    case "CALCULATE_SCORE":
      let score = 0
      state.questions.forEach((question) => {
        const selectedAnswer = state.answers[question.id]
        const correctAnswer = question.answers.find(
          (answer) => answer.isCorrect
        )?.id
        if (selectedAnswer && selectedAnswer === correctAnswer) {
          score++
        }
      })
      return {
        ...state,
        score: score,
      }
    default:
      return state
  }
}

export default reducer
