import React from 'react';

const TechStackCard = ({ iconSrc, name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-[#5a5a5a] p-4 bg-[#181818] rounded-lg flex items-center justify-between transition hover:bg-[#282828] "
    >
      <div className="flex items-center gap-3">
        <img src={iconSrc} alt={name} className="w-8 h-8" />
        <span className="text-white">{name}</span>
      </div>

      <span className="text-gray-400">🔗</span>
    </a>
  );
};

export default TechStackCard;






