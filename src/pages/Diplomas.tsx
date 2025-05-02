import { FaGraduationCap, FaBook, FaSchool } from "react-icons/fa";
import "../styles/Diplomas.css";
import "../styles/Global.css";
import { useTranslation } from "react-i18next";

const Diplomas = () => {
  const { t } = useTranslation();

  return (
    <section className="skills-container" id="diplomas">
      <div className="skills-content">
        <h2 className="section-title">{t("diplomas.sectionTitle")}</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaGraduationCap className="skill-icon" />
            <h3 className="skill-name">{t("diplomas.bachelor.title")}</h3>
            <p className="skill-description">{t("diplomas.bachelor.description")}</p>
            <p className="skill-description" style={{ fontStyle: "italic", marginTop: "0.5rem" }}>
              {t("diplomas.bachelor.year")}
            </p>
          </div>
          <div className="skill-card">
            <FaBook className="skill-icon" />
            <h3 className="skill-name">{t("diplomas.bac.title")}</h3>
            <p className="skill-description">{t("diplomas.bac.description")}</p>
            <p className="skill-description" style={{ fontStyle: "italic", marginTop: "0.5rem" }}>
              {t("diplomas.bac.year")}
            </p>
          </div>
          <div className="skill-card">
            <FaSchool className="skill-icon" />
            <h3 className="skill-name">{t("diplomas.brevet.title")}</h3>
            <p className="skill-description">{t("diplomas.brevet.description")}</p>
            <p className="skill-description" style={{ fontStyle: "italic", marginTop: "0.5rem" }}>
              {t("diplomas.brevet.year")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diplomas;