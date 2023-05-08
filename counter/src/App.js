import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import Counter from "./components/Counter"

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} text={"Збільшити"} />
      <Button onClick={decreaseCount} text={"Зменшити"} />
    </div>
  )
}

export default App
