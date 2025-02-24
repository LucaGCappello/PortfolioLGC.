import React from 'react';
import TechStackCard from './TechStackCard';

const techs = [
    { iconSrc: "/js.svg", name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { iconSrc: "/nodejs.svg", name: "Node.js", link: "https://nodejs.org/" },
    { iconSrc: "/nextjs.svg", name: "Next.js", link: "https://nextjs.org/" },
    { iconSrc: "/mui.svg", name: "MUI", link: "https://mui.com/" },
    { iconSrc: "/tailwind.svg", name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { iconSrc: "/express.svg", name: "Express.js", link: "https://expressjs.com/" },
    { iconSrc: "/shadcn.svg", name: "ShadCN/UI", link: "https://ui.shadcn.com/" },
    { iconSrc: "/react.svg", name: "React", link: "https://react.dev/" },
  ];

const TechStack = () => {
  return (
    <section className="text-white py-12 px-6 md:px-12">
      <h2 className="text-3xl font-bold mb-4">Tech Stack I Use:</h2>
      <p className="text-gray-400 mb-6">(On personal and non-personal projects)</p>
      <div 
      className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techs.map((tech, index) => (
          <TechStackCard key={index} iconSrc={tech.iconSrc} name={tech.name} link={tech.link} />
         
        ))}
      </div>
    </section>
  );
};

export default TechStack;