import React from "react";

const ComicCard = ({ currentComic }) => {
  return (
    <div className="flex flex-row bg-white shadow-xl rounded-lg overflow-hidden border-4 border-black relative w-[600px] h-[400px]">
      {/* Stile Pop-Art per l'immagine */}
      <img
        className="object-cover w-[250px] h-full border-r-4 border-black"
        src={currentComic.coverUrl}
        alt={currentComic.name}
      />

      {/* Contenitore del testo in stile fumetto */}
      <div className="flex flex-col justify-between p-4 leading-normal text-black w-[350px]">
        {/* Titolo con effetto fumetto */}
        <h5 className="mb-2 text-3xl font-bold tracking-wide font-comic uppercase text-yellow-400 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          {currentComic.name}
        </h5>

        {/* Descrizione dentro un balloon */}
        <div className="relative bg-white p-4 border-4 border-black rounded-lg shadow-lg">
          <p className="mb-3 font-normal text-gray-900">
            {currentComic.description}
          </p>
          <div className="absolute -bottom-3 left-6 w-6 h-6 bg-white border-l-4 border-b-4 border-black transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
