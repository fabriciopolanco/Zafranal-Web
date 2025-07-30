import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { FaChevronLeft, FaExclamationTriangle, FaChartBar, FaClipboardCheck, FaSearch, FaShieldVirus } from 'react-icons/fa';

const RiskAssessment = () => {
    return (
        <div className="risk-assessment-page">
            <Header />

            {/* Hero Section */}
            <section className="hero bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 text-center mb-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">EVALUACIÓN DE RIESGOS</h1>
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
                        Proceso sistemático para identificar, analizar y evaluar riesgos potenciales que puedan afectar los activos de información, operaciones o personal de la Unidad Minera Constancia.
                    </p>
                </div>

                {/* Procesos de Evaluación */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Identificación */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaSearch className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaExclamationTriangle className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        IDENTIFICACIÓN
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Detección sistemática de amenazas potenciales, vulnerabilidades y activos críticos que requieren protección.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Inventario de activos críticos</li>
                                    <li>Mapeo de amenazas internas/externas</li>
                                    <li>Análisis de vulnerabilidades</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Herramientas</Link>
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Guías</Link>
                            </div>
                        </div>
                    </div>

                    {/* Análisis */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaChartBar className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaShieldVirus className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        ANÁLISIS
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Evaluación cuantitativa y cualitativa de riesgos identificados, considerando probabilidad e impacto potencial.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Matriz de probabilidad/impacto</li>
                                    <li>Escenarios de riesgo</li>
                                    <li>Evaluación de controles existentes</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Matrices</Link>
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Métricas</Link>
                            </div>
                        </div>
                    </div>

                    {/* Mitigación */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaClipboardCheck className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaShieldVirus className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        MITIGACIÓN
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Desarrollo e implementación de controles y estrategias para reducir riesgos a niveles aceptables.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Plan de tratamiento de riesgos</li>
                                    <li>Asignación de responsables</li>
                                    <li>Seguimiento de implementación</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Planes</Link>
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Seguimiento</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección adicional */}
                <div className="mt-12 bg-blue-800 rounded-xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <FaExclamationTriangle className="mr-3 text-yellow-300" />
                        PROCESO INTEGRAL DE GESTIÓN DE RIESGOS
                    </h2>
                    <p className="mb-6">
                        Nuestro enfoque sigue los estándares internacionales ISO 31000 para garantizar una evaluación sistemática y continua de riesgos en todas las operaciones.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                            <h3 className="font-bold mb-2">1. Establecimiento del contexto</h3>
                            <p className="text-blue-100 text-sm">Definición de alcance, criterios y marco organizacional.</p>
                        </div>
                        <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                            <h3 className="font-bold mb-2">2. Evaluación de riesgos</h3>
                            <p className="text-blue-100 text-sm">Identificación, análisis y valoración de riesgos.</p>
                        </div>
                        <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                            <h3 className="font-bold mb-2">3. Tratamiento y monitoreo</h3>
                            <p className="text-blue-100 text-sm">Implementación de controles y revisión continua.</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RiskAssessment;