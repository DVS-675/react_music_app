import Main from './main/main'
import Bar from './bar/bar'
import classes from './content.module.css'

function Container({loading}) {
  return (
    <div className={classes.container}>
      <Main loading={loading}/>
      <Bar loading={loading}/>
      <footer/>
    </div>
  )
}

export default Container