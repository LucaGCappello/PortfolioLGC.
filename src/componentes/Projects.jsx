import React from 'react';
import ProjectCard from './ProjectsCard';

const projects = [
  {
    imgSrc: "/saas.png",
    title: "SaaS Platform",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isReversed: false,
  },
  {
    imgSrc: "/ecommerce.png",
    title: "E-Commerce Store",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    isReversed: true,
  },
  {
    imgSrc: "/portfolio.png",
    title: "Personal Portfolio",
    description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isReversed: false,
  },
];

const Projects = () => {
  return (
    <div className="text-white py-12 px-6 md:px-12">
      <h2 className="text-3xl font-bold mb-4">Projects: </h2>
      <p className="text-gray-400 mb-6">(Personal and non-personal projects)</p>
      
      <div className="space-y-12 w-full max-w-4xl flex flex-col items-center justify-center mx-auto text-left mt-20 ">
      {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            isReversed={project.isReversed}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;