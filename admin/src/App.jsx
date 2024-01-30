import { Route, Routes } from "react-router-dom"
//auth imports
import SignIn from "./pages/auth/sign-in";
//admin imports
import ProfileAdmin from "./pages/admin/profile";
import AddModerator from "./pages/admin/add-moderator";
import GererModerator from "./pages/admin/gerer-moderator";
import UpdateModerator from "./pages/admin/update-moderator";
//mod imports
import ProfileMod from "./pages/moderator/profile";
import GererArticle from "./pages/moderator/gerer-article";
import UpdateArticle from "./pages/moderator/update-article";

import Error from "./pages/error"

function App() {
  return (
    <div className="bg-[#f5f5f5]">
      <Routes>
        <Route path="/admin/">
          <Route path="profile" element={<ProfileAdmin />} />
          <Route path="add-moderator" element={<AddModerator />} />
          <Route path="gerer-moderator" element={<GererModerator />} />
          <Route path="gerer-moderator/:id" element={<UpdateModerator />} />
        </Route>
        <Route path="/moderator/">
          <Route path="profile" element={<ProfileMod />} />
          <Route path="gerer-article" element={<GererArticle />} />
          <Route path="gerer-article/:id" element={<UpdateArticle />} />
        </Route>
        <Route path="/auth/">
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
