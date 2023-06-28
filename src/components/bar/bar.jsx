import BarPlayerBlock from "./bar-player-block/barPlayerBlock"

function Bar({loading}) {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <BarPlayerBlock loading={loading}/>
      </div>
    </div>
  )
}

export default Bar
