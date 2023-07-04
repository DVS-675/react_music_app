import "./css/App.css"
import { useEffect, useState } from "react"
import Container from "./components/content"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  })

  return (
    <div className="wrapper">
      <Container loading={loading}/>
    </div>
  )
}

export default App
