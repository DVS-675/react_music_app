import Cookies from "js-cookie"
import classes from "./App.module.css"
import { AppRoutes } from "./routes"

const user = Cookies.get("token")
function App() {
  return (
    <div className={classes.wrapper}>
      <AppRoutes user={user} />
    </div>
  )
}

export default App
