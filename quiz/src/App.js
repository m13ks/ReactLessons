import React from "react"
import QuizContextProvider from "./contexts/QuizContext"
import Quiz from "./componets/Quiz"
import Results from "./componets/Results"
import "./styles.css"

function App() {
  return (
    <QuizContextProvider>
      <Quiz />
      <Results />
    </QuizContextProvider>
  )
}

export default App
