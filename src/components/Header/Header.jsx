import React from 'react';

const Header = () => {
  // const [activeLi, setActiveLi] = React.useState(0);
  const nav = ['обо мне', 'навыки', 'проекты', 'контакты'];

  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="/#" className="header__logo-link">
              ./frtr
            </a>
          </div>
          <div className="header__nav">
            <ul>
              {nav.map((value, i) => (
                <li>
                  <a href="/#">
                    <span className="header__item-num">0{i + 1}. </span>
                    <span className="header__item-text">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
