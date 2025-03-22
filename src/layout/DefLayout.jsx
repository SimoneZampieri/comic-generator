import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const DefLayout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.jpg')",
          filter: "brightness(0.5)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <header className="relative p-4 bg-red-400 flex justify-between items-center shadow-lg">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </Link>
        <a
          href="https://github.com/SimoneZampieri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </header>
      <main className="relative flex-grow flex items-center justify-center shadow-lg">
        {children}
      </main>
      <footer className="relative p-2 bg-red-400 text-center shadow-lg">
        <p>&copy; 2025 Comic Generator</p>
      </footer>
    </div>
  );
};

export default DefLayout;
