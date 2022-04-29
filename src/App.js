import "./App.css"

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"

import Navbar from "./components/Navbar"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import Score from "./pages/score/Score"
import Search from "./pages/search/Search"
import Upload from "./pages/upload/Upload"
import Uploaded from "./pages/uploaded/Uploaded"
import { useMode} from "./hooks/useMode"
import ModeSelector from "./components/ModeSelector"



function App() {
  const { user, authIsReady } = useAuthContext()
  const { mode } = useMode()

  return (
    <div className={`App ${mode}`}>
      {authIsReady && (
        <BrowserRouter>
          <div className="container">
            <Navbar />
            
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={user ? <Home />  : <Login />}
              />
              <Route
                path="/signup"
                element={user ? <Home />  : <Signup />}
              />
              <Route
                path="/search"
                element={user ? <Search /> : <Navigate to="/login" />}
              />
              <Route
                path="/upload"
                element={user ? <Upload /> : <Navigate to="/uploaded" />}
              />
              <Route
                path="/uploaded"
                element={user ? <Uploaded /> : <Navigate to="/login" />}
              />
              <Route
                path="/scores/:id"
                element={user ? <Score /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App

