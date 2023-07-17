import { MainSidebarBlockItem } from "./mainSidebarBlockItem"
import classes from './mainSidebarBlock.module.css'

export const MainSidebarBlock = () => {
  return (
    <div className={classes.block}>
      <div className={classes.list}>
        <MainSidebarBlockItem />
      </div>
    </div>
  )
}


