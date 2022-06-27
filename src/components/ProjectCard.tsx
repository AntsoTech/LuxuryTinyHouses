import React from 'react';

import IProject from '../interfaces/IProject';

const ProjectCard = ({ id, title, description, image }: IProject) => {
  return (
    <div
      className={id % 2 === 0 ? 'projectcard' : 'projectcard projectcard-inverted'}
      id="card1">
      <div className="projectcard__image">
        <img src={image} alt="" />
      </div>
      <hr className="projectcard__line" />
      <div className="projectcard__paragraph">
        <h2 className="projectcard__paragraph__title">{title}</h2>
        <p className="projectcard__paragraph__description"> {description}</p>
        <button className="projectcard__paragraph__button">
          En savoir plus <img src="/assets/icons/right-arrow.png" width={15} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
