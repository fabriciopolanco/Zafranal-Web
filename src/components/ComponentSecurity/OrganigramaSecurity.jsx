// src/components/OrganigramaSecurity.jsx
import React from "react";

// Fotos del organigrama
import michael from "../../assets/organigrama-photos/michael.jpeg";
import antonioArevalo from "../../assets/organigrama-photos/antonio.jpg";
import johnyVillacorta from "../../assets/organigrama-photos/johny.jpg";
import danielCalle from "../../assets/organigrama-photos/daniel.jpg";
import alvaroCasani from "../../assets/organigrama-photos/alvaro.jpg";
import ricardoFreytas from "../../assets/organigrama-photos/ricardo.jpg";
import operador1 from "../../assets/organigrama-photos/hans.png";
import operador2 from "../../assets/organigrama-photos/isidro.png";
import operador3 from "../../assets/organigrama-photos/lidia.jpg";
import operador4 from "../../assets/organigrama-photos/richard.png";
import operador5 from "../../assets/organigrama-photos/alexandra.png";

// Cabecera y Gerente General
import headerImage from "../../assets/images/Fondo.png";
import logo from "../../assets/organigrama-photos/logo-zafranal.png";
import gerenteGeneral from "../../assets/organigrama-photos/Enrique Castro Gatica.jpeg";

// Logos finales
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";

const OrganigramaSecurity = () => {
  const operadores = [
    { foto: operador1, nombre: "Hans Aviles" },
    { foto: operador2, nombre: "Isidro Palma" },
    { foto: operador3, nombre: "Lidia Begazo" },
    { foto: operador4, nombre: "Richard Vaca" },
    { foto: operador5, nombre: "Alexandra Caceres" },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* ===================== CABECERA ===================== */}
      <div className="relative">
        <div className="w-full h-[280px] overflow-hidden">
          <img
            src={headerImage}
            alt="Header banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-blue-900 py-4 px-8 flex justify-between items-center shadow-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Security and Emergency Response
          </h1>
        </div>
      </div>

      {/* ===================== GERENTE GENERAL - FULL WIDTH ===================== */}
      <div className="w-full bg-white shadow-2xl py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Foto cuadrada (no circular) */}
          <img
            src={gerenteGeneral}
            alt="Enrique Castro Gatica"
            className="w-64 h-64 md:w-80 md:h-80 object-cover border-8 border-blue-800 shadow-2xl rounded-2xl"
          />

          {/* Texto */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Enrique Castro Gatica
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 mt-4">
              Gerente General Compañia Minera Zafranal
            </h3>
          </div>
        </div>
      </div>

      {/* ===================== ORGANIGRAMA (centrado) ===================== */}
      <div className="px-6 py-12">
        <div className="relative">
          {/* Michael Regalado */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-6 bg-blue-800 rounded-xl shadow-2xl p-6">
              <div className="text-white text-right">
                <h3 className="text-xl font-bold">
                  Security and Emergency Response Manager
                </h3>
                <p className="text-indigo-200 text-lg font-bold mt-1">
                  Michael Regalado Varea
                </p>
              </div>
              <img
                src={michael}
                alt="Michael Regalado Varea"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>

          <div className="flex justify-center mb-20">
            <div className="w-0.5 bg-indigo-600 h-32"></div>
          </div>

          {/* Antonio Arevalo */}
          <div className="flex flex-col items-center mb-32">
            <div className="flex items-center gap-6 bg-blue-800 rounded-xl shadow-2xl p-6">
              <div className="text-white text-right">
                <h3 className="text-xl font-bold">
                  Superintendent of Security and Emergency Response
                </h3>
                <p className="text-indigo-200 text-lg font-bold mt-1">
                  Antonio Arevalo Solsol
                </p>
              </div>
              <img
                src={antonioArevalo}
                alt="Antonio Arevalo"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Ramas */}
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
                    <h4 className="text-lg font-bold">Chief of Security</h4>
                    <p className="text-indigo-200 font-medium">
                      Johny Villacorta Vela
                    </p>
                  </div>
                  <img
                    src={johnyVillacorta}
                    alt="Johny"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                </div>

                <div className="w-0.5 bg-indigo-600 h-10"></div>

                <div className="flex items-center gap-4 bg-blue-800 rounded-xl shadow-2xl p-4">
                  <div className="text-white">
                    <h5 className="text-base font-bold">
                      Supervisor of Security
                    </h5>
                    <p className="text-indigo-200 text-sm">
                      Daniel Calle Pinto
                    </p>
                  </div>
                  <img
                    src={danielCalle}
                    alt="Daniel"
                    className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                  />
                </div>
              </div>

              {/* Rama Central */}
              <div className="flex flex-col items-center space-y-16">
                <br />
                <br />
                <br />
                <br />
                <div className="flex items-center gap-4 bg-blue-800 rounded-xl shadow-2xl p-5">
                  <div className="text-white">
                    <h4 className="text-lg font-bold">
                      Coordinator of OPA y SOC
                    </h4>
                    <p className="text-indigo-200 font-medium">
                      Alvaro Casani Paccori
                    </p>
                  </div>
                  <img
                    src={alvaroCasani}
                    alt="Alvaro"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                </div>

                <div className="w-0.5 bg-indigo-600 h-16"></div>

                <div className="bg-blue-800 rounded-xl shadow-2xl p-8 text-center">
                  <h5 className="text-2xl font-bold text-white mb-10">
                    Control Center Operators
                  </h5>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
                    {operadores.map((op, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <img
                          src={op.foto}
                          alt={op.nombre}
                          className="w-20 h-20 rounded-full border-4 border-white shadow-xl mb-3"
                        />
                        <p className="text-white font-medium text-sm">
                          {op.nombre}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rama Derecha */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-4 bg-blue-800 rounded-xl shadow-2xl p-5">
                  <div className="text-white">
                    <h4 className="text-lg font-bold">
                      Chief of Emergency Response
                    </h4>
                    <p className="text-indigo-200 font-medium">
                      Ricardo Freytas Peña
                    </p>
                  </div>
                  <img
                    src={ricardoFreytas}
                    alt="Ricardo"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Título centrado, sin límite de ancho */}

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
        Logos
      </h2>

      {/* ===================== OUR LOGOS - FULL WIDTH REAL ===================== */}
      <div className="w-full shadow-2xl py-8 md:py-12 bg-gray-400">
        <div className="px-6">
          {/* Los 3 logos centrados en fila */}
          <div className="flex justify-center items-center gap-12 md:gap-32 flex-wrap lg:flex-nowrap">
            <img
              src={logo1}
              alt="Security Logo"
              className="h-60 md:h-60 object-contain transition-transform duration-300 hover:scale-110"
            />
            <img
              src={logo2}
              alt="Emergency Response Logo"
              className="h-60 md:h-60 object-contain transition-transform duration-300 hover:scale-110"
            />
            <img
              src={logo3}
              alt="Control Center Logo"
              className="h-60 md:h-60 object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganigramaSecurity;
