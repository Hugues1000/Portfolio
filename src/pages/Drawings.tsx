import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Drawings.css';

import draw1 from '../assets/img/draw1.webp';
import draw2 from '../assets/img/draw2.webp';
import draw3 from '../assets/img/draw3.webp';
import draw4 from '../assets/img/draw4.webp';
import draw5 from '../assets/img/draw5.webp';
import draw6 from '../assets/img/draw6.webp';
import draw7 from '../assets/img/draw7.webp';

interface Drawing {
  image: string;
  referenceKey: string;
  toolsKey: string;
}

const drawings: Drawing[] = [
  {
    image: draw1,
    referenceKey: 'drawings.references.eldenRing',
    toolsKey: 'drawings.tools.pencil',
  },
  {
    image: draw2,
    referenceKey: 'drawings.references.bleach',
    toolsKey: 'drawings.tools.pencil',
  },
  {
    image: draw3,
    referenceKey: 'drawings.references.bleach',
    toolsKey: 'drawings.tools.pencil',
  },
  {
    image: draw4,
    referenceKey: 'drawings.references.bleach',
    toolsKey: 'drawings.tools.pencil',
  },
  {
    image: draw5,
    referenceKey: 'drawings.references.chainsawMan',
    toolsKey: 'drawings.tools.pencil',
  },
  {
    image: draw6,
    referenceKey: 'drawings.references.chainsawMan',
    toolsKey: 'drawings.tools.pencil',
  },
  {
    image: draw7,
    referenceKey: 'drawings.references.chainsawMan',
    toolsKey: 'drawings.tools.pencil',
  },
];

const Drawings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="skills-container" id="drawings">
      <div className="skills-content">
        <h2 className="section-title">{t('drawings.title')}</h2>
        <div className="skills-grid">
          {drawings.map((drawing, index) => (
            <div key={index} className="skill-card">
              <img src={drawing.image} alt={`Drawing ${index + 1}`} className="drawing-image" />
              <p className="skill-description">
                <strong>{t('drawings.referenceLabel')}</strong> {t(drawing.referenceKey)}
              </p>
              <p className="skill-description">
                <strong>{t('drawings.toolsLabel')}</strong> {t(drawing.toolsKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drawings;