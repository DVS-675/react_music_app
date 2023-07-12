import { Routes, Route } from "react-router-dom"
import { LogIn } from "./pages/logIn/index"
import { NotFound } from "./pages/notFound"
import Container from "./components/content"
import { MyPlaylist } from "./pages/myPlaylist"
import { Registration } from "./pages/registration"
import { Playlist1 } from "./pages/playlists/playlist1/playlist01"
import { Playlist2 } from "./pages/playlists/playlist2/playlist02"
import { Playlist3 } from "./pages/playlists/playlist3/playlist03"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Container />} />
      <Route path="/myplaylist" element={<MyPlaylist />} />
      <Route path="/playlist1" element={<Playlist1 />} />
      <Route path="/playlist2" element={<Playlist2 />} />
      <Route path="/playlist3" element={<Playlist3 />} />
    </Routes>
  )
}
