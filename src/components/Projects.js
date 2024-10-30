// src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    { title: 'Project One', description: 'Description of project one', id: 1 },
    { title: 'Project Two', description: 'Description of project two', id: 2 },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
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
