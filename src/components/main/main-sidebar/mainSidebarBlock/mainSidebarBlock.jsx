import MainSidebarBlockItem from "./mainSidebarBlockItem"
import classes from './mainSidebarBlock.module.css'

function MainSidebarBlock() {
  return (
    <div className={classes.block}>
      <div className={classes.list}>
        <MainSidebarBlockItem />
      </div>
    </div>
  )
}

export default MainSidebarBlock
