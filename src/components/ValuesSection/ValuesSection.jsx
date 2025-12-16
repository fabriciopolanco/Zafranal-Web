import React from "react";
import {
  FaShieldAlt,
  FaHandshake,
  FaLeaf,
  FaUsers,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";

const ValuesSection = () => {
  const values = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Responsables y valientes",
      description:
        "Hacemos lo correcto, incluso cuando es difícil o se requiere una acción energética.",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Respetuosos e Inclusivos",
      description:
        "Creemos que todas las personas son importantes y que juntos somos mejores.",
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Excelencia",
      description:
        "Logramos un desempeño sobresaliente a través de la innovación y el compromiso con el mejoramiento continuo en eficiencia y productividad.",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Salud y Seguridad",
      description:
        "Hacemos lo que sea necesario para garantizar que todos y todas vuelvan a casa sanos y salvos cada día.",
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Sustentabilidad",
      description:
        "Aseguramos el bienestar de las personas, comunidades y los entornos que se nos han confiado.",
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Humildes y determinados",
      description:
        "Somos abiertos y escuchamos, aprendemos y somos incansables en la búsqueda de la excelencia.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-blue-600">Valores</span>
          </h2>
          <p className="text-xl text-gray-600">
            Principios fundamentales que guían cada acción y decisión en
            Zafranal
          </p>
          <div className="mt-8 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        {/* Grid de valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-blue-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-800 hover:border-blue-600"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-700 p-3 rounded-full text-white">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-blue-100">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ola decorativa inferior */}
      <div className="wave-divider mt-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-blue-100"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-blue-100"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-blue-100"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ValuesSection;
