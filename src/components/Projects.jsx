import React, { useState, useEffect } from 'react';
import Header from './Header';

const Projects = ({ header }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/profile/projects.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Header header={header} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects?.map((project, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">{project.bodyText}</p>
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {project.links && (
              <div className="flex gap-4">
                {project.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;