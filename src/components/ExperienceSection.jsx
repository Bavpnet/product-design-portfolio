import React from 'react';
import './ExperienceSection.css';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    id: 1,
    company: 'Газпром Автоматизация',
    role: 'product designer',
    years: '2024 – now',
    description: 'Компания разрабатывает собственные IT решения для нефтегазовой отрасли.',
    responsibilities: [
      'Разработка макетов и концепций',
      'Управление командой дизайнеров (2 человека)',
      'Участие в формировании продуктовых гипотез',
      'Создание и развитие дизайн системы для нескольких продуктов',
      'Дизайн ревью и ревью верстки',
    ],
    products: [
      { name: 'SAGA', description: 'веб-приложение для визуализации данных и принятия решений на основе них. Можно подключать источники данных, преобразовывать их и на основе этого строить и анализировать визуализации.' },
      { name: 'Энергоучет', description: 'веб-приложение, обеспечивающее считывание информации с устройств с последующей аналитикой и отчетностью. Можно подключать различные устройства, настраивать их и создавать сценарии для управления и мониторинга.' },
    ],
  },
  {
    id: 2,
    company: 'ТИМ ФОРС',
    role: 'product designer',
    years: '2023 – 2024',
    description: 'Компания разрабатывает решения для эффективного управления и менеджмента персонала в IT компаниях.',
    responsibilities: [
      'Разработка прототипов и концепций',
      'Участие в формировании продуктовых гипотез',
      'Поддержка и развитие UI гайда',
    ],
    products: [
      { name: 'Teamforce 360', description: 'сервис для повышения корпоративной культуры. Можно переводить друг другу виртуальную валюту, покупать мерч и участвовать в корпоративных заданиях.' },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="experience-sidebar">
        <descriptor className="experience-section-title">Опыт работы</descriptor>
      </div>
      <div className="experience-content">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
