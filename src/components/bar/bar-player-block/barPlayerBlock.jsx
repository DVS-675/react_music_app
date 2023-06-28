import PlayerContent from "./barPlayerBlockContent/barPlayerContent"
import PlayerVolume from "./barPlayerBlockContentVolume.jsx/barPlayerVolume"

function BarPlayerBlock({loading}) {
  return (
    <div className="bar__player-block">
      <div className="bar__player player">
        <PlayerContent loading={loading}/>
      </div>
      <PlayerVolume />
    </div>
  )
}

export default BarPlayerBlock
