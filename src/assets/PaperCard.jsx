import { motion, useAnimation } from "framer-motion";
import { useLayoutEffect, useEffect } from "react";

const PaperCard = ({ paper, onSwipe, keySwipeDirection }) => {
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

  useEffect(() => {//current paper
    if (keySwipeDirection === "right") {
      controls.start({ x: 300, opacity: 0, transition: { type: "tween", duration: 0.3 } });
    } else if (keySwipeDirection === "left") {
      controls.start({ x: -300, opacity: 0, transition: { type: "tween", duration: 0.3 } });
    }
  }, [keySwipeDirection, controls]);

  useLayoutEffect(() => {
    controls.set({ x: 0, opacity: 1 });
  }, [paper, controls]);

  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      className="w-96 h-96 bg-white shadow-lg rounded-xl p-4"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.3}
      onDragEnd={handleDragEnd}
      animate={controls}
      whileTap={{ scale: 1.05 }}
    >
      <h2 className="text-xl text-black font-bold">{paper.title}</h2>
      <p className="text-sm text-gray-600">{paper.abstract}</p>
    </motion.div>
  );
};

export default PaperCard;
