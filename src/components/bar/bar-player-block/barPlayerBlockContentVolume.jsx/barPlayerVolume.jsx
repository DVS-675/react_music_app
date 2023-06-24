import { ReactComponent as Volume } from '../../../../img/icon/volume.svg'

function BarPlayerVolume() {
  return (
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <div className="volume__image">
          <svg className="volume__svg" alt="volume">
            <Volume/>
          </svg>
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

export default BarPlayerVolume
