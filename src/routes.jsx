import { Routes, Route } from "react-router-dom"
import { LogIn } from "./pages/logIn/index"
import { NotFound } from "./pages/notFound"
import { Registration } from "./pages/registration"
import { Playlist } from "./pages/playlists/playlist/playlist"
import { Container } from "./pages/mainPage/content"
import { ProtectedRoute } from "./protectedRoute"

function AppRoutes({
  user,
  currentTrack,
  setCurrentTrack,
  error,
  tracks,
  setTracks,
  loading,
  setLoading,
}) {
  console.log(tracks)
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route
          user={user}
          path="/"
          element={
            <Container
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              error={error}
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
              setCurrentTrack={setCurrentTrack}
              currentTrack={currentTrack}
              error={error}
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
