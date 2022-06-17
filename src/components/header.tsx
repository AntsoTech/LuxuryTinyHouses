import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <video className="header__bgVideo" autoPlay loop muted>
        <source src="../../assets/images/homePageVideo.mp4" />
      </video>
      <h1 className="header__baseline">
        Créateur d’expériences de vie mémorables
      </h1>
      <h2 className="header__conceptScroll">
        DÉCOUVRIR NOTRE CONCEPT
      </h2>
      <div className="header__arrowContainer">
        <a href="#concept">
          <img
            src="../../assets/images/arrow-down-circle.svg"
            alt="Découvrir le concept"
            width="50vw"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
