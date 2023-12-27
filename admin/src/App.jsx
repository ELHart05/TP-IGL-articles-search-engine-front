import { Route, Routes } from "react-router-dom"
import Error from "./pages/error"
import Add_moderator from "./pages/add_moderator/Add";
import Admin from "./pages/modify_admin/Addadmin";
import GererArticle from "./pages/moderator/Moderator";
import Modify from "./pages/modify-moderator/Modify";
import GererModerator from "./pages/gerer_moderator"

function App() {
  return (
    <Routes>
        <Route path="/" element={<GererArticle />} />
        <Route path="/gerer-moderator" element={<GererModerator />} />
        <Route path="/add-moderator" element={<Add_moderator />} />
        <Route path="/admin-info" element={<Admin />} />
        <Route path="/modify-moderator/:id" element={<Modify />} />
        <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
