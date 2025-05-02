import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/ProjectsExperiences.css";
import { useTranslation } from "react-i18next";

const ProjectsExperiences = () => {
  const { t } = useTranslation();

  return (
    <section className="skills-container">
      <div className="skills-content">
        <h2 className="section-title">{t("projects.title")}</h2>

        {/* Projets */}
        <div className="skills-group">
          <h3 className="group-title">{t("projects.projectsTitle")}</h3>
          <div className="skills-grid">
            {/* Portfolio */}
            <div className="skill-card">
              <h4 className="skill-name">{t("projects.portfolio.title")}</h4>
              <p className="skill-description">{t("projects.portfolio.description")}</p>
              <p className="skill-description">
                <strong>{t("projects.stack")}</strong> Symfony, PHP, CSS
              </p>
              <div className="project-links">
                <a href="https://github.com/Sihtta/portfolio" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href="https://portfolio-designer.vercel.app" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> {t("projects.view")}
                </a>
              </div>
            </div>

            {/* Focusly */}
            <div className="skill-card">
              <h4 className="skill-name">Focusly</h4>
              <p className="skill-description">{t("projects.focusly.description")}</p>
              <p className="skill-description">
                <strong>{t("projects.stack")}</strong> Symfony, PHP, CSS
              </p>
              <div className="project-links">
                <a href="https://github.com/Sihtta/archiLog" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href="https://focusly.vercel.app" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> {t("projects.view")}
                </a>
              </div>
            </div>

            {/* Post-AR */}
            <div className="skill-card">
              <h4 className="skill-name">Post-AR</h4>
              <p className="skill-description">{t("projects.postar.description")}</p>
              <p className="skill-description">
                <strong>{t("projects.stack")}</strong> React, TypeScript, CSS
              </p>
              <div className="project-links">
                <a href="https://github.com/Sihtta/Post-AR" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href="https://postar.vercel.app" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> {t("projects.view")}
                </a>
              </div>
            </div>

            {/*Bittiguru*/}
            <div className="skill-card">
              <h4 className="skill-name">{t("projects.cyber.title")}</h4>
              <p className="skill-description">{t("projects.cyber.description")}</p>
              <p className="skill-description">
                <strong>{t("projects.stack")}</strong> React, NestJS, MySQL
              </p>
            </div>
          </div>
        </div>

        {/* Expériences */}
        <div className="skills-group">
          <h3 className="group-title">{t("projects.experiencesTitle")}</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4 className="skill-name">Mytilimer (2024)</h4>
              <p className="skill-description">{t("projects.mytilimer")}</p>
            </div>
            <div className="skill-card">
              <h4 className="skill-name">{t("projects.landscape.title")}</h4>
              <p className="skill-description">{t("projects.landscape.description")}</p>
            </div>
            <div className="skill-card">
              <h4 className="skill-name">Bittiguru Oy (2025)</h4>
              <p className="skill-description">{t("projects.erasmus.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsExperiences;