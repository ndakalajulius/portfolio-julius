// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Project One', description: 'Description of project one' },
    { title: 'Project Two', description: 'Description of project two' },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
