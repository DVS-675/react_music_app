import { ReactComponent as Note } from "../../../../img/icon/note.svg"
import { ReactComponent as Like } from "../../../../img/icon/like.svg"
import { Skeleton } from "../../../skeleton/skeleton.jsx"
import formatTime from "../../../../utils/utils"
import classes from "./playlistItem.module.css"
import Dot from "../../../dot/dot"

import { useDispatch, useSelector } from "react-redux"
import { useIsPlayingContext } from "../../../../contexts/isPlaying"
import { setPlayTrack } from "../../../../store/actions/creators/tracks"

export const MainPlaylistItem = ({
  item,
  loading,
  toggleLike,
  likesState,
  setTrackClick,
}) => {
  const playedTrack = useSelector((store) => store.tracks.playTrack)
  const { isPlaying, toggleIsPlaying } = useIsPlayingContext()
  const isLike = likesState[item?.id]

  const dispatch = useDispatch()
  return (
    <div>
      {loading ? (
        <div className={classes.item}>
          <div className={classes.track}>
            <div className={classes.track_title}>
              <div className={classes.track_image}>
                <Note className={classes.track_svg} alt="music" />
              </div>

              <div>
                <a className={classes.track_link} href="http://">
                  <Skeleton width="150px" height="20px" />
                  <span className={classes.track_span} />
                </a>
              </div>
            </div>
            <div className={classes.author}>
              <a className={classes.author_link} href="http://">
                <Skeleton width="120px" height="20px" />
              </a>
            </div>
            <div className={classes.album}>
              <a className={classes.album_link} href="http://">
                <Skeleton width="100px" height="20px" />
              </a>
            </div>
            <div>
              <Skeleton width="50px" height="20px" />
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            dispatch(setPlayTrack(item))
            toggleIsPlaying(true)
            setTrackClick(true)
          }}
          role="button"
          tabIndex={0}
          key={item.id}
          onKeyDown={() => {
            dispatch(setPlayTrack(item))
            toggleIsPlaying(true)
            setTrackClick(true)
          }}
        >
          <div className={classes.item} onClick={(e) => e.preventDefault}>
            <div className={classes.track}>
              <div className={classes.track_title}>
                {playedTrack && playedTrack.id === item.id ? (
                  <div className={classes.track_image}>
                    <Dot isPlaying={isPlaying} />
                  </div>
                ) : (
                  <div className={classes.track_image}>
                    <Note className={classes.track_svg} alt="music" />
                  </div>
                )}
                <div>
                  <p className={classes.track_link}>
                    {item.name} <span className={classes.track_span} />
                  </p>
                </div>
              </div>
              <div className={classes.author}>
                <p className={classes.author_link}>{item.author}</p>
              </div>
              <div className={classes.album}>
                <p className={classes.album_link}>{item.album}</p>
              </div>

              <div id={item?.id} onClick={(event) => toggleLike(event)}>
                <Like
                  className={
                    isLike
                      ? `${classes.time_svg_active}`
                      : `${classes.time_svg}`
                  }
                  alt="like"
                />
                <span className={classes.time_text}>
                  {formatTime(item.duration_in_seconds)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
