import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isToolsOpen, setIsToolsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="logo flex items-center">
                    <h1 className="text-2xl font-bold text-gray-800">ZAFRANAL</h1>
                    <span className="ml-2 text-lg text-blue-600">TECK</span>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/security" className="text-gray-700 hover:text-blue-600 transition">
                                Security
                            </Link>
                        </li>
                        <li className="relative">
                            <button 
                                className="flex items-center text-gray-700 hover:text-blue-600 transition focus:outline-none"
                                onMouseEnter={() => setIsToolsOpen(true)}
                                onClick={() => setIsToolsOpen(!isToolsOpen)}
                            >
                                Herramientas <FaChevronDown className={`ml-1 transition-transform ${isToolsOpen ? 'transform rotate-180' : ''}`} />
                            </button>
                            
                            {isToolsOpen && (
                                <div 
                                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-50 border border-gray-100"
                                    onMouseLeave={() => setIsToolsOpen(false)}
                                >
                                    <Link 
                                        to="/herramientas-security" 
                                        className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                                        onClick={() => setIsToolsOpen(false)}
                                    >
                                        Security
                                    </Link>
                                    <Link 
                                        to="/respuesta-emergencias" 
                                        className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                                        onClick={() => setIsToolsOpen(false)}
                                    >
                                        Respuesta a Emergencias
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;