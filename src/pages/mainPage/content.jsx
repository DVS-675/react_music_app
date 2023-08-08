import { Bar } from "../../components/bar/bar"
import { Main } from "../../components/main/main"
import classes from "./content.module.css"
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {tracksAllSelector} from "../../store/selectors/tracks";
import {setPlayTrack} from "../../store/actions/creators/tracks";

export const Container = ({
  setCurrentTrack,
  currentTrack,
  getTracksError,
  tracks,
  loading
}) => {

  const dispatch = useDispatch();
  const allTracks = useSelector(tracksAllSelector);
  console.log(currentTrack)

  useEffect(() => {
    if (allTracks.length > 0 && currentTrack) {
      for (let i = 0; i < allTracks?.length; i += 1) {

        if (allTracks[i].id === currentTrack.id) {

          dispatch(setPlayTrack(allTracks[i]));
        }
      }
    }
  }, [allTracks, currentTrack]);

  return (
    <div className={classes.container}>
      <Main setCurrentTrack={setCurrentTrack} getTracksError={getTracksError} tracks={tracks} loading={loading} />
      <Bar
        currentTrack={currentTrack}
        loading={loading}
      />
      <footer />
    </div>
  )
}
