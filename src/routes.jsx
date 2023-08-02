import { Routes, Route } from "react-router-dom"
import AuthPage from "./pages/logIn/LoginPage"
import { NotFound } from "./pages/notFound"
import { Playlist } from "./pages/playlists/playlist/playlist"
import { Container } from "./pages/mainPage/content"
import { ProtectedRoute } from "./protectedRoute"
import LoginPage from "./pages/logIn/LoginPage"
import { RegistrationPage } from "./pages/registration/RegistrationPage"

function AppRoutes({
  auth,
  setAuth,
  registration,
  user,
  currentTrack,
  setCurrentTrack,
  getTracksError,
  setGetTracksError,
  tracks,
  setTracks,
  loading,
  setLoading,
}) {
  console.log(tracks)
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
      <Route
        path="/registration"
        element={<RegistrationPage />}
        registration={registration}
      />
      <Route path="*" element={<NotFound />} />

      <Route element={<ProtectedRoute isAllowed={auth} />}>
        <Route
          user={user}
          path="/"
          element={
            <Container
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              getTracksError={getTracksError}
              tracks={tracks}
              loading={loading}
            />
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <Playlist
              tracks={tracks}
              setTracks={setTracks}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              getTracksError={getTracksError}
              setGetTracksError={setGetTracksError}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
      </Route>
    </Routes>
  )
}
export default AppRoutes
