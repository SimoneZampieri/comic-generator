import { useState } from "react";
import { useComics } from "../context/ComicContext";
import ComicCard from "../components/ComicCard";

const ComicsRoll = () => {
  const comics = useComics();
  const [currentComic, setCurrentComic] = useState(getRandomComic());

  function getRandomComic() {
    const randomIndex = Math.floor(Math.random() * comics.length);
    return comics[randomIndex];
  }

  const handleRoll = () => {
    setCurrentComic(getRandomComic());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <ComicCard currentComic={currentComic} />
      <br />
      <button
        onClick={handleRoll}
        className="bg-red-400 text-black font-bold py-2 px-4 rounded-full hover:bg-red-600 mt-4"
      >
        Non mi ispira
      </button>
    </div>
  );
};

export default ComicsRoll;
