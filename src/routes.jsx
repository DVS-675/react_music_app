import { Routes, Route } from "react-router-dom"
import { LogIn } from "./pages/logIn/index"
import { NotFound } from "./pages/notFound"
import Container from "./components/content"

import { Registration } from "./pages/registration"
import { Playlist } from "./pages/playlists/playlist/playlist"


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Container />} />      
      <Route path="/playlist/:id" element={<Playlist />} />      
    </Routes>
  )
}
