// App.js
import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "./redux/reducer"
import Quiz from "./components/Quiz"

const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  )
}

export default App
