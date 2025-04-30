import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </div>

        <div className="navbar-center">
          <NavLink to="/projects" className="nav-link">
            My Projects
          </NavLink>
          <NavLink to="/skills" className="nav-link">
            My Skills
          </NavLink>
          <NavLink to="/diplomas" className="nav-link">
            My Diplomas
          </NavLink>
          <NavLink to="/drawings" className="nav-link">
            My Drawings
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact Me
          </NavLink>
        </div>

        <button className="burger" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </nav>

      {menuOpen && (
        <>
          <div className="overlay" onClick={() => setMenuOpen(false)}></div>
          <div className="popup-menu">
            <NavLink to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>
              My Projects
            </NavLink>
            <NavLink to="/skills" className="nav-link" onClick={() => setMenuOpen(false)}>
              My Skills
            </NavLink>
            <NavLink to="/diplomas" className="nav-link" onClick={() => setMenuOpen(false)}>
              My Diplomas
            </NavLink>
            <NavLink to="/drawings" className="nav-link" onClick={() => setMenuOpen(false)}>
              My Drawings
            </NavLink>
            <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contact Me
            </NavLink>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;