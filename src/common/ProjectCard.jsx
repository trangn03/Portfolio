import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  const content = (
    <>
      <img className={link ? 'hover' : ''} src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </>
  );

  if (!link) {
    return <div>{content}</div>;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}

export default ProjectCard;