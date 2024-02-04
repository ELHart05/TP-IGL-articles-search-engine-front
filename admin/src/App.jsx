import { Navigate, Route, Routes } from "react-router-dom"
//import middleware
import PrivateRoute from './middleware/PrivateRoute'
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

import Error from './pages/error'
import Unauthorized from "./pages/unauthorized";

function App() {
  return (
    <div className="bg-[#f5f5f5]">
      <Routes>
        <Route path="/auth/*">
          <Route path="sign-in" element={<SignIn />} />
          <Route path="*" element={(<Navigate to={'sign-in'} />)} />
        </Route>
        <Route path="/admin/*">
          <Route path="profile" element={<PrivateRoute element={<ProfileAdmin />} requiredRoles={['admin']} />} />
          <Route path="add-moderator" element={<PrivateRoute element={<AddModerator />} requiredRoles={['admin']} />} />
          <Route path="gerer-moderator" element={<PrivateRoute element={<GererModerator />} requiredRoles={['admin']} />} />
          <Route path="gerer-moderator/:id" element={<PrivateRoute element={<UpdateModerator />} requiredRoles={['admin']} />} />
          <Route path="*" element={(<Navigate to={'profile'} />)} />
        </Route>
        <Route path="/moderator/*">
          <Route path="profile" element={<PrivateRoute element={<ProfileMod />} requiredRoles={['moderator']} />} />
          <Route path="gerer-article" element={<PrivateRoute element={<GererArticle />} requiredRoles={['moderator']} />} />
          <Route path="gerer-article/:id" element={<PrivateRoute element={<UpdateArticle />} requiredRoles={['moderator']} />} />
          <Route path="*" element={(<Navigate to={'profile'} />)} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
