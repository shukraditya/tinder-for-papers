import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const PaperCard = ({ paper, onSwipe }) => {
  const controls = useAnimation();

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 150) {
      onSwipe("right", paper);
    } else if (info.offset.x < -150) {
      onSwipe("left", paper);
    } else {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300 } });
    }
  };

  useEffect(() => {
    controls.start({ x: 0 });
  }, [paper, controls]);

  return (
    <motion.div
      className="w-96 h-96 bg-white shadow-lg rounded-xl p-4"
      drag="x"
      dragConstraints={{ left: 20, right: -20 }} 
      dragElastic={0.2} // Adds a bit of stretch effect
      onDragEnd={handleDragEnd}
      animate={controls}
      whileTap={{ scale: 1.02 }} 
    >
      <h2 className="text-xl font-bold">{paper.title}</h2>
      <p className="text-sm text-gray-600">{paper.abstract}</p>
    </motion.div>
  );
};

export default PaperCard;
