// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Example project details (you would typically fetch this from an API or state)
  const project = {
    1: { title: 'Project One', description: 'Detailed description of Project One' },
    2: { title: 'Project Two', description: 'Detailed description of Project Two' },
  }[id];

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <section>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <button onClick={() => window.history.back()}>Back to Projects</button>
    </section>
  );
};

export default ProjectDetail;
