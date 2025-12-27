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
      title: "Responsible and courageous",
      description:
        "We do the right thing, even when it is difficult or requires energetic action.",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Respectful and inclusive",
      description:
        "We believe that all people are important and that together we are better.",
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We achieved outstanding performance through innovation and a commitment to continuous improvement in efficiency and productivity.",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Health and safety",
      description:
        "We do whatever it takes to ensure that everyone returns home safe and sound every day.",
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "We ensure the well-being of the people, communities, and environments entrusted to us.",
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Humble and determined",
      description:
        "We are open and we listen, we learn and we are tireless in the pursuit of excellence.",
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
            Our <span className="text-blue-600">Values</span>
          </h2>
          <p className="text-xl text-gray-600">
            Fundamental principles that guide every action and decision at
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
    </section>
  );
};

export default ValuesSection;
