import { MainPlaylistItem } from "./playlistItem"
import classes from "./playlist.module.css"
import { setPlayTrack } from "../../../../store/actions/creators/tracks"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useIsPlayingContext } from "../../../../contexts/isPlaying"

export const MainPlaylist = ({
  getTracksError,
  tracks,
  loading,
  setCurrentTrack,
}) => {
  const dispatch = useDispatch()

  const playedTrack = useSelector((store) => store.tracks.playTrack)
  const { isPlaying, toggleIsPlaying } = useIsPlayingContext()

  const elements =
    tracks &&
    tracks.map((item) => {
      return (
        <div
          onClick={() => {
            dispatch(setPlayTrack(item))
            toggleIsPlaying(true)
          }}
          key={item.id}
        >
          <MainPlaylistItem
            item={item}
            playedTrack={playedTrack}
            isPlaying={isPlaying}
            id={item.id}
            name={item.name}
            author={item.author}
            releaseDate={item.release_date}
            genre={item.genre}
            durationInSeconds={item.duration_in_seconds}
            album={item.album}
            logo={item.logo}
            trackFile={item.track_file}
          />
        </div>
      )
    })

  return (
    <>
      {getTracksError
        ? "не удалось загрузить плейлист, попробуйте позже"
        : null}
      {loading ? "loading" : <div className={classes.playlist}>{elements}</div>}
    </>
  )
}
