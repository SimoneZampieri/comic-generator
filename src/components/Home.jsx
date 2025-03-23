import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/comics");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
      <h1 className="text-4xl md:text-8xl font-bold text-yellow-400 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase mb-10">
        Blocco del lettore? Clicca il bottone per eliminarlo!
      </h1>
      <button
        onClick={handleStart}
        className="bg-red-400 text-black font-bold py-4 px-8 rounded-full hover:bg-red-600 active:bg-red-700 active:translate-y-1 cursor-pointer drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
      >
        Vai!
      </button>
    </div>
  );
};

export default Home;
