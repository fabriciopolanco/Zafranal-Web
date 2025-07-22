import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ModernGallery = () => {
  const images = [
    { id: 1, src: 'src/assets/images/image1.jpg', title: 'Seguridad Patrimonial', description: 'Nuestro equipo en acción' },
    { id: 2, src: 'src/assets/images/image1.jpg', title: 'Respuesta a Emergencias', description: 'Simulacro de capacitación' },
    { id: 3, src: 'src/assets/images/image1.jpg', title: 'Medio Ambiente', description: 'Programas de sostenibilidad' },
    { id: 4, src: 'src/assets/images/image1.jpg', title: 'Equipo Profesional', description: 'Nuestros especialistas' },
    { id: 5, src: 'src/assets/images/image1.jpg', title: 'Comunidad', description: 'Trabajando con vecinos' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotación del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Encabezado con estilo moderno */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
            EXPLORA NUESTRO TRABAJO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Galería <span className="text-blue-600">Visual</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre momentos destacados de nuestros proyectos y actividades
          </p>
        </div>

        {/* Carrusel moderno */}
        <div className="relative max-w-6xl mx-auto group">
          {/* Imagen principal con efecto hover */}
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 transform group-hover:shadow-xl">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Overlay con texto moderno */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-2">{images[currentIndex].title}</h3>
                <p className="text-gray-200 text-lg">{images[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="flex justify-center mt-6 space-x-3">
            {images.map((img, index) => (
              <button
                key={img.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 overflow-hidden rounded-lg transition-all duration-300 ${currentIndex === index ? 'ring-4 ring-blue-500 scale-110' : 'opacity-70 hover:opacity-100'}`}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Controles elegantes */}
          <button
            onClick={goToPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <FiChevronLeft size={28} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <FiChevronRight size={28} />
          </button>

          {/* Indicador de progreso */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-1 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-4000 ease-linear"
              style={{ width: '100%', transformOrigin: 'left' }}
              key={currentIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernGallery;   