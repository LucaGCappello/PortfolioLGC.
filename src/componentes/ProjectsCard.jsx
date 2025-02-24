import React from 'react';

const ProjectCard = ({ imgSrc, title, description, isReversed }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="text-white text-xl font-bold text-center w-full mb-7">
        {title}
      </h2>

    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between w-full gap-6 border-b border-gray-800`}>
      
      <img 
        src={imgSrc} 
        alt={title} 
        className="w-32 h-32 md:w-48 md:h-48 rounded-lg mb-15"
      />
      
      
      
      <p className="text-gray-300 text-sm text-left mt-4 md:mt-0 max-w-md">
        {description}
      </p>
    </div></div>
  );
}

export default ProjectCard;