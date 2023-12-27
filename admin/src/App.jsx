import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./middleware/PrivateRoute"
import Home from "./pages/home"
import About from "./pages/about"
import Error from "./pages/error"
import Add_moderator from "./pages/add_moderator/Add";
import Admin from "./pages/modify_admin/Addadmin";
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
      <Route path="*" element={<Error />} />
      <Route path="/moderator" element={<Moderator />} />
      <Route path="/add-moderator" element={<Add_moderator />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/modify-moderator" element={<Modify />} />
      
      

    </Routes>
  )
}

export default App
