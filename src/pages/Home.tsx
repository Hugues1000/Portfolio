import "../styles/Home.css";
import "../styles/Global.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDiscord } from "react-icons/fa";
import hugues from "../assets/img/hugues.png";

const Home = () => {
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
            <h1 className="home-title">Bienvenue sur mon portfolio</h1>
            <p className="home-description">
              Je suis un développeur passionné par la création d’expériences web modernes.
              Avec une solide expérience en React, TypeScript, et les technologies backend 
              comme NestJS et MySQL, je m'efforce de construire des interfaces intuitives, 
              performantes et maintenables. Mon objectif est de concevoir des solutions 
              qui combinent performance, esthétique et accessibilité pour offrir la meilleure 
              expérience utilisateur possible.
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
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2 className="contact-title">Me contacter</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>hugues.porchet@orange.fr</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+33 6 45 87 83 67</span>
          </div>
          <div className="contact-item">
            <FaDiscord className="contact-icon" />
            <span>jeanbon9934</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;