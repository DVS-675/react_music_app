import Main from './main/main'
import Bar from './bar/bar'

function Container() {
  return (
    <div className="container">
      <Main/>
      <Bar/>
      <footer className="footer" />
    </div>
  )
}

export default Container