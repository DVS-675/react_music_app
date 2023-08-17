import { ReactComponent as Play } from "../../../../../img/icon/play.svg"
import { ReactComponent as Prev } from "../../../../../img/icon/prev.svg"
import { ReactComponent as Next } from "../../../../../img/icon/next.svg"
import { ReactComponent as Repeat } from "../../../../../img/icon/repeat.svg"
import { ReactComponent as Shuffle } from "../../../../../img/icon/shuffle.svg"
import { ReactComponent as Pause } from "../../../../../img/icon/pause.svg"
import classes from "./playerControls.module.css"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  setPlayTrack,
  setTracksIds,
} from "../../../../../store/actions/creators/tracks"

import {
  shuffle,
  findNextTrackId,
  findPrevTrackId,
} from "../../../../../utils/playerHelpers"
import { useIsPlayingContext } from "../../../../../contexts/isPlaying"

export const PlayerControls = ({
  loading,
  volume,

  setCurrentTime,
  setDuration,
  currentTimeUser,
  currentTime,
  audioRef,
}) => {
  const [shuffleClick, setShuffleClick] = useState(false)
  const tracksIds = useSelector((store) => store.tracks.tracksIds)
  const dispatch = useDispatch()
  const { isPlaying, toggleIsPlaying } = useIsPlayingContext()
  const currentPlaylist = useSelector((store) => store.tracks.currentPlaylist)
  const [loopClick, setLoopClick] = useState(false)

  const playTrack = useSelector((store) => {
    if (!store.tracks.playTrack) {
      return null
    }
    return store.tracks.playTrack
  })

  const handlerOnPlay = () => {
    audioRef.current.play()
    if (!isPlaying) {
      toggleIsPlaying(true)
    }
  }

  const handlerOnPause = () => {
    audioRef.current.pause()
    toggleIsPlaying(false)
  }

  const handleRepeat = () => {
    setLoopClick(!loopClick)
  }

  const toggleShuffle = () => {
    setShuffleClick(!shuffleClick)
    let ids = currentPlaylist.map((track) => track.id)
    if (!shuffleClick) {
      ids = shuffle(ids)
      dispatch(setTracksIds(ids))
    } else {
      ids = currentPlaylist.map((track) => track.id)
      dispatch(setTracksIds(ids))
    }
  }

  const toggleNext = () => {
    toggleIsPlaying(true)
    const index = tracksIds.indexOf(playTrack.id)

    let nextId
    if (index === currentPlaylist.length - 1) {
      nextId = tracksIds[currentPlaylist.length - 1]
    } else {
      nextId = tracksIds[index + 1]
    }

    dispatch(setPlayTrack(findNextTrackId(nextId, currentPlaylist)))
  }

  const togglePrev = () => {
    toggleIsPlaying(true)

    const index = tracksIds.indexOf(playTrack.id)
    let prevId
    if (index === 0) {
      prevId = tracksIds[0]
    } else {
      prevId = tracksIds[index - 1]
    }

    dispatch(setPlayTrack(findPrevTrackId(prevId, currentPlaylist)))
  }

  useEffect(() => {
    if (currentTime === audioRef.current.duration && loopClick === false) {
      const index = tracksIds.indexOf(playTrack.id)
      let nextId
      if (index === currentPlaylist.length - 1) {
        nextId = tracksIds[currentPlaylist.length - 1]
      } else {
        nextId = tracksIds[index + 1]
      }

      dispatch(setPlayTrack(findNextTrackId(nextId, currentPlaylist)))
    }
  }, [currentTime])

  useEffect(() => {
    audioRef.current.currentTime = currentTimeUser
  }, [currentTimeUser])

  useEffect(() => {
    audioRef.current.volume = volume / 100
    audioRef.current.loop = loopClick
  }, [loopClick, volume])

  useEffect(() => {
    const ref = audioRef.current
    const handleTimeUpdateEvent = () => {
      if (ref.currentTime && ref.duration) {
        setCurrentTime(ref.currentTime)
        setDuration(ref.duration)
      } else {
        setCurrentTime(0)
        setDuration(0)
      }
    }

    ref.addEventListener("timeupdate", handleTimeUpdateEvent)

    return () => {
      ref.removeEventListener("timeupdate", handleTimeUpdateEvent)
    }
  }, [])

  const togglePlay = isPlaying ? handlerOnPause : handlerOnPlay

  return (
    <div className={classes.controls}>
      <div onClick={togglePrev} role="button" className={classes.btn_prev}>
        <Prev className={classes.btn_prev_svg} alt="prev" />
      </div>

      <div onClick={togglePlay} tabIndex={0} role="button">
        {isPlaying ? (
          <div className={`${classes.btn_play} ${classes._btn}`}>
            <Pause className={classes.btn_pause_svg} alt="pause" />
          </div>
        ) : (
          <div className={`${classes.btn_pause} ${classes._btn}`}>
            <Play className={classes.btn_play_svg} alt="play" />
          </div>
        )}
      </div>

      <div onClick={toggleNext} role="button" className={classes.btn_next}>
        <Next className={classes.btn_next_svg} alt="next" />
      </div>
      <div
        onClick={handleRepeat}
        className={`${classes.btn_repeat} ${classes._btn_icon}`}
      >
        <Repeat
          className={
            loopClick
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
