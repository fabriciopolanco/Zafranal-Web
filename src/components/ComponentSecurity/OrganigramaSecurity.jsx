// src/components/OrganigramaSecurity.jsx
import React from 'react';

import manager from '../../assets/organigrama-photos/michael.jpeg';
import antonioArevalo from '../../assets/organigrama-photos/antonio.jpg';
import johnyVillacorta from '../../assets/organigrama-photos/johny.jpg';
import danielCalle from '../../assets/organigrama-photos/daniel.jpg';
import alvaroCasani from '../../assets/organigrama-photos/alvaro.jpg';
import ricardoFreytas from '../../assets/organigrama-photos/ricardo.jpg';
import operador1 from '../../assets/organigrama-photos/hans.png';
import operador2 from '../../assets/organigrama-photos/isidro.png';
import operador3 from '../../assets/organigrama-photos/lidia.jpg';
import operador4 from '../../assets/organigrama-photos/richard.png';
import operador5 from '../../assets/organigrama-photos/alexandra.png';

const OrganigramaSecurity = () => {
  // Lista de operadores con sus nombres
  const operadores = [
    { foto: operador1, nombre: 'Hans' },
    { foto: operador2, nombre: 'Isidro' },
    { foto: operador3, nombre: 'Lidia' },
    { foto: operador4, nombre: 'Richard' },
    { foto: operador5, nombre: 'Alexandra' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-5">
          ORGANIGRAMA
        </h1>
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-16">
          Jerarquía del Departamento de Seguridad
        </h2>

        <div className="relative">

          {/* ==================== NIVEL 1: Manager ==================== */}
          <div className="flex flex-col items-center mb-20">
            <div className="flex items-center gap-6 bg-blue-800 rounded-xl shadow-2xl p-6">
              <div className="text-white text-right">
                <h3 className="text-xl font-bold">Property Security and Emergency Response Manager</h3>
                <p className="text-indigo-200 text-lg font-bold mt-1">Michael Regalado Varea</p>
              </div>
              <img
                src={manager}
                alt="Michael Regalado Varea"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Línea vertical larga hacia Antonio */}
          <div className="flex justify-center mb-20">
            <div className="w-0.5 bg-indigo-600 h-32"></div>
          </div>

          {/* ==================== NIVEL 2: Superintendent ==================== */}
          <div className="flex flex-col items-center mb-32">
            <div className="flex items-center gap-6 bg-blue-800 rounded-xl shadow-2xl p-6">
              <div className="text-white text-right">
                <h3 className="text-xl font-bold">Superintendent of Property Security and Emergency Response</h3>
                <p className="text-indigo-200 text-lg font-bold mt-1">Antonio Arevalo</p>
              </div>
              <img
                src={antonioArevalo}
                alt="Antonio Arevalo"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* ==================== NIVEL 3: Línea horizontal + 3 ramas ==================== */}
          <div className="relative">

            {/* Línea horizontal larga */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-1 bg-indigo-600 -z-10"></div>

            {/* Líneas verticales cortas hacia abajo */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl flex justify-between -z-10 px-12 md:px-0">
              <div className="w-0.5 bg-indigo-600 h-16"></div>
              <div className="w-0.5 bg-indigo-600 h-16"></div>
              <div className="w-0.5 bg-indigo-600 h-16"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

              {/* Rama Izquierda: Johny + Daniel */}
              <div className="flex flex-col items-center space-y-12">
                <div className="flex items-center gap-4 bg-blue-800 rounded-xl shadow-2xl p-5">
                  <div className="text-white">
                    <h4 className="text-lg font-bold">Chief of Patrimonial Security</h4>
                    <p className="text-indigo-200 font-medium">Johny Villacorta</p>
                  </div>
                  <img
                    src={johnyVillacorta}
                    alt="Johny Villacorta"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                <div className="w-0.5 bg-indigo-600 h-10"></div>

                <div className="flex items-center gap-4 bg-blue-800 rounded-xl shadow-2xl p-4">
                  <div className="text-white">
                    <h5 className="text-base font-bold">Supervisor of Patrimonial Security</h5>
                    <p className="text-indigo-200 text-sm">Daniel Calle</p>
                  </div>
                  <img
                    src={danielCalle}
                    alt="Daniel Calle"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
              </div>

              {/* Rama Central: Alvaro + Operadores */}
              <div className="flex flex-col items-center space-y-16">
                <br />
                <br />
                <br />
                <br />
                <div className="flex items-center gap-4 bg-blue-800 rounded-xl shadow-2xl p-5">
                  <div className="text-white">
                    <h4 className="text-lg font-bold">Coordinator of OPA y SOC</h4>
                    <p className="text-indigo-200 font-medium">Alvaro Casani</p>
                  </div>
                  <img
                    src={alvaroCasani}
                    alt="Alvaro Casani"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                <div className="w-0.5 bg-indigo-600 h-16"></div>

                {/* Control Center Operators con nombres */}
                <div className="bg-blue-800 rounded-xl shadow-2xl p-8 text-center">
                  <h5 className="text-2xl font-bold text-white mb-10">Control Center Operators</h5>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
                    {operadores.map((operador, index) => (
                      <div key={index} className="flex flex-col items-center transform transition hover:scale-110">
                        <img
                          src={operador.foto}
                          alt={operador.nombre}
                          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl mb-3"
                        />
                        <p className="text-white font-medium text-sm">{operador.nombre}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rama Derecha: Ricardo */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-4 bg-blue-800 rounded-xl shadow-2xl p-5">
                  <div className="text-white">
                    <h4 className="text-lg font-bold">Chief of Emergency Response</h4>
                    <p className="text-indigo-200 font-medium">Ricardo Freytas</p>
                  </div>
                  <img
                    src={ricardoFreytas}
                    alt="Ricardo Freytas"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganigramaSecurity;