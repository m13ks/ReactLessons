// actions.js
export const submitAnswer = (questionId, selectedAnswer) => {
  return {
    type: "SUBMIT_ANSWER",
    payload: {
      questionId,
      selectedAnswer,
    },
  }
}

export const calculateScore = () => {
  return {
    type: "CALCULATE_SCORE",
  }
}
