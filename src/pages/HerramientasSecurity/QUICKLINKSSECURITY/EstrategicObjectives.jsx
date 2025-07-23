import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { FaChevronLeft, FaBullseye, FaShieldAlt, FaLock, FaChartLine, FaUsers } from 'react-icons/fa';

const EstrategicObjectives = () => {
    return (
        <div className="strategic-objectives-page">
            <Header />

            {/* Hero Section */}
            <section className="hero bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 text-center mb-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">OBJETIVOS ESTRATÉGICOS</h1>
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
                        El plan estratégico de Security es determinar objetivos que permitirán salvaguardar la información en sus pilares de confidencialidad, integridad y disponibilidad.
                    </p>
                </div>

                {/* Objetivos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Confidencialidad */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaLock className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaShieldAlt className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        CONFIDENCIALIDAD
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Garantizar que la información solo sea accesible para aquellos autorizados, protegiendo los datos sensibles de accesos no autorizados mediante controles de acceso y encriptación.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Protección de datos sensibles</li>
                                    <li>Controles de acceso estrictos</li>
                                    <li>Encriptación de información</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver métricas</Link>
                            </div>
                        </div>
                    </div>

                    {/* Integridad */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaChartLine className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaBullseye className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        INTEGRIDAD
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Asegurar que la información no sea alterada o destruida de manera no autorizada, manteniendo su exactitud y consistencia durante todo su ciclo de vida.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Protección contra modificaciones no autorizadas</li>
                                    <li>Mecanismos de verificación de datos</li>
                                    <li>Registro de cambios y auditoría</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver métricas</Link>
                            </div>
                        </div>
                    </div>

                    {/* Disponibilidad */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaUsers className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaShieldAlt className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        DISPONIBILIDAD
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Garantizar que los sistemas y la información estén accesibles y operativos cuando sean requeridos por los usuarios autorizados, mediante redundancia y planes de continuidad.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Acceso continuo a sistemas críticos</li>
                                    <li>Redundancia y backups</li>
                                    <li>Planes de recuperación ante desastres</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver métricas</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default EstrategicObjectives;