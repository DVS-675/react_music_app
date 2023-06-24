import BarPlayerContent from "./barPlayerBlockContent/barPlayerContent"
import BarPlayerVolume from "./barPlayerBlockContentVolume.jsx/barPlayerVolume"

function BarPlayerBlock() {
  return (
    <div className="bar__player-block">
      <div className="bar__player player">
        <BarPlayerContent />
      </div>
      <BarPlayerVolume />
    </div>
  )
}

export default BarPlayerBlock
