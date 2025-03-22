import { createContext, useContext } from "react";
import comicsData from "../assets/data/comicsData";

const ComicsContext = createContext();

export const ComicsProvider = ({ children }) => {
  return (
    <ComicsContext.Provider value={comicsData}>
      {children}
    </ComicsContext.Provider>
  );
};

export const useComics = () => {
  return useContext(ComicsContext);
};
