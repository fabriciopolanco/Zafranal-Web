import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { 
  FaChevronLeft,
  FaFileAlt,
  FaUserLock,
  FaExclamationTriangle, // Usaremos este en lugar de FaEmergency
  FaChartBar, 
  FaClipboardCheck, 
  FaSearch, 
  FaShieldVirus,
  FaClipboardList
} from 'react-icons/fa';

const SecurityProcedures = () => {
    return (
        <div className="security-procedures-page">
            <Header />

            {/* Hero Section */}
            <section className="hero bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 text-center mb-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">PROCEDIMIENTOS DE SEGURIDAD</h1>
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
                        Documentación estandarizada que establece los pasos a seguir para garantizar la seguridad física y digital en la Unidad Minera Constancia.
                    </p>
                </div>

                {/* Categorías de Procedimientos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Procedimientos Generales */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaFileAlt className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaFileAlt className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        PROCEDIMIENTOS GENERALES
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Protocolos base que aplican a todas las áreas de la operación minera, estableciendo los estándares mínimos de seguridad.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Control de accesos</li>
                                    <li>Manejo de visitantes</li>
                                    <li>Protección perimetral</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver documentos</Link>
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Última actualización</Link>
                            </div>
                        </div>
                    </div>

                    {/* Seguridad de Personal */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaUserLock className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaUserLock className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        SEGURIDAD DE PERSONAL
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Protocolos específicos para garantizar la integridad física y seguridad del personal en todas las áreas de operación.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Procedimientos de evacuación</li>
                                    <li>Seguridad en áreas críticas</li>
                                    <li>Protección contra violencia</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Protocolos</Link>
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Capacitaciones</Link>
                            </div>
                        </div>
                    </div>

                    {/* Emergencias */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <div className="w-full h-full flex items-center justify-center">
                                <FaExclamationTriangle className="text-white opacity-20 text-9xl transition-all duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <div className="flex items-center mb-4">
                                    <FaExclamationTriangle className="text-blue-300 mr-3 text-2xl" />
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                        EMERGENCIAS
                                    </h2>
                                </div>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Planes de acción para situaciones críticas que puedan afectar la seguridad de las instalaciones o del personal.
                                </p>
                                <ul className="text-blue-200 text-sm list-disc pl-5 space-y-1">
                                    <li>Incidentes de seguridad</li>
                                    <li>Desastres naturales</li>
                                    <li>Contingencias operacionales</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Planes</Link>
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Simulacros</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección de Implementación */}
                <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                        <FaClipboardList className="mr-3 text-blue-600" />
                        IMPLEMENTACIÓN DE PROCEDIMIENTOS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                            <h3 className="font-bold mb-3 text-blue-800">1. Documentación</h3>
                            <p className="text-blue-700 text-sm">Todos los procedimientos están documentados y disponibles para el personal autorizado.</p>
                        </div>
                        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                            <h3 className="font-bold mb-3 text-blue-800">2. Capacitación</h3>
                            <p className="text-blue-700 text-sm">Programas de entrenamiento periódicos para garantizar el conocimiento de los protocolos.</p>
                        </div>
                        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                            <h3 className="font-bold mb-3 text-blue-800">3. Actualización</h3>
                            <p className="text-blue-700 text-sm">Revisión anual de todos los procedimientos para incorporar mejoras y lecciones aprendidas.</p>
                        </div>
                    </div>
                    <div className="mt-8 bg-blue-100 rounded-lg p-5 border border-blue-200">
                        <p className="text-blue-800">
                            <strong>Nota:</strong> Todos los empleados son responsables de conocer y aplicar los procedimientos de seguridad correspondientes a sus áreas de trabajo.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SecurityProcedures;