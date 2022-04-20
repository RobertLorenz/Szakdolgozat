import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import Searchbar from './Searchbar'

// styles & images
import "./Navbar.css"


export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <Link to="/" className="brand">SZTE Kottatár</Link>
          
        </li>
        {user && (
          <Searchbar />
        )}
        {user && (
          <li>
            <Link to="/upload">Feltöltés</Link>
          </li>
        )}

        {user && (
          <li>
            <Link to="/uploaded">Kották</Link>
          </li>
        )}

        {!user && (
          <>
            <li>
              <Link to="/login">Bejelentkezés</Link>
            </li>
            <li>
              <Link to="/signup">Regisztráció</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Kijelentkezés
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Kijelentkezés..
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  )
}
