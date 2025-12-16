import React from "react";

const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Tarjeta contenedora */}
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Contenido de texto */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              NUESTRA ESENCIA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
              Conociendo <span className="text-blue-600">Zafranal</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Somos una empresa social y ambientalmente responsable. Nos
              esforzamos por contribuir positivamente con la calidad de vida de
              nuestras vecinas y vecinos, a través de programas de inversión
              social.
            </p>

            <a
              href="#"
              className="inline-flex items-center text-blue-600 font-medium group transition duration-300"
            >
              Conoce más
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Contenedor del video */}
          <div className="relative w-full pb-[30.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/RnPlcQyH4yM"
              title="Zafranal Corporate Video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
