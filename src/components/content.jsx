import Main from './main/main'
import Bar from './bar/bar'

function Container({loading}) {
  return (
    <div className="container">
      <Main loading={loading}/>
      <Bar loading={loading}/>
      <footer className="footer" />
    </div>
  )
}

export default Container