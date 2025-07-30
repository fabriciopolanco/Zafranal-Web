import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { FaChevronLeft, FaShieldAlt, FaUserShield, FaLightbulb, FaChartPie, FaBook } from 'react-icons/fa';

const SecurityAwareness = () => {
    return (
        <div className="security-awareness-page">
            <Header />

            {/* Hero Section */}
            <section className="hero bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 text-center mb-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">CONCIENTIZACIÓN EN SEGURIDAD</h1>
                    <Link
                        to="/HERRAMIENTASSECURITY"
                        className="inline-flex items-center text-blue-200 hover:text-white transition-colors"
                    >
                        <FaChevronLeft className="mr-2" />
                        Volver a Herramientas Security
                    </Link>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 mb-16">
                {/* Introducción */}
                <div className="bg-blue-50 rounded-lg p-6 mb-10 shadow-md">
                    <p className="text-blue-900 text-lg leading-relaxed">
                        Programas y actividades diseñados para educar a los empleados sobre las mejores prácticas de seguridad y cómo proteger los activos de información de la organización.
                    </p>
                </div>

                {/* Programas de Concientización */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Capacitaciones */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaBook className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaUserShield className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        CAPACITACIONES
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Sesiones de entrenamiento periódicas para todos los colaboradores, enfocadas en políticas de seguridad, manejo de información y prevención de riesgos.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Programas de inducción para nuevos empleados</li>
                                    <li>Actualizaciones trimestrales</li>
                                    <li>Talleres prácticos</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver calendario</Link>
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Materiales</Link>
                            </div>
                        </div>
                    </div>

                    {/* Campañas */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaLightbulb className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaShieldAlt className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        CAMPAÑAS
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Iniciativas temáticas mensuales para reforzar aspectos específicos de seguridad, con materiales visuales, concursos y recordatorios constantes.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Phishing y seguridad de correo</li>
                                    <li>Protección de contraseñas</li>
                                    <li>Seguridad física y de dispositivos</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Campañas actuales</Link>
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Archivo</Link>
                            </div>
                        </div>
                    </div>

                    {/* Métricas */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaChartPie className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaShieldAlt className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        MÉTRICAS
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Seguimiento y evaluación del impacto de los programas de concientización, con indicadores clave de desempeño y mejora continua.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Tasas de participación</li>
                                    <li>Resultados de simulacros de phishing</li>
                                    <li>Encuestas de satisfacción</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver reportes</Link>
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Dashboard</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SecurityAwareness;