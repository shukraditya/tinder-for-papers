import { useState } from "react";
import PaperCard from "./PaperCard";

const papers = [
  { id: 1, title: "Deep Learning in Healthcare", abstract: "An overview of DL applications..." },
  { id: 2, title: "New12", abstract: "New12" },
  { id: 3, title: "New13", abstract: "New13" },
  { id: 4, title: "New14", abstract: "New14" },
  { id: 5, title: "new15", abstract: "New15" },
  { id: 6, title: "New16", abstract: "New16" },
  { id: 7, title: "New17", abstract: "New17" },
  { id: 8, title: "Quantum Computing for AI", abstract: "Exploring quantum AI paradigms..." },
];

const SwipeDeck = () => {
  const [index, setIndex] = useState(0);

  const handleSwipe = (direction, paper) => {
    console.log(`Swiped ${direction} on ${paper.title}`);
    setIndex(index + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {index < papers.length ? (
        <PaperCard paper={papers[index]} onSwipe={handleSwipe} />
      ) : (
        <p className="text-xl font-bold text-black">No more papers!</p>
      )}
    </div>
  );
};

export default SwipeDeck;
