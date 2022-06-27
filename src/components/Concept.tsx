import React from 'react';

const Concept = () => {
  return (
    <section id="concept" className="concept">
      <div className="concept__container">
        <h1>
          We are a luxury and ecological design studio, creating beautifully crafted tiny
          houses.
        </h1>
        <p className="concept__container__quote">
          “Luxury is most importantly about meeting a client’s aspiration. Understanding
          and finding solutions to fit their needs and lifestyle. We truly believe that
          creativity makes the difference. We create bonds between physical worlds and
          digital experiences to craft awe-inspiring and uniquely desirable experiences.”
        </p>
      </div>
      <div className="concept__values">
        <li>
          {' '}
          <img src="/assets/icons/forest.png" alt="" width={50} /> Crafted with the most{' '}
          <span style={{ fontWeight: 700 }}>eco-friendly, natural </span> and sustainable
          materials{' '}
        </li>
        <li>
          {' '}
          <img src="/assets/icons/atom.png" alt="" width={50} />{' '}
          <span style={{ fontWeight: 700 }}>Based on science</span> to comply with climate
          and environment specificities{' '}
        </li>
        <li>
          {' '}
          <img src="/assets/icons/leaves.png" alt="" width={50} /> Built to{' '}
          <span style={{ fontWeight: 700 }}>lower impact on nature</span> using most
          modern techniques{' '}
        </li>
      </div>
    </section>
  );
};

export default Concept;
