import { Routes, Route } from "react-router-dom"
import { LogIn } from "./pages/logIn/index"
import { NotFound } from "./pages/notFound"
import Container from "./components/content"

import { Registration } from "./pages/registration"
import { Playlist } from "./pages/playlists/playlist/playlist"
import { ProtectedRoute } from "./protectedRoute"

export const AppRoutes = ( {user} ) => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <Container />
          </ProtectedRoute>
        }
      />
      <Route path="/playlist/:id" element={<Playlist />} />
    </Routes>
  )
}
