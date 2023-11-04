import formatTime from "../../../utils/utils"
import * as S from "./styles"
import { useEffect } from "react"

export const BarPlayerProgress = ({
  duration,
  currentTime,
  setCurrentTime,
  audioRef,
  setCurrentTimeUser,
}) => {
  if (audioRef.current?.duration) {
    duration = audioRef.current.duration
  }

  useEffect(() => {
    if (audioRef) {
      audioRef.current.autoplay = true
      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current.currentTime)
        return () => {
          audioRef.current.removeEventListener("timeupdate", () => {
            setCurrentTime(audioRef.current.currentTime)
          })
        }
      })
    }
  })

  return (
    <>
      <S.Progress
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => {
          setCurrentTimeUser(event.target.value)
        }}
      />
      <S.Duration>
        {formatTime(Math.floor(currentTime))}/{formatTime(Math.floor(duration))}
      </S.Duration>
    </>
  )
}
