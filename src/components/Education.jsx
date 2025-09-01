import React, { useState, useEffect } from 'react';
import Header from './Header';

const Education = ({ header }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/profile/education.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading education:', error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Header header={header} />
      <div className="space-y-6">
        {data.education?.map((edu, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{edu.cardTitle}</h3>
            <p className="text-blue-600 dark:text-blue-400">{edu.cardSubtitle}</p>
            <p className="text-gray-600 dark:text-gray-400">{edu.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;