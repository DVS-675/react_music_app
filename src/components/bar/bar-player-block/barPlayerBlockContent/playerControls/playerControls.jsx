import { ReactComponent as Play } from "../../../../../img/icon/play.svg"
import { ReactComponent as Prev } from "../../../../../img/icon/prev.svg"
import { ReactComponent as Next } from "../../../../../img/icon/next.svg"
import { ReactComponent as Repeat } from "../../../../../img/icon/repeat.svg"
import { ReactComponent as Shuffle } from "../../../../../img/icon/shuffle.svg"
import { ReactComponent as Pause } from "../../../../../img/icon/pause.svg"
import classes from "./playerControls.module.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  setPlayTrack,
  setTracksIds,
} from "../../../../../store/actions/creators/tracks"
import {
  playTrackSelector,
  tracksAllSelector,
  tracksIdsSelector,
} from "../../../../../store/selectors/tracks"

import {
  shuffle,
  findNextTrackId,
  findPrevTrackId,
} from "../../../../../utils/playerHelpers"

export const PlayerControls = ({ audioRef }) => {
  const [shuffleClick, setShuffleClick] = useState(false)
  const playTrack = useSelector(playTrackSelector)
  const allTracks = useSelector(tracksAllSelector)
  const tracksIds = useSelector(tracksIdsSelector)
  const dispatch = useDispatch()
  const [isPlaying, setIsPlaying] = useState(true);
  const [playerState, setPlayerState] = useState({
    isPaused: false,
    isLoop: false,
  })

  // const playTrack = useSelector((store) => {
  //   if (!store.tracks.playTrack) {
  //     return null;
  //   }
  //   return store.tracks.playTrack;
  // });

  if (audioRef.current) audioRef.current.loop = playerState.isLoop

  console.log(playerState.isLoop)

  const handlerOnPlay = () => {
    audioRef.current.play()
    setPlayerState({ ...playerState, isPaused: false })
  }

  const handlerOnPause = () => {
    audioRef.current.pause()
    setPlayerState({ ...playerState, isPaused: true })
  }

  const handlerOnLoop = () => {
    setPlayerState({ ...playerState, isLoop: !playerState.isLoop })
  }

  const toggleShuffle = () => {
    setShuffleClick(!shuffleClick)
    let ids = allTracks.map((track) => track.id)
    if (!shuffleClick) {
      ids = shuffle(ids)
      dispatch(setTracksIds(ids))
    } else {
      ids = allTracks.map((track) => track.id)
      dispatch(setTracksIds(ids))
    }
  }

  const toggleNext = () => {
    setPlayerState({ ...playerState, isPaused: false })
    console.log(playTrack)
    const index = tracksIds.indexOf(playTrack.id)

    let nextId
    if (index === allTracks.length - 1) {
      nextId = tracksIds[allTracks.length - 1]
    } else {
      nextId = tracksIds[index + 1]
    }
    console.log(nextId)
    dispatch(setPlayTrack(findNextTrackId(nextId, allTracks)))
  }

  const togglePrev = () => {
    setPlayerState({ ...playerState, isPaused: false })
    console.log(playTrack)
    const index = tracksIds.indexOf(playTrack.id)
    let prevId
    if (index === 0) {
      prevId = tracksIds[0]
    } else {
      prevId = tracksIds[index - 1]
    }
    console.log(prevId)
    dispatch(setPlayTrack(findPrevTrackId(prevId, allTracks)))
  }

  return (
    <div className={classes.controls}>
      <div onClick={togglePrev} role="button" className={classes.btn_prev}>
        <Prev className={classes.btn_prev_svg} alt="prev" />
      </div>
      {playerState.isPaused ? (
        <div
          onClick={() => handlerOnPlay()}
          className={`${classes.btn_pause} ${classes._btn}`}
        >
          <Play className={classes.btn_play_svg} alt="play" />
        </div>
      ) : (
        <div
          onClick={() => handlerOnPause()}
          className={`${classes.btn_play} ${classes._btn}`}
        >
          <Pause className={classes.btn_pause_svg} alt="pause" />
        </div>
      )}
      <div onClick={toggleNext} role="button" className={classes.btn_next}>
        <Next className={classes.btn_next_svg} alt="next" />
      </div>
      <div
        onClick={() => handlerOnLoop()}
        className={`${classes.btn_repeat} ${classes._btn_icon}`}
      >
        <Repeat
          className={
            playerState.isLoop
              ? `${classes.btn_repeat_svg_active}`
              : `${classes.btn_repeat_svg}`
          }
          alt="repeat"
        />
      </div>
      <div
        onClick={toggleShuffle}
        role="button"
        className={`${classes.btn_shuffle} ${classes._btn_icon}`}
      >
        <Shuffle
          className={
            shuffleClick
              ? `${classes.btn_repeat_svg_active}`
              : `${classes.btn_repeat_svg}`
          }
          alt="shuffle"
        />
      </div>
    </div>
  )
}
