import React from "react";

const OrganigramaSecurity = () => {
  const organizationalStructure = [
    {
      level: "Gerencia",
      members: [
        {
          name: "Michael Regalado Varea",
          position:
            "Gerente de Seguridad Patrimonial y Respuesta a Emergencias",
          isMain: true,
        },
      ],
    },
    {
      level: "Jefaturas",
      members: [
        {
          name: "Antonio Arevalo",
          position: "Jefe de Seguridad Patrimonial",
        },
        { name: "Johny Villacorta", position: "Jefe de Seguridad Patrimonial" },
        {
          name: "Jose Freytas Peña",
          position: "Jefe de Respuesta a Emergencias",
        },
      ],
    },
    {
      level: "Coordinación",
      members: [
        {
          name: "Alvaro Casani",
          position: "Coordinador de Admisión y Control",
        },
      ],
    },
    {
      level: "Operadores",
      members: [
        {
          name: "Alexandra Caceres",
          position: "Operador de Centro de Control",
        },
        { name: "Eduardo Barriga", position: "Operador de Centro de Control" },
        {
          name: "Hans Aviles",
          position: "Operador de Centro de Control",
        },
        {
          name: "Lidia Begazo",
          position: "Operador de Centro de Control",
        },
        {
          name: "Isidro Palma",
          position: "Operador de Centro de Control",
        },
        { name: "Richard Baca", position: "Operador de Centro de Control" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          <span className="bg-clip-text bg-blue-800 text-transparent bg-gradient-to-r ">
            Estructura Organizacional
          </span>
        </h1>
        <p className="text-xl text-black max-w-2xl mx-auto">
          Jerarquía del Departamento de Seguridad
        </p>
      </div>

      <div className="relative">
        {/* Línea vertical conectiva */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300 transform -translate-x-1/2 z-0"></div>

        <div className="space-y-12 relative z-10">
          {organizationalStructure.map((level, levelIndex) => (
            <div key={levelIndex} className="group">
              <div
                className={`p-6 rounded-2xl bg-blue-800 text-white shadow-lg mx-auto max-w-4xl`}
              >
                <h2 className="text-2xl font-bold text-center">
                  {level.level}
                </h2>
              </div>

              <div
                className={`grid gap-6 mt-8 mx-auto ${level.level === "Operadores"
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    : level.members.length === 1
                      ? "grid-cols-1 max-w-md"
                      : level.members.length <= 3
                        ? "grid-cols-1 md:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
                  }`}
              >
                {level.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className={`relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${levelIndex === 0
                      ? "border-2 border-blue-300"
                      : "border-gray-200"
                      }`}
                  >
                    {levelIndex === 0 && (
                      <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                        Líder
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-80"></div>

                    <div className="relative z-10 p-6">
                      <div
                        className={`flex items-center justify-center w-20 h-20 mx-auto mb-5 rounded-full ${levelIndex === 0
                          ? "bg-blue-100 border-2 border-blue-300"
                          : "bg-white border border-gray-200"
                          } shadow-md overflow-hidden`}
                      >
                        <div
                          className={`flex items-center justify-center w-full h-full ${levelIndex === 0
                            ? "bg-gradient-to-br from-blue-200 to-blue-100 text-blue-700"
                            : "bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600"
                            } text-3xl font-bold`}
                        >
                          {member.name.charAt(0)}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                        {member.name}
                      </h3>
                      <p
                        className={`text-center font-medium ${levelIndex === 0 ? "text-blue-600" : "text-blue-500"
                          }`}
                      >
                        {member.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganigramaSecurity;
