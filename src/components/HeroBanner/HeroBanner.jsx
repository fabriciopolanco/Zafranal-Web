import React from 'react';
import { Link } from 'react-scroll'; // Necesitarás instalar react-scroll

const HeroBanner = () => {
    return (
        <section
            className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/src/assets/hero-banner.jpg')" }}
        >
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    ZAFRANAL <span className="text-blue-400">TECK</span>
                </h1>

                <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6 drop-shadow-lg">
                    GERENCIA DE SEGURIDAD PATRIMONIAL<br />
                    Y RESPUESTA A EMERGENCIAS
                </h2>

                <Link
                    to="about-section"
                    smooth={true}
                    duration={500}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 cursor-pointer drop-shadow-lg"
                >
                    Leer más
                </Link>
            </div>
        </section>
    );
};

export default HeroBanner;