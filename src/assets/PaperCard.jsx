import { motion } from "framer-motion";

const PaperCard = ({ paper, onSwipe }) => {
  return (
    <motion.div
      className="w-96 h-96 bg-white shadow-lg rounded-xl p-4"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      onDragEnd={(event, info) => {
        if (info.offset.x > 100) onSwipe("right", paper);
        if (info.offset.x < -100) onSwipe("left", paper);
      }}
    >
      <h2 className="text-xl font-bold">{paper.title}</h2>
      <p className="text-lg text-gray-600">{paper.abstract}</p>
    </motion.div>
  );
};

export default PaperCard;
