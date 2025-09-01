import React, { useState, useEffect } from 'react';
import Header from './Header';

const Experience = ({ header }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/profile/experiences.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading experiences:', error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Header header={header} />
      <div className="space-y-6">
        {data.experiences?.map((exp, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-blue-600 dark:text-blue-400">{exp.subtitle}</p>
            <p className="text-gray-600 dark:text-gray-400">{exp.dateText}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{exp.workType}</p>
            {exp.workDescription && (
              <ul className="mt-2 list-disc list-inside space-y-1">
                {exp.workDescription.map((desc, descIndex) => (
                  <li key={descIndex} className="text-sm">{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;