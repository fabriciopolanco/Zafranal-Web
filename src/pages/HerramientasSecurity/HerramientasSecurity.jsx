import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaArrowRight,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaBullseye,
  FaLightbulb,
  FaExclamationTriangle,
  FaClipboardList,
  FaHandshake,
  FaDatabase,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaHardHat } from "react-icons/fa";

const HerramientasSecurity = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Efecto para manejar el scroll al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const securitySystems = [
    {
      title: "Antares Rounds Management System",
      description:
        "Un sistema digital de gestión de patrullaje e inspección diseñado para monitorear puntos de control de seguridad críticos en todo el Proyecto Zafranal, lo que permite la detección temprana de incidentes y una respuesta inmediata.",
      link: "https://make.powerapps.com/e/Default-ce6ec000-1cfa-49c2-a24f-7db63c8a9a52/canvas/?action=edit&app-id=%2Fproviders%2FMicrosoft.PowerApps%2Fapps%2F91d147e0-e3de-42a2-849c-d87976bf006e&utm_source=PAMarketing&utm_medium=header&utm_campaign=signin",
      icon: <FaShieldAlt />,
    },
    {
      title: "Emergency Panic Button System",
      description:
        "Un sistema de alerta de emergencia en tiempo real que permite al personal notificar instantáneamente al Centro de Control de Seguridad en situaciones críticas, lo que permite una respuesta y escalada rápidas.",
      link: "https://make.powerapps.com/e/Default-ce6ec000-1cfa-49c2-a24f-7db63c8a9a52/canvas/?action=edit&app-id=%2Fproviders%2FMicrosoft.PowerApps%2Fapps%2F91d147e0-e3de-42a2-849c-d87976bf006e&utm_source=PAMarketing&utm_medium=header&utm_campaign=signin",
      icon: <FaExclamationTriangle />,
    },
    {
      title: "Alcohol Testing Management System",
      description:
        "Un sistema centralizado para gestionar los procesos de pruebas de alcohol, seguimiento de resultados, verificación de cumplimiento y auditabilidad para garantizar la seguridad de la fuerza laboral y el cumplimiento normativo.",
      link: "https://app.powerbi.com/reportEmbed?reportId=c9c37684-ca46-406b-b3e4-35d4d95b92ab&autoAuth=true&ctid=ce6ec000-1cfa-49c2-a24f-7db63c8a9a52",
      icon: <FaClipboardList />,
    },
    {
      title: "Vehicle Movement & Linear Traffic Control System",
      description:
        "Una plataforma de monitoreo y control del movimiento de vehículos y tráfico lineal dentro de la operación, diseñada para mejorar la seguridad vial, la eficiencia operativa y la prevención de incidentes.",
      link: "https://app.powerbi.com/reportEmbed?reportId=caa5e7e6-7d2d-42a3-938c-80e598962f92&autoAuth=true&ctid=ce6ec000-1cfa-49c2-a24f-7db63c8a9a52",
      icon: <FaChartLine />,
    },
    {
      title: "Unsafe Conditions Reporting System",
      description:
        "Un sistema digital para el registro, seguimiento y gestión de condiciones inseguras identificadas dentro del Proyecto Zafranal, que permite la notificación oportuna, evaluación de riesgos, asignación de acciones correctivas y trazabilidad hasta su cierre, fortaleciendo la prevención de incidentes y la cultura de seguridad.",
      link: "https://app.powerbi.com/reportEmbed?reportId=2c5a375c-45c8-4168-94c2-c0f19227a082&autoAuth=true&ctid=ce6ec000-1cfa-49c2-a24f-7db63c8a9a52",
      icon: <FaHardHat />,
    },
  ];

  return (
    <div className="herramientas-security-page">
      <Header />
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 text-center mb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            TOOLS DIGITAL SECURITY AND EMERGENCY RESPONSE
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Quick Links Section */}
        <section className="quick-links-section mb-16">
          <h2 className="section-title text-3xl font-bold text-center mb-10 relative pb-4 text-gray-800">
            QUICK LINKS PROCESSES
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {/* KPI's */}
            <a
              href="https://app.powerbi.com/reportEmbed?reportId=973ee36b-74be-491b-bb35-233c2d684661&autoAuth=true&ctid=ce6ec000-1cfa-49c2-a24f-7db63c8a9a52"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600"
            >
              <FaChartLine className="text-blue-500 text-4xl mb-5" />
              <h3 className="text-lg font-semibold">KPI's</h3>
            </a>

            {/* Security Systems */}
            <a
              href="https://app.powerbi.com/reportEmbed?reportId=f02ba3aa-9f48-4eae-a89e-73c344804631&autoAuth=true&ctid=ce6ec000-1cfa-49c2-a24f-7db63c8a9a52"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600"
            >
              <FaShieldAlt className="text-blue-500 text-4xl mb-5" />
              <h3 className="text-lg font-semibold">Systems</h3>
            </a>

            {/* Estrategic Objectives */}
            <a
              href="https://lookerstudio.google.com/u/4/reporting/e7a89280-7825-4e4b-9cd0-75031acabdc4/page/p_jj90ukcvpd"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600"
            >
              <FaBullseye className="text-blue-500 text-4xl mb-5" />
              <h3 className="text-lg font-semibold">Estrategic Objectives</h3>
            </a>

            {/* Security Procedures */}
            <a
              href="https://app.powerbi.com/reportEmbed?reportId=b9f3bbe8-dd0c-4f20-a661-12b0906b38b8&autoAuth=true&ctid=ce6ec000-1cfa-49c2-a24f-7db63c8a9a52"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600"
            >
              <FaClipboardList className="text-blue-500 text-4xl mb-5" />
              <h3 className="text-lg font-semibold">Library</h3>
            </a>

            {/* Voluntary Principles */}
            <Link
              to="/VoluntaryPrinciples"
              className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600"
            >
              <FaHandshake className="text-blue-500 text-4xl mb-5" />
              <h3 className="text-lg font-semibold text-center">
                Voluntary Principles on Security and Human Rights
              </h3>
            </Link>
            {/* Headcount */}
            <a
              href="https://app.powerbi.com/reportEmbed?reportId=21c29bfc-eea7-4f62-9723-64bce519b535&autoAuth=true&ctid=ce6ec000-1cfa-49c2-a24f-7db63c8a9a52"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600"
            >
              <FaUsers className="text-blue-500 text-4xl mb-5" />
              <h3 className="text-lg font-semibold">Headcount</h3>
            </a>

            {/* Budget & Contracts */}
            <a
              href="https://app.powerbi.com/reportEmbed?reportId=2520f01e-7bd6-4727-95e4-b2e49ddb49a0&autoAuth=true&ctid=ce6ec000-1cfa-49c2-a24f-7db63c8a9a52"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600"
            >
              <FaFileInvoiceDollar className="text-blue-500 text-4xl mb-5" />
              <h3 className="text-lg font-semibold">Budget & Contracts</h3>
            </a>

            {/* Security Awareness */}
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiMGE4M2M2MzgtODBhZS00MjgwLTkzMzktMWQwNzg1ZDM1NGQ3IiwidCI6IjgwOTIzNmIxLTgwMTYtNDNlNC1hNWFkLWI2OTE4NjdkMmUxNCIsImMiOjR9"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600"
            >
              <FaLightbulb className="text-blue-500 text-4xl mb-5" />
              <h3 className="text-lg font-semibold">Awareness</h3>
            </a>

            {/* Risk Assessment */}
            <Link
              to="/RiskAssessment"
              className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600"
            >
              <FaExclamationTriangle className="text-blue-500 text-4xl mb-5" />
              <h3 className="text-lg font-semibold">Risk Assessment</h3>
            </Link>
            {/* Information System */}
            <Link
              to="/InformationS"
              className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600"
            >
              <FaDatabase className="text-blue-500 text-4xl mb-5" />
              <h3 className="text-lg font-semibold">Information System</h3>
            </Link>

            {/* Investigations */}
            <Link
              to="#"
              className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600"
            >
              <FaSearch className="text-blue-500 text-4xl mb-5" />
              <h3 className="text-lg font-semibold">Investigations</h3>
            </Link>
          </div>
        </section>

        {/* Antares Rounds System Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            CORE SECURITY SYSTEMS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securitySystems.map((system, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-lg border border-blue-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-center gap-4 px-8 py-6 bg-blue-950/60 backdrop-blur-sm">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500 text-white text-2xl">
                    {system.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {system.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-8 bg-white">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {system.description}
                  </p>

                  <a
                    href={system.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
                  >
                    <span>Access System</span>
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HerramientasSecurity;
