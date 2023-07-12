import Bar from "../../components/bar/bar"
import { NotFoundBox } from "./NotFoundBox/notFound"
import classes from "./index.module.css"


export const NotFound = () => {
    return (
        <div className={classes.container}>
          <NotFoundBox/>
          <Bar />
          <footer />
        </div>
      )
}
