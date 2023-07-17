import { Routes, Route } from "react-router-dom"
import { LogIn } from "./pages/logIn/index"
import { NotFound } from "./pages/notFound"
import { Registration } from "./pages/registration"
import { Playlist } from "./pages/playlists/playlist/playlist"
import { Container } from "./pages/mainPage/content"
import { ProtectedRoute } from "./protectedRoute"

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Container />} />
        <Route path="/playlist/:id" element={<Playlist />} />
      </Route>
    </Routes>
  )
}
