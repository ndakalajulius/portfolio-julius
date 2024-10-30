// src/components/ProjectDetail.js
import React from 'react';

const ProjectDetail = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => window.history.back()}>Back to Projects</button>
    </div>
  );
};

export default ProjectDetail;
