// src/components/OrganigramaSecurity.jsx
import React from 'react';

// Fotos del organigrama
import michael from '../../assets/organigrama-photos/michael.jpeg';
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

// NUEVAS PARA CABECERA Y GERENTE GENERAL
import headerImage from '../../assets/organigrama-photos/alexandra.png'; // Imagen full width, 50px alto
import logo from '../../assets/organigrama-photos/alexandra.png'; // Logo PNG transparente
import gerenteGeneral from '../../assets/organigrama-photos/alexandra.png'; // Foto de Fabricio Polanco
// NUEVOS LOGOS PARA LA SECCIÓN FINAL
import logo1 from '../../assets/organigrama-photos/michael.jpeg';   // Ejemplo: Logo de Seguridad Patrimonial
import logo2 from '../../assets/organigrama-photos/michael.jpeg';    // Ejemplo: Logo de Respuesta a Emergencias
import logo3 from '../../assets/organigrama-photos/michael.jpeg';  // Ejemplo: Logo de Centro de Control


const OrganigramaSecurity = () => {
  const operadores = [
    { foto: operador1, nombre: 'Hans Aviles' },
    { foto: operador2, nombre: 'Isidro Palma' },
    { foto: operador3, nombre: 'Lidia Begazo' },
    { foto: operador4, nombre: 'Richard Vaca' },
    { foto: operador5, nombre: 'Alexandra Caceres' },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* ===================== CABECERA ===================== */}
      <div className="relative">
        {/* Imagen de fondo full width, 50px alto */}
        <div className="w-full h-[250px] overflow-hidden">
          <img
            src={headerImage}
            alt="Header banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Franja azul marino con título y logo */}
        <div className="bg-blue-900 py-4 px-8 flex justify-between items-center shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Security and Emergency Response
          </h1>
          <img
            src={logo}
            alt="Company Logo"
            className="h-12 md:h-16 object-contain"
          />
        </div>
      </div>

      {/* ===================== GERENTE GENERAL ===================== */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 mb-16">
          <img
            src={gerenteGeneral}
            alt="Fabricio Polanco"
            className="w-40 h-40 rounded-full object-cover border-6 border-blue-800 shadow-2xl"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900">
              Juan tocayo
            </h2>
            <h3 className="text-2xl font-semibold text-blue-800 mt-3">
              Gerente General
            </h3>
          </div>
        </div>

        {/* ===================== ORGANIGRAMA ===================== */}
        <div className="relative">

          {/* Michael Regalado - Security and Emergency Response Manager */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-6 bg-blue-800 rounded-xl shadow-2xl p-6">
              <div className="text-white text-right">
                <h3 className="text-xl font-bold">Security and Emergency Response Manager</h3>
                <p className="text-indigo-200 text-lg font-bold mt-1">Michael Regalado Varea</p>
              </div>
              <img
                src={michael}
                alt="Michael Regalado Varea"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Línea vertical hacia Antonio */}
          <div className="flex justify-center mb-20">
            <div className="w-0.5 bg-indigo-600 h-32"></div>
          </div>

          {/* Antonio Arevalo - Superintendent */}
          <div className="flex flex-col items-center mb-32">
            <div className="flex items-center gap-6 bg-blue-800 rounded-xl shadow-2xl p-6">
              <div className="text-white text-right">
                <h3 className="text-xl font-bold">Superintendent of Property Security and Emergency Response</h3>
                <p className="text-indigo-200 text-lg font-bold mt-1">Antonio Arevalo Solsol</p>
              </div>
              <img
                src={antonioArevalo}
                alt="Antonio Arevalo"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Línea horizontal + 3 ramas */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-1 bg-indigo-600 -z-10"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl flex justify-between -z-10 px-12 md:px-0">
              <div className="w-0.5 bg-indigo-600 h-16"></div>
              <div className="w-0.5 bg-indigo-600 h-16"></div>
              <div className="w-0.5 bg-indigo-600 h-16"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

              {/* Rama Izquierda */}
              <div className="flex flex-col items-center space-y-12">
                <div className="flex items-center gap-4 bg-blue-800 rounded-xl shadow-2xl p-5">
                  <div className="text-white">
                    <h4 className="text-lg font-bold">Chief of Patrimonial Security</h4>
                    <p className="text-indigo-200 font-medium">Johny Villacorta Vela</p>
                  </div>
                  <img src={johnyVillacorta} alt="Johny" className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
                </div>

                <div className="w-0.5 bg-indigo-600 h-10"></div>

                <div className="flex items-center gap-4 bg-blue-800 rounded-xl shadow-2xl p-4">
                  <div className="text-white">
                    <h5 className="text-base font-bold">Supervisor of Patrimonial Security</h5>
                    <p className="text-indigo-200 text-sm">Daniel Calle Pinto</p>
                  </div>
                  <img src={danielCalle} alt="Daniel" className="w-20 h-20 rounded-full border-4 border-white shadow-md" />
                </div>
              </div>

              {/* Rama Central */}
              <div className="flex flex-col items-center space-y-16">
                <br /><br /><br /><br />
                <div className="flex items-center gap-4 bg-blue-800 rounded-xl shadow-2xl p-5">
                  <div className="text-white">
                    <h4 className="text-lg font-bold">Coordinator of OPA y SOC</h4>
                    <p className="text-indigo-200 font-medium">Alvaro Casani Paccori</p>
                  </div>
                  <img src={alvaroCasani} alt="Alvaro" className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
                </div>

                <div className="w-0.5 bg-indigo-600 h-16"></div>

                <div className="bg-blue-800 rounded-xl shadow-2xl p-8 text-center">
                  <h5 className="text-2xl font-bold text-white mb-10">Control Center Operators</h5>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
                    {operadores.map((op, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <img src={op.foto} alt={op.nombre} className="w-20 h-20 rounded-full border-4 border-white shadow-xl mb-3" />
                        <p className="text-white font-medium text-sm">{op.nombre}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rama Derecha */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-4 bg-blue-800 rounded-xl shadow-2xl p-5">
                  <div className="text-white">
                    <h4 className="text-lg font-bold">Chief of Emergency Response</h4>
                    <p className="text-indigo-200 font-medium">Ricardo Freytas Peña</p>
                  </div>
                  <img src={ricardoFreytas} alt="Ricardo" className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
                </div>
              </div>

            </div>
          </div>
          <br />
          <br />
          {/* ===================== NUEVA SECCIÓN: NUESTROS LOGOS ===================== */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Nuestros Logos
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            <img
              src={logo1}
              alt="Logo Seguridad Patrimonial"
              className="h-32 md:h-40 object-contain transition-transform hover:scale-110"
            />
            <img
              src={logo2}
              alt="Logo Respuesta a Emergencias"
              className="h-32 md:h-40 object-contain transition-transform hover:scale-110"
            />
            <img
              src={logo3}
              alt="Logo Centro de Control"
              className="h-32 md:h-40 object-contain transition-transform hover:scale-110"
            />
          </div>
        </div>
        </div>
      </div>
    </div>

  );
};

export default OrganigramaSecurity;