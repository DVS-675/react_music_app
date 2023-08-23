import { ReactComponent as Note } from "../../../../../img/icon/note.svg"
import { ReactComponent as Like } from "../../../../../img/icon/like.svg"
import { ReactComponent as Dislike } from "../../../../../img/icon/dislike.svg"
import { Skeleton } from "../../../../skeleton/skeleton.jsx"
import classes from "./playerTrack.module.css"
import { useDispatch, useSelector } from "react-redux"
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from "../../../../../services/tracks"
import { useEffect, useState } from "react"
import { useTokenContext } from "../../../../../contexts/token"
import { setLikesState } from "../../../../../store/actions/creators/tracks"

export const PlayerContentTrack = ({ playTrack, loading }) => {
  const { id } = playTrack
  const [likeButtonState, setLikeButtonState] = useState()
  const likesState = useSelector((store) => store.tracks.likesState)
  const [dislikeTrigger] = useDislikeTrackMutation()
  const [likeTrigger] = useLikeTrackMutation()
  const dispatch = useDispatch()
  const { token } = useTokenContext()

  const toggleDislike = () => {
    setLikeButtonState(false)
    const newLikesState = { ...likesState }
    const { access } = token
    const args = { id, token: access }
    newLikesState[id] = false
    dispatch(setLikesState(newLikesState))
    dislikeTrigger(args)
  }

  const toggleLike = () => {
    setLikeButtonState(true)
    const newLikesState = { ...likesState }
    const { access } = token
    const args = { id, token: access }
    newLikesState[id] = true
    dispatch(setLikesState(newLikesState))
    likeTrigger(args)
  }

  useEffect(() => {
    setLikeButtonState(likesState[id])
  }, [id, likesState, likeButtonState])
  return (
    <div className={classes.player}>
      <div className={classes.track}>
        {loading ? (
          <>
            <div className={classes.image}>
              <Skeleton width="51px" height="51px" />
            </div>
            <div className={classes.author}>
              <Skeleton width="40px" height="15px" />
            </div>
            <div className={classes.album}>
              <Skeleton width="40px" height="15px" />
            </div>
          </>
        ) : (
          <>
            <div className={classes.image}>
              <Note className={classes.svg} alt="music" />
            </div>
            <div className={classes.author}>
              <a className={classes.author_link}>{playTrack.author}</a>
            </div>
            <div className={classes.album}>
              <a className={classes.album_link}>{playTrack.album}</a>
            </div>
          </>
        )}
      </div>
      <div className={classes.like_dis}>
        <div
          onClick={toggleLike}
          className={`${classes.like} ${classes._btn_icon}`}
        >
          <Like
            // fill={likeButtonState ? "#ad61ff" : "transparent"}
            // stroke={likeButtonState ? "#ad61ff" : "#696969"}
            className={
              likeButtonState ? classes.like_svg_active : classes.like_svg
            }
            alt="like"
          />
        </div>
        <div
          onClick={toggleDislike}
          className={`${classes.dislike} ${classes._btn_icon}`}
        >
          <Dislike
            // fill={likeButtonState ? "transparent" : "#ad61ff"}
            // stroke={likeButtonState ? "#696969" : "#ad61ff"}
            className={
              likeButtonState ? classes.dislike_svg : classes.dislike_svg_active
            }
            alt="dislike"
          />
        </div>
      </div>
    </div>
  )
}
