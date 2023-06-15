import React from 'react';
import Main from '../components/Main';
import About from './../components/About';

const Home = () => {
  return (
    <div className="container">
      <div className="content__top">
        <Main />
        <About />
      </div>
    </div>
  );
};

export default Home;
