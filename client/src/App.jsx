import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./middleware/PrivateRoute"
import Home from "./pages/home"
import AboutUs from "./pages/about-us"
import Error from "./pages/error"
import Search from "./pages/search"
import Login from "./pages/auth/sign-in/pageLogin"
import Signup from "./pages/auth/sign-up/pageSignup"

function App() {
  return (
    <div className="font-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/sign-in" element={<Login />} />
        <Route path="/auth/sign-up" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <AboutUs />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
