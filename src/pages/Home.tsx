import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDiscord } from "react-icons/fa";
import "../styles/Home.css";
import "../styles/Global.css";
import hugues from "../assets/img/hugues.png";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="home-container" id="top">
        <div className="home-content">
          <div className="home-image-wrapper">
            <img
              src={hugues}
              alt="Portrait"
              className="home-image"
            />
          </div>
          <div className="home-text">
            <h1 className="home-title">{t('home.title')}</h1>
            <p className="home-description">
              {t('home.description')}
            </p>
            <div className="home-links">
              <a
                href="https://github.com/JeanBon-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hugues-porchet-331333336/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Boutons de téléchargement */}
            <div className="cv-buttons">
              <a href="/assets/cv/cvFr.pdf" download className="cv-button">
                {t('home.downloadFr')}
              </a>
              <a href="/assets/cv/cvEn.pdf" download className="cv-button">
                {t('home.downloadEn')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2 className="contact-title">{t('contact.title')}</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>huguesporchet@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+33 6 45 87 83 67</span>
          </div>
          <div className="contact-item">
            <FaDiscord className="contact-icon" />
            <span>hugokiwi4591</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;