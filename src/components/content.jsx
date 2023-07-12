import Main from "./main/main"
import Bar from "./bar/bar"
import classes from "./content.module.css"
import { useEffect, useState } from "react"

function Container() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  })
  return (
    <div className={classes.container}>
      <Main loading={loading} />
      <Bar loading={loading} />
      <footer />
    </div>
  )
}

export default Container
