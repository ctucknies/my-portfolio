import React, { useState, useEffect } from 'react';
import Header from './Header';

const Skills = ({ header }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/profile/skills.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading skills:', error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Header header={header} />
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{data.intro}</p>
      </div>
      <div className="space-y-8">
        {data.skills?.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.items?.map((skill, skillIndex) => (
                <div key={skillIndex} className="text-center">
                  <img 
                    src={skill.icon} 
                    alt={skill.title}
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <p className="text-sm">{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;