
import { useState } from "react";
import classes from "./App.module.css"
import { AppRoutes } from "./routes"


function App() {
  /* const [user, setUser] = useState(null)
  const handleLogin = () => setUser({ login: 'dimas'});
  const handleLogout= () => setUser(null); */
  return (
    <div className={classes.wrapper}>
      <AppRoutes />
    </div>
  )
}

export default App
