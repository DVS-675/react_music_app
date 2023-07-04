
import { useEffect, useState } from "react"
import Container from "./components/content"
import classes from "./App.module.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  })

  return (
    <div className={classes.wrapper}>
      <Container loading={loading} />
    </div>
  )
}

export default App
