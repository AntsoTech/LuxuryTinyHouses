import React, { useEffect, useState } from 'react';

const Header = () => {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <img
        src="/assets/images/tinyhouse6.jpg"
        alt=""
        className="header__image1"
        style={{ transform: `translateY(${offSetY * 0.3}px)` }}
      />
      <h1
        className="header__baseline"
        style={{ transform: `translateY(${offSetY * 1}px)` }}>
        WELCOME HOME
      </h1>
      <img
        src="/assets/images/tinyhouse-forefront.png"
        alt=""
        className="header__image2"
        style={{ transform: `translateY(${offSetY * 0.3}px)` }}
      />
      <h2 className="header__conceptScroll">DÉCOUVRIR NOTRE CONCEPT</h2>
      <div className="header__arrowContainer">
        <a href="#concept">
          <img
            src="/assets/images/arrow-down-circle.svg"
            alt="Découvrir le concept"
            width={30}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
