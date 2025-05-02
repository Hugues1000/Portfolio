import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDart,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiReact,
  SiSymfony,
  SiFlutter,
} from 'react-icons/si';
import { DiJava, DiVisualstudio, DiCode } from 'react-icons/di';
import '../styles/Skills.css';
import '../styles/Global.css';

type Skill = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const languages: Skill[] = [
    { name: 'JavaScript', description: t('skills.langDescriptions.javascript'), icon: <SiJavascript /> },
    { name: 'TypeScript', description: t('skills.langDescriptions.typescript'), icon: <SiTypescript /> },
    { name: 'Java', description: t('skills.langDescriptions.java'), icon: <DiJava /> },
    { name: 'HTML', description: t('skills.langDescriptions.html'), icon: <SiHtml5 /> },
    { name: 'CSS', description: t('skills.langDescriptions.css'), icon: <SiCss3 /> },
    { name: 'C', description: t('skills.langDescriptions.c'), icon: <DiCode /> },
    { name: 'Dart', description: t('skills.langDescriptions.dart'), icon: <SiDart /> },
    { name: 'PHP', description: t('skills.langDescriptions.php'), icon: <SiPhp /> },
    { name: 'SQL', description: t('skills.langDescriptions.sql'), icon: <SiMysql /> },
  ];

  const technologies: Skill[] = [
    { name: 'Git', description: t('skills.techDescriptions.git'), icon: <SiGit /> },
    { name: 'GitHub', description: t('skills.techDescriptions.github'), icon: <SiGithub /> },
    { name: 'GitLab', description: t('skills.techDescriptions.gitlab'), icon: <SiGitlab /> },
    { name: 'React', description: t('skills.techDescriptions.react'), icon: <SiReact /> },
    { name: 'Symfony', description: t('skills.techDescriptions.symfony'), icon: <SiSymfony /> },
    { name: 'Visual Studio', description: t('skills.techDescriptions.vs'), icon: <DiVisualstudio /> },
    { name: 'Flutter', description: t('skills.techDescriptions.flutter'), icon: <SiFlutter /> },
  ];

  return (
    <section className="skills-container" id="skills">
      <div className="skills-content">
        <h2 className="section-title">{t('skills.title')}</h2>

        <div className="skills-group">
          <h3 className="group-title">{t('skills.technologies')}</h3>
          <div className="skills-grid">
            {technologies.map((tech) => (
              <div className="skill-card" key={tech.name}>
                <div className="skill-icon">{tech.icon}</div>
                <h4 className="skill-name">{tech.name}</h4>
                <p className="skill-description">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-group">
          <h3 className="group-title">{t('skills.languages')}</h3>
          <div className="skills-grid">
            {languages.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-group">
          <h3 className="group-title">{t('skills.personal')}</h3>
          <p className="skills-paragraph">{t('skills.paragraph')}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;