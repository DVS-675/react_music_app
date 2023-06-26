import BarPlayerBlock from "./bar-player-block/barPlayerBlock"

function Bar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <BarPlayerBlock />
      </div>
    </div>
  )
}

export default Bar
