// src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    { title: 'Ohana swimware', description: '',  link : '', id: 1 },
    { title: 'Riziki Foundation', description: '', id: 2 },
    { title: 'Vedman Capital Limited', description: '', link:'https://vedmangroup.com/', id: 3 },
    { title: ' Event hub ', description: '', id: 4 },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li className="project-item" key={project.id}>
            <Link to={`/project/${project.id}`}>
              <h3>{project.title}</h3>
            </Link>
            <p>{project.description}</p>
            
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
