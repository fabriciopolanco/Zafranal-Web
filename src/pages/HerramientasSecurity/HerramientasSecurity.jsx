import React, { useState, useEffect } from 'react';
import {
    FaChevronDown, FaArrowRight, FaUsers, FaChartLine, FaShieldAlt,
    FaFileInvoiceDollar, FaBullseye, FaLightbulb,
    FaExclamationTriangle, FaClipboardList, FaHandshake,
    FaDatabase, FaSearch
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HerramientasSecurity = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // Efecto para manejar el scroll al cargar la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (


        <div className="herramientas-security-page">
            <Header />
            {/* Hero Section */}
            <section className="hero bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 text-center mb-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">HERRAMIENTAS DIGITALES SECURITY</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Sistema integrado para la gestión de seguridad en la Unidad Minera ZAFRANAL/TECK
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4">
                {/* Quick Links Section */}
                <section className="quick-links-section mb-16">
                    <h2 className="section-title text-3xl font-bold text-center mb-10 relative pb-4 text-gray-800">
                        QUICK LINKS SECURITY
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                        {/* Headcount */}
                        <Link to="#" className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600">
                            <FaUsers className="text-blue-500 text-4xl mb-5" />
                            <h3 className="text-lg font-semibold">Headcount</h3>
                        </Link>

                        {/* KPI's */}
                        <Link to="/KPIS" className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600">
                            <FaChartLine className="text-blue-500 text-4xl mb-5" />
                            <h3 className="text-lg font-semibold">KPI's</h3>
                        </Link>

                        {/* Security Systems */}
                        <Link to="/SeguritySystem" className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600">
                            <FaShieldAlt className="text-blue-500 text-4xl mb-5" />
                            <h3 className="text-lg font-semibold">Security Systems</h3>
                        </Link>

                        {/* Budget & Contracts */}
                        <Link to="/Budget&Contratc" className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600">
                            <FaFileInvoiceDollar className="text-blue-500 text-4xl mb-5" />
                            <h3 className="text-lg font-semibold">Budget & Contracts</h3>
                        </Link>

                        {/* Estrategic Objectives */}
                        <Link to="/EstrategicObjectives" className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600">
                            <FaBullseye className="text-blue-500 text-4xl mb-5" />
                            <h3 className="text-lg font-semibold">Estrategic Objectives</h3>
                        </Link>

                        {/* Security Awareness */}
                        <Link to="/SecurityAwareness" className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600">
                            <FaLightbulb className="text-blue-500 text-4xl mb-5" />
                            <h3 className="text-lg font-semibold">Security Awareness</h3>
                        </Link>

                        {/* Risk Assessment */}
                        <Link to="/RiskAssessment" className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600">
                            <FaExclamationTriangle className="text-blue-500 text-4xl mb-5" />
                            <h3 className="text-lg font-semibold">Risk Assessment</h3>
                        </Link>

                        {/* Security Procedures */}
                        <Link to="/SecurityProcedures" className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600">
                            <FaClipboardList className="text-blue-500 text-4xl mb-5" />
                            <h3 className="text-lg font-semibold">Security Procedures</h3>
                        </Link>

                        {/* Voluntary Principles */}
                        <Link to="/VoluntaryPrinciples" className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600">
                            <FaHandshake className="text-blue-500 text-4xl mb-5" />
                            <h3 className="text-lg font-semibold text-center">Voluntary Principles on Security and Human Rights</h3>
                        </Link>

                        {/* Information System */}
                        <Link to="/InformationS" className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600">
                            <FaDatabase className="text-blue-500 text-4xl mb-5" />
                            <h3 className="text-lg font-semibold">Information System</h3>
                        </Link>

                        {/* Investigations */}
                        <Link to="#" className="quick-link-card bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-gray-800 hover:text-red-600">
                            <FaSearch className="text-blue-500 text-4xl mb-5" />
                            <h3 className="text-lg font-semibold">Investigations</h3>
                        </Link>
                    </div>
                </section>

                {/* Antares Rounds System Section */}
                <section className="antares-section bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl shadow-2xl overflow-hidden mb-16 border border-blue-700 transform transition-all hover:scale-[1.005] hover:shadow-lg">
                    <div className="antares-header bg-blue-950/80 text-white px-8 py-6 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                ANTARES ROUNDS SYSTEM
                            </h2>
                        </div>
                    </div>
                    <div className="antares-content p-8 bg-white/5 backdrop-blur-sm">
                        <div className="tab-content">
                            <p className="mb-6 text-blue-100 leading-relaxed text-lg">
                                El control rondas es un sistema especialmente diseñado para gestionar e inspeccionar los
                                puntos claves de las instalaciones de la UMC, el cual permite detectar cualquier incidente o
                                brecha de seguridad y poder así actuar de manera inmediata.
                            </p>
                            <Link
                                to="#"
                                className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                <span>Reporting Rounds</span>
                                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Security Reports Section */}
                <section className="antares-section bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl shadow-2xl overflow-hidden mb-16 border border-blue-700 transform transition-all hover:scale-[1.005] hover:shadow-lg">
                    <div className="antares-header bg-blue-950/80 text-white px-8 py-6 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                SECURITY REPORTS
                            </h2>
                        </div>
                    </div>
                    <div className="antares-content p-8 bg-white/5 backdrop-blur-sm">
                        <div className="tab-content">
                            <p className="mb-6 text-blue-100 leading-relaxed text-lg">
                                El reporte tiene como finalidad comunicar e informar de situaciones que se hayan podido dar.
                                Recopilan datos que te ayudan a diseñar mejores estrategias y programas de medidas
                                preventivas en cualquier eventualidad dentro de la Unidad Minera Constancia.
                            </p>
                            <Link
                                to="#"
                                className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
                            >
                                <span>Report Information</span>
                                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HerramientasSecurity;