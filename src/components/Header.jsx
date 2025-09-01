import React from 'react';

const Header = ({ header }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {header}
      </h1>
    </div>
  );
};

export default Header;