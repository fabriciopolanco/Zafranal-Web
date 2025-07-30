import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { FaChevronLeft, FaShieldAlt, FaUserShield, FaLightbulb, FaHandsHelping } from 'react-icons/fa';

const VoluntaryPrinciples = () => {
    return (
        <div className="voluntary-principles-page">
            <Header />

            {/* Hero Section */}
            <section className="hero bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 text-center mb-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Principios Voluntarios de Seguridad y Derechos Humanos</h1>
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
                        La concientización de security se trata esencialmente de la actitud que se tiene hacia la seguridad, 
                        de crear conciencia sobre el tema. Es un proceso continuo que comienza con la capacitación de los empleados 
                        en principios básicos de seguridad.
                    </p>
                </div>

                {/* Principios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Cultura de Seguridad */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaShieldAlt className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaShieldAlt className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        CULTURA DE SEGURIDAD
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Fomentar una cultura organizacional donde la seguridad sea un valor fundamental y responsabilidad de todos.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Compromiso desde la alta dirección</li>
                                    <li>Participación activa de todos los niveles</li>
                                    <li>Reconocimiento de buenas prácticas</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver iniciativas</Link>
                            </div>
                        </div>
                    </div>

                    {/* Capacitación Continua */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaLightbulb className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaLightbulb className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        CAPACITACIÓN CONTINUA
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Programas de formación periódicos para mantener actualizados a todos los colaboradores en principios de seguridad.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Sesiones teóricas y prácticas</li>
                                    <li>Contenido adaptado a cada área</li>
                                    <li>Evaluaciones periódicas</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver calendario</Link>
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Materiales</Link>
                            </div>
                        </div>
                    </div>

                    {/* Participación Activa */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaHandsHelping className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaUserShield className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        PARTICIPACIÓN ACTIVA
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Involucrar a todos los colaboradores en la identificación de riesgos y mejora continua de los procesos de seguridad.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Canales de reporte accesibles</li>
                                    <li>Programas de sugerencias</li>
                                    <li>Comités de seguridad</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Participar</Link>
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Reportar</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección adicional */}
                <div className="mt-12 bg-blue-800 rounded-xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <FaShieldAlt className="mr-3 text-yellow-300" />
                        IMPLEMENTACIÓN DE LOS PRINCIPIOS
                    </h2>
                    <p className="mb-6">
                        Nuestro enfoque se basa en los Principios Voluntarios de Seguridad, adaptados al contexto minero industrial:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                            <h3 className="font-bold mb-2">1. Sensibilización</h3>
                            <p className="text-blue-100 text-sm">Campañas continuas para mantener la seguridad como prioridad.</p>
                        </div>
                        <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                            <h3 className="font-bold mb-2">2. Formación práctica</h3>
                            <p className="text-blue-100 text-sm">Ejercicios y simulacros para aplicar los conocimientos.</p>
                        </div>
                        <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                            <h3 className="font-bold mb-2">3. Mejora continua</h3>
                            <p className="text-blue-100 text-sm">Evaluación y actualización constante de los programas.</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default VoluntaryPrinciples;