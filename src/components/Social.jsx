import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

function Social() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/profile/social.json')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data?.social) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex justify-center items-center space-x-4"
    >
      {data.social.map((social, index) => (
        <motion.div
          key={social.network}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 + index * 0.1, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <SocialIcon
            url={social.href}
            network={social.network}
            bgColor="#1f2937"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: 50,
              width: 50,
            }}
            className="transition-all duration-200 hover:shadow-lg"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Social;