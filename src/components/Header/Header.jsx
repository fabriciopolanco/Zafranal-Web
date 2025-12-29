import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isToolsOpen, setIsToolsOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white shadow-md py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="logo flex items-center">
                    <h1 className="text-2xl font-bold">ZAFRANAL</h1>
                    <span className="ml-2 text-lg text-blue-400">TECK</span>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/" className="hover:text-blue-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/security" className="hover:text-blue-400 transition">
                                Security
                            </Link>
                        </li>
                        <li className="relative">
                            <button 
                                className="flex items-center hover:text-blue-400 transition focus:outline-none"
                                onMouseEnter={() => setIsToolsOpen(true)}
                                onClick={() => setIsToolsOpen(!isToolsOpen)}
                            >
                                Tools <FaChevronDown className={`ml-1 transition-transform ${isToolsOpen ? 'transform rotate-180' : ''}`} />
                            </button>
                            
                            {isToolsOpen && (
                                <div 
                                    className="absolute left-0 mt-2 bg-gray-800 shadow-lg rounded-md py-2 w-48 z-50 border border-gray-700"
                                    onMouseLeave={() => setIsToolsOpen(false)}
                                >
                                    <Link 
                                        to="/HerramientasSecurity" 
                                        className="block px-4 py-2 hover:bg-gray-700 text-white"
                                        onClick={() => setIsToolsOpen(false)}
                                    >
                                        Security and Emergency response
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
