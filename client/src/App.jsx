import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./middleware/PrivateRoute"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <PrivateRoute path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
