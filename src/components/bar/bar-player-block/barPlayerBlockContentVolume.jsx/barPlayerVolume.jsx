import { ReactComponent as Volume } from "../../../../img/icon/volume.svg"

function PlayerVolume() {
  return (
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <div className="volume__image">
          <Volume className="volume__svg" alt="volume" />
        </div>
        <div className="volume__progress _btn">
          <input
            className="volume__progress-line _btn"
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  )
}

export default PlayerVolume
