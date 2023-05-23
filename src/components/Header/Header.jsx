import React from 'react';

const Header = () => {
  // const [activeLi, setActiveLi] = React.useState(0);
  const nav = ['обо мне', 'навыки', 'проекты', 'контакты'];

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <a href="/#">./frtr</a>
        </div>
        <div className="header__nav">
          <ul>
            {nav.map((value, i) => (
              <li>
                <a href="/#">
                  <span>0{i + 1}. </span>
                  <span>{value}</span>
                </a>
                {/* 0{i + 1}. {value} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
