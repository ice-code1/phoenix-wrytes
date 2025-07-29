import React from 'react';
import { motion } from 'framer-motion';

interface PhoenixTransitionProps {
  isTransitioning: boolean;
  onComplete: () => void;
}

const PhoenixTransition: React.FC<PhoenixTransitionProps> = ({ isTransitioning, onComplete }) => {
  if (!isTransitioning) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onComplete}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1.5, rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full h-full bg-gradient-radial from-transparent via-orange-300/30 to-red-600/50" />
        </motion.div>
        
        {/* Flame particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 20,
              opacity: 0
            }}
            animate={{ 
              y: -20,
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5,
              delay: i * 0.05,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PhoenixTransition;