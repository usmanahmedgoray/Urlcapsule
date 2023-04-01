import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';
import ThemeContext from '../Context/Theme/ThemeContext';

const Navbar = () => {
  const Theme  = useContext(ThemeContext)
  const{mode}  = Theme;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/analytics">Analytics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to='/contact'>Contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <label className="switch">
                <input type="checkbox" onClick={mode} />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar