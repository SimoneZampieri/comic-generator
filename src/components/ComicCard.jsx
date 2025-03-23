import React from "react";

const ComicCard = ({ currentComic }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden border-4 border-black relative w-full md:w-[600px] h-auto md:h-[400px]">
      {/* Stile Pop-Art per l'immagine */}
      <img
        className="object-cover w-full md:w-[250px] h-[300px] md:h-full border-b-4 md:border-b-0 md:border-r-4 border-black"
        src={currentComic.coverUrl}
        alt={currentComic.name}
      />

      {/* Contenitore del testo in stile fumetto */}
      <div className="flex flex-col justify-between p-4 leading-normal text-black w-full md:w-[350px]">
        {/* Titolo con effetto fumetto */}
        <h5 className="mb-2 text-2xl md:text-3xl font-bold tracking-wide font-comic uppercase text-yellow-400 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          {currentComic.name}
        </h5>

        {/* Autori e Editore */}
        <p className="mb-2 text-base md:text-lg font-semibold text-gray-800">
          Autori: {currentComic.autori}
        </p>
        <p className="mb-4 text-base md:text-lg font-semibold text-gray-800">
          Editore: {currentComic.editore}
        </p>

        {/* Descrizione dentro un balloon */}
        <div className=" bg-yellow-100 p-4 border-4 border-black rounded-lg shadow-2xl max-h-40 md:max-h-60 overflow-hidden">
          <div className="overflow-y-auto max-h-full pr-2">
            <p className="mb-3 font-normal text-gray-900">
              {currentComic.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
