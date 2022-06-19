import React from 'react';
import IProject from '../interfaces/IProject';

const ProjectCard = ({ title, description, image }: IProject) => {
  return (
    <>
      <div className="projectcard" id="card1">
        <h2 className='projectcard__title'>{title}</h2>
        <p className="projectcard__description"> {description}</p>
        <button className="projectcard__button">
          En savoir plus <img src="assets/plus.png" alt="" />
        </button>
          <img src={image} alt="" />
      </div>
    </>
  )
};

export default ProjectCard;
