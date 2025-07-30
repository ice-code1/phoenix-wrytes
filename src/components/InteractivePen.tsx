import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Pen } from 'lucide-react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
  id: string;
}

const InteractivePen: React.FC = () => {
  const penRef = useRef<HTMLDivElement>(null);
  const [trails, setTrails] = useState<TrailPoint[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isFireMode, setIsFireMode] = useState(false);

  const x = useMotionValue(50);
  const y = useMotionValue(50);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const [constraints, setConstraints] = useState({
    left: 0,
    right: window.innerWidth - 60,
    top: 0,
    bottom: window.innerHeight - 60,
  });

  useEffect(() => {
    // Update trail cleanup
    const interval = setInterval(() => {
      const now = Date.now();
      setTrails(prev => prev.filter(trail => now - trail.timestamp < 5000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Center pen on mount
    x.set(window.innerWidth / 2 - 30);
    y.set(window.innerHeight / 2 - 30);

    // Update constraints on resize
    const updateConstraints = () => {
      setConstraints({
        left: 0,
        right: window.innerWidth - 60,
        top: 0,
        bottom: window.innerHeight - 60,
      });
    };

    window.addEventListener('resize', updateConstraints);
    updateConstraints();

    return () => window.removeEventListener('resize', updateConstraints);
  }, [x, y]);

  const [showPointer, setShowPointer] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => setShowPointer(false), 5000);
  return () => clearTimeout(timer);
}, []);

  const handleDrag = (event: any, info: any) => {
    const now = Date.now();
    const newTrail: TrailPoint = {
      x: info.point.x,
      y: info.point.y,
      timestamp: now,
      id: `${now}-${Math.random()}`,
    };

    setTrails(prev => [...prev, newTrail]);
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">
      {/* Trail Effects */}
      {trails.map(trail => {
        const age = Date.now() - trail.timestamp;
        const opacity = Math.max(0, 1 - age / 5000);
        const scale = Math.max(0.1, 1 - age / 3000);

        return (
          <div
            key={trail.id}
            className={`absolute w-3 h-3 rounded-full pointer-events-none transition-all duration-100 ${
              isFireMode
                ? 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 shadow-lg shadow-orange-500/50'
                : 'bg-black shadow-lg'
            }`}
            style={{
              left: trail.x - 6,
              top: trail.y - 6,
              opacity,
              transform: `scale(${scale})`,
              filter: isFireMode ? 'blur(0.5px)' : 'none',
            }}
          />
        );
      })}

      {/* Interactive Pen */}
      <motion.div
        ref={penRef}
        className="pointer-events-auto cursor-grab active:cursor-grabbing"
        style={{
          x: springX,
          y: springY,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        drag
        dragConstraints={constraints}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDrag={handleDrag}
        onHoverStart={() => setIsFireMode(true)}
        onHoverEnd={() => setIsFireMode(false)}
        whileHover={{ scale: 1.1 }}
        whileDrag={{ scale: 1.2, rotate: 15 }}
      >
        <div
          className={`
            w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
            ${isFireMode || isDragging
              ? 'bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-orange-500/50'
              : 'bg-gradient-to-br from-gray-800 to-black shadow-lg'}
          `}
        >
          
        {showPointer && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: -20 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md shadow-md pointer-events-none"
            >
              Use Me
            </motion.div>
          )}

          <Pen
            className={`w-6 h-6 transition-colors duration-300 ${
              isFireMode || isDragging ? 'text-white' : 'text-yellow-400'
            }`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default InteractivePen;
