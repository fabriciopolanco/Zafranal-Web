import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="brand-section flex items-center mb-4 md:mb-0">
          <span className="text-xl font-bold">ZAFRANAL</span>
          <span className="ml-2 text-blue-400">TECK</span>
        </div>

        <div className="separator h-px bg-gray-600 w-full md:w-px md:h-6 mx-4"></div>

        <div className="tagline text-center md:text-left mb-4 md:mb-0">
          Excelencia en seguridad patrimonial y respuesta a emergencias.
        </div>

        <div className="separator h-px bg-gray-600 w-full md:w-px md:h-6 mx-4"></div>

        <div className="links-section flex space-x-6">
          <Link to="/" className="hover:text-blue-400 transition">
            Inicio
          </Link>
          <Link to="/security" className="hover:text-blue-400 transition">
            Security
          </Link>
          <Link to="/servicios" className="hover:text-blue-400 transition">
            Servicios
          </Link>
        </div>

        <div className="separator h-px bg-gray-600 w-full md:w-px md:h-6 mx-4"></div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} Zafranal TECK
        </div>
      </div>
    </footer>
  );
};

export default Footer;