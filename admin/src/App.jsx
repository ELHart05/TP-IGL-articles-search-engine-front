import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./middleware/PrivateRoute"
import Home from "./pages/home"
import About from "./pages/about"
import Error from "./pages/error"
import Add_moderator from "./pages/add_moderator/Add";
import Add_admin from "./pages/add_admin/Addadmin";
import Moderator from "./pages/moderator/Moderator";
import Modify from "./pages/modify-moderator/Modify";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route path="/moderator" element={<Moderator />} />
      <Route path="/add-moderator" element={<Add_moderator />} />
      <Route path="/add-admin" element={<Add_admin />} />
      <Route path="/modify-moderator" element={<Modify />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
