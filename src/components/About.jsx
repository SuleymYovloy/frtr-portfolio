import React from 'react';
import aboutImg from '../img/aboutImg.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about__title-block">
        <div className="about__title">
          <span>01.</span>
          <h1>Обо мне</h1>
        </div>
        <div className="about__line">
          <svg
            width="1600"
            height="1"
            viewBox="0 0 1600 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="1600" y2="0.5" stroke="#64FFDA" stroke-dasharray="4 4" />
          </svg>
        </div>
      </div>
      <div className="about__content">
        <div className="about__descr">
          <p>
            "Привет! Меня зовут Евлоев Сулейм, я Frontend-разработчик с опытом работы в HTML, CSS,
            JavaScript и ReactJS.
          </p>
          &nbsp;
          <p>
            Мое увлечение программированием началось несколько лет назад, и я быстро полюбил
            создание веб-приложений и работу с интерактивными пользовательскими интерфейсами. Я
            освоил основы HTML, CSS и JavaScript и продолжил развиваться, изучая современные
            фреймворки и библиотеки, такие как ReactJS. Моя цель - создавать эффективный и
            масштабируемый код, который предоставляет отличный пользовательский опыт.
          </p>
          &nbsp;
          <p>
            У меня опыт работы с различными проектами, от небольших лендингов до комплексных
            веб-приложений. Я готов работать в команде, обмениваться идеями и стремлюсь создавать
            качественные и интуитивно понятные пользовательские интерфейсы. Я также понимаю важность
            адаптивного дизайна и оптимизации для различных устройств и браузеров, и я стараюсь
            учитывать эти факторы при разработке.
          </p>
          &nbsp;
          <p>
            Я постоянно стремлюсь улучшить свои навыки и изучить новые технологии, чтобы оставаться
            в курсе последних трендов в области разработки. Я открыт для новых вызовов и готов
            принять участие в увлекательных проектах, которые позволят мне расти и развиваться как
            Frontend-разработчику.
          </p>
          &nbsp;
          <p>
            В моем портфолио вы найдете примеры моих работ, которые демонстрируют мой подход к
            разработке и мою способность создавать функциональные и эстетически привлекательные
            веб-приложения.
          </p>
        </div>
        <div className="about__image-block">
          <img className="about__img" src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
