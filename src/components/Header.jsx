import React from 'react';
import originIng from '../img/origin.png';

const Header = () => {
  // const [activeLi, setActiveLi] = React.useState(0);
  const nav = ['обо мне', 'навыки', 'проекты', 'контакты'];

  return (
    <div className="header">
      <div className="container container--header">
        <div className="header__content">
          <div className="header__logo">
            <a href="/#" className="header__logo-link">
              ./frtr
            </a>
          </div>
          <div className="header__nav">
            <ul>
              {nav.map((value, i) => (
                <li key={value}>
                  <a href="/#">
                    <span className="header__item-num">0{i + 1}. </span>
                    <span className="header__item-text">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B3%D1%83%D1%88%D0%B5%D1%82%D0%B8%D1%8F">
            <div className="header__origin">
              <img src={originIng} alt="" />
              <span>ING</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
