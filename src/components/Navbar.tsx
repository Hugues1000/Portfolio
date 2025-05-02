import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";

const Navbar = () => {
  const { t } = useTranslation();
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
            {t("navbar.home")}
          </button>
        </div>

        <div className="navbar-center">
          <NavLink to="/projectsExperiences" className="nav-link">
            {t("navbar.projects")}
          </NavLink>
          <NavLink to="/skills" className="nav-link">
            {t("navbar.skills")}
          </NavLink>
          <NavLink to="/diplomas" className="nav-link">
            {t("navbar.diplomas")}
          </NavLink>
          <NavLink to="/drawings" className="nav-link">
            {t("navbar.drawings")}
          </NavLink>
          <a
            href="/home#contact"
            className={`nav-link ${activeHomeSection === "contact" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            {t("navbar.contact")}
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
            <NavLink to="/projectsExperiences" className="nav-link" onClick={() => setMenuOpen(false)}>
              {t("navbar.projects")}
            </NavLink>
            <NavLink to="/skills" className="nav-link" onClick={() => setMenuOpen(false)}>
              {t("navbar.skills")}
            </NavLink>
            <NavLink to="/diplomas" className="nav-link" onClick={() => setMenuOpen(false)}>
              {t("navbar.diplomas")}
            </NavLink>
            <NavLink to="/drawings" className="nav-link" onClick={() => setMenuOpen(false)}>
              {t("navbar.drawings")}
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
              {t("navbar.contact")}
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;