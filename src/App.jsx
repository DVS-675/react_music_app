
import classes from "./App.module.css"
import { AppRoutes } from "./routes"

function App() {
  return (
    <div className={classes.wrapper}>
      <AppRoutes />
    </div>
  )
}

export default App
