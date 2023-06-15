import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <span>Привет! Меня зовут</span>
      <h1 className="main__title">
        <span>Евлоев Сулейм.</span>
        <br />Я Middle Frotend & ReactJS разработчик.
      </h1>
      <p className="main__descr">
        Frontend-разработчик с реальным опытом коммерческой разработки сайтов и веб-приложений.
        <br />
        Отлично знаком с концепциями JavaScript и TypeScript. <br />
        Работал над проектами с использованием React, NextJS и связанных веб-технологий.
        <br />
        Разрабатываю адаптивные интерфейсы, умею работать с REST API и GraphQL для получения данных,
        <br />с Redux и Recoil для стейт-менеджмента, умею настраивать конфигурацию проекта на
        Webpack. <br />
        Также в своей работе использую многие другие инструменты и технологии.
      </p>
      <a
        href="https://drive.google.com/file/d/1XqmIPmzPa6ExlW5xC3lh4TkbHuOD8CKV/view?usp=drive_link"
        download
        className="main__button"
        target="_blank"
        rel="noreferrer"
      >
        <span>Загрузить мое резюме !</span>
      </a>
    </div>
  );
};

export default Main;
