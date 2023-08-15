import { Routes, Route } from "react-router-dom"
import AuthPage from "./pages/logIn/LoginPage"
import { NotFound } from "./pages/notFound"
import { Playlist } from "./pages/playlists/playlist/playlist"
import { Container } from "./pages/mainPage/content"
import { ProtectedRoute } from "./protectedRoute"
import LoginPage from "./pages/logIn/LoginPage"
import { RegistrationPage } from "./pages/registration/RegistrationPage"
import { Favorites } from "./pages/playlists/favorites/favorites"

function AppRoutes({ auth, errorMessage, loading, registerUser, setAuth }) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
      <Route
        path="/registration"
        element={<RegistrationPage />}
        registerUser={registerUser}
      />
      <Route path="*" element={<NotFound />} />

      <Route element={<ProtectedRoute isAllowed={auth} />}>
        <Route
          path="/"
          element={<Container errorMessage={errorMessage} loading={loading} />}
        />
        <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes
