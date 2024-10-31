// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Example project details (you would typically fetch this from an API or state)
  const project = {
    1: { title: 'Ohana Swimwear', description: 'Ohana Family Wear Limited is a kenyan company that specializes in providing authentic African print swimwear. The company’s services are focused on providing the much-needed quality recreational products around the world. The company designs, produces and sells All  inclusive African inspired swimwear products LINK : https://ohanafamilywear.com/' },
    2: { title: 'Riziki Foundation', description: 'Riziki Foundation is a Nonprofit  Faith Based Organisation formally registered in Kenya in 2017 as a company limited by guarantee.' },
    3: { title: 'Vedman Capital Limited', description: 'Vedman Capital Limited is a financial services intermediary firm. Established in 2017, the company is a licensed Investment Adviser by Capital Markets Authority (CMA).' },
    4: { title: 'Eventhub', description: 'Events Hub kenya is a web app where one may add his or her event and also view other events that are happening in the country.' },
    
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
