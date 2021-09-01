
import React from "react";
import { FaGithub } from 'react-icons/fa';
import "./index.css"

const Footer = () => {
  return (
  
    <footer className="w-100 mt-auto pt-4">
      <div className="container">
        <div className="links">
          <a
            href="https://github.com/RLAQUEA/final-project"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={50} className="icon"/>
          </a>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2021 Frequencies</p>
        </div>
      </div>
    </footer>
   
  );
};

export default Footer;

