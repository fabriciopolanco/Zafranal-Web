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
              OUR ESSENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
              Discover <span className="text-blue-600">Zafranal</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              We are a socially and environmentally responsible company. We
              strive to contribute positively to the quality of life of our
              neighbors through social investment programs.
            </p>

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
