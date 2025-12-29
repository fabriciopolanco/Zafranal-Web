// src/components/ImageGallery.jsx
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Imágenes de Seguridad Patrimonial
import patrimonial1 from "../../assets/images/image1.jpeg";
import patrimonial2 from "../../assets/images/image2.jpeg";
import patrimonial3 from "../../assets/images/image3.jpeg";
import patrimonial4 from "../../assets/images/image4.jpeg";

// Imágenes de Respuesta a Emergencias
import emergencias1 from "../../assets/images/image5.jpeg";
import emergencias2 from "../../assets/images/image6.jpeg";
import emergencias3 from "../../assets/images/image7.jpeg";
import emergencias4 from "../../assets/images/image9.jpeg";

const ImageGallery = () => {
  const patrimonialImages = [
    {
      id: 1,
      src: patrimonial1,
      title: "Patrullaje y Vigilancia",
      description: "Control perimetral 24/7",
    },
    {
      id: 2,
      src: patrimonial2,
      title: "Capacitación Continua",
      description: "Entrenamiento especializado",
    },
    {
      id: 3,
      src: patrimonial3,
      title: "Tecnología Avanzada",
      description: "Sistemas de monitoreo moderno",
    },
    {
      id: 4,
      src: patrimonial4,
      title: "Simulacro de Evacuación",
      description: "Respuesta coordinada",
    },
  ];

  const emergenciasImages = [
    {
      id: 1,
      src: emergencias1,
      title: "Primeros Auxilios",
      description: "Atención inmediata en sitio",
    },
    {
      id: 2,
      src: emergencias2,
      title: "Control de Incendios",
      description: "Equipo altamente preparado",
    },
    {
      id: 3,
      src: emergencias3,
      title: "Control de Incendios",
      description: "Equipo altamente preparado",
    },
        {
      id: 4,
      src: emergencias4,
      title: "Control de Incendios",
      description: "Equipo altamente preparado",
    },
  ];

  const Carousel = ({ images, sectionTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [images.length]);

    const goToNext = () =>
      setCurrentIndex((prev) => (prev + 1) % images.length);
    const goToPrev = () =>
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
      <div className="relative group h-full">
        {/* Imagen principal (más compacta) */}
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl transition-shadow duration-500 hover:shadow-2xl">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            className="w-full h-full object-cover"
          />

          {/* Overlay con texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
            <div className="max-w-md">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                {images[currentIndex].title}
              </h4>
              <p className="text-gray-200 text-sm md:text-base">
                {images[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

        {/* Miniaturas compactas */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((img, index) => (
            <button
              key={img.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-lg transition-all duration-300 ${
                currentIndex === index
                  ? "ring-3 ring-blue-500 scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Controles */}
        <button
          onClick={goToPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Título principal */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold text-blue-600 tracking-widest uppercase">
            OUR AREAS IN ACTION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Visual <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Learn about the daily work of our specialized teams
          </p>
        </div>

        {/* Dos carruseles lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 max-w-7xl mx-auto">
          {/* Izquierda: Seguridad Patrimonial */}
          <div className="flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              <span className="text-blue-600">Security</span>
            </h3>
            <Carousel images={patrimonialImages} />
          </div>

          {/* Derecha: Respuesta a Emergencias */}
          <div className="flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              Emergency <span className="text-blue-600">Response</span>
            </h3>
            <Carousel images={emergenciasImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
