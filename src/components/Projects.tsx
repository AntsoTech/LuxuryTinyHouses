import React from 'react';

import ProjectCard from './ProjectCard';

const Projects = () => {
  // Projects information
  const projectsData = [
    {
      id: 1,
      title: 'Cabanon',
      description:
        "La cabane vous permet de vivre au plus proche de la nature, dans un environnement minimaliste mais qui permet de se recentrer sur l'essentiel.",
      url: '',
      image: '/assets/images/tinyHouseProject1.jpg',
    },
    {
      id: 2,
      title: 'Miro',
      description:
        'La mobihouse est une création originale qui offre la fonctionnalité et le confort pour vivre au quotidien tout en étant au coeur de la nature.',
      url: '',
      image: '/assets/images/tinyhouse13.jpg',
    },
    {
      id: 3,
      title: 'Bulle',
      description:
        "La bulle est un cocon de nature luxueux qui permet de ne faire qu'un avec la nature. Sa grande chance, la baie vitrée courbée et enveleoppante.",
      url: '',
      image: '/assets/images/tinyHouseProject3.jpeg',
    },
    {
      id: 4,
      title: 'Provence',
      description:
        "La bulle est un cocon de nature luxueux qui permet de ne faire qu'un avec la nature. Sa grande chance, la baie vitrée courbée et enveleoppante.",
      url: '',
      image: '/assets/images/tinyHouseProject4.jpeg',
    },
    {
      id: 5,
      title: 'Viking',
      description:
        "La bulle est un cocon de nature luxueux qui permet de ne faire qu'un avec la nature. Sa grande chance, la baie vitrée courbée et enveleoppante.",
      url: '',
      image: '/assets/images/tinyHouse6.jpg',
    },
    {
      id: 6,
      title: 'Roméo',
      description:
        "La bulle est un cocon de nature luxueux qui permet de ne faire qu'un avec la nature. Sa grande chance, la baie vitrée courbée et enveleoppante.",
      url: '',
      image: '/assets/images/tiny7.png',
    },
    {
      id: 7,
      title: 'Rainforest',
      description:
        "La bulle est un cocon de nature luxueux qui permet de ne faire qu'un avec la nature. Sa grande chance, la baie vitrée courbée et enveleoppante.",
      url: '',
      image: '/assets/images/tinyhouse8.jpg',
    },
    {
      id: 8,
      title: 'Rose',
      description:
        "La bulle est un cocon de nature luxueux qui permet de ne faire qu'un avec la nature. Sa grande chance, la baie vitrée courbée et enveleoppante.",
      url: '',
      image: '/assets/images/tiny10.jpg',
    },
    {
      id: 9,
      title: 'Lakely',
      description:
        "La bulle est un cocon de nature luxueux qui permet de ne faire qu'un avec la nature. Sa grande chance, la baie vitrée courbée et enveleoppante.",
      url: '',
      image: '/assets/images/tinyhouse12.jpg',
    },
    {
      id: 10,
      title: 'Carré noir',
      description:
        "La bulle est un cocon de nature luxueux qui permet de ne faire qu'un avec la nature. Sa grande chance, la baie vitrée courbée et enveleoppante.",
      url: '',
      image: '/assets/images/tinyhouse14.jpg',
    },
  ];

  return (
    <>
      <section className="projects" id="projects">
        {/* <h1>NOS PROJETS PHARES</h1>
        <blockquote className="concept__quote">
          "On commence toujours un projet par la fin, quand on programme un GPS, on lui
          dit où l’on va, pas où l’on est."
          <figcaption className="concept__quote__author">Alain Leblay</figcaption>
        </blockquote> */}
        <div className="projects__section">
          {projectsData &&
            projectsData.map((project) => <ProjectCard key={project.id} {...project} />)}
        </div>
      </section>
    </>
  );
};

export default Projects;
