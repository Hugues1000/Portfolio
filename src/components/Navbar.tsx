import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeHomeSection, setActiveHomeSection] = useState<"home" | "contact" | null>(null);

  useEffect(() => {
    if (location.pathname === "/home") {
      if (location.hash === "#contact") {
        setActiveHomeSection("contact");
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        setActiveHomeSection("home");
        const el = document.getElementById("top");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setActiveHomeSection(null);
    }
  }, [location]);

  const handleNavClick = (section: "home" | "contact") => {
    navigate(`/home#${section === "home" ? "top" : "contact"}`);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <button
            onClick={() => handleNavClick("home")}
            className={`home-button ${activeHomeSection === "home" ? "active" : ""}`}
          >
            Home
          </button>
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
          <a
            href="/home#contact"
            className={`nav-link ${activeHomeSection === "contact" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            Contact Me
          </a>
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
            <a
              href="/home#contact"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
                setMenuOpen(false);
              }}
            >
              Contact Me
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;