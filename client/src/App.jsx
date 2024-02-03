import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./middleware/PrivateRoute"
import Home from "./pages/home"
import Error from "./pages/error"
import Search from "./pages/search"
import ArticleDetails from "./pages/article-details"
import Favorite from "./pages/favorite/index.jsx"
import SignIn from "./pages/auth/sign-in/index.jsx"
import SignUp from "./pages/auth/sign-up/index.jsx"
import Profile from "./pages/profile/index.jsx"

function App() {
  return (
    <div className="font-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="/search" element={<PrivateRoute element={<PrivateRoute element={<Search />} />} />} />
        <Route path="/profile" element={<PrivateRoute element={<PrivateRoute element={<Profile/>} />} />} />
        <Route path="/article-details/:id" element={<PrivateRoute element={<PrivateRoute element={<ArticleDetails/>} />} />} />
        <Route path="/favorite" element={<PrivateRoute element={<PrivateRoute element={<Favorite/>} />} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
