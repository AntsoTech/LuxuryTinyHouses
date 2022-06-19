import React from 'react';

const Header = () => {
  return (
    <header className="header">
      {/* <video className="header__bgVideo" autoPlay loop muted>
        <source src="../../assets/images/homePageVideo.mp4" />
      </video> */}
      <img src="../../assets/images/tinyhouse6.jpg" alt="" className="header__image1" />
      <h1 className="header__baseline">WELCOME HOME</h1>
      <img src="../../assets/images/tinyhouse6-down.png" alt="" className="header__image2" />
      <h2 className="header__conceptScroll">DÉCOUVRIR NOTRE CONCEPT</h2>
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
