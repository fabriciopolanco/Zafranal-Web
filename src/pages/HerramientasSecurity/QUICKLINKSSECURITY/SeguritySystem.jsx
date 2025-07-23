import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { FaChartLine, FaChevronLeft } from 'react-icons/fa';
const SecuritySystem = () => {
    return (
        <div className="security-system-page">
            <Header />

            {/* Hero Section */}
            <section className="hero bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 text-center mb-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">SECURITY SYSTEMS</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Sistemas integrados de seguridad para la Unidad Minera Constancia
                    </p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* CCTV System Card */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <img
                                src="/src/assets/images/cctv-system.jpg"
                                alt="CCTV System"
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-500"
                            />
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                    CCTV SYSTEM
                                </h2>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    El sistema de CCTV es operado por centro de control, supervisadas por profesionales que permiten una reacción rápida, incluso en tiempo real, ante una intrusión o cualquier otro hecho que comprometa la seguridad o el normal funcionamiento de la Unidad Minera Constancia.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver mas</Link>
                            </div>
                        </div>
                    </div>

                    {/* GPS Monitoring Card */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <img
                                src="/src/assets/images/gps-monitoring.jpg"
                                alt="GPS Monitoring"
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-500"
                            />
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                    GPS MONITORING
                                </h2>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    El sistema de monitoreo GPS, es el método por el cual se realiza una análisis para conocer la ubicación al detalle y en tiempo real de los encapsulados y unidades que transitan en la UMC.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver mas</Link>
                            </div>
                        </div>
                    </div>

                    {/* Electric Storms Card */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <img
                                src="/src/assets/images/electric-storms.jpg"
                                alt="Electric Storms"
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-500"
                            />
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                    ELECTRIC STORMS - KERASUNOS
                                </h2>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Kerasunos es un sistema que monitorea a tiempo real de la actividad de rayos alrededor de la Unidad minera constancia. Esta plataforma entrega información completa y detallada de los riesgos por rayos y otras amenazas que puedan afectar la operación.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver mas</Link>
                            </div>
                        </div>
                    </div>
                    {/* RPA Flight Hours */}
                    <div className="card-container group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                        <div className="card-image absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden transition-all duration-500 group-hover:opacity-90">
                            <img
                                src="/src/assets/images/electric-storms.jpg"
                                alt="Electric Storms"
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-500"
                            />
                        </div>
                        <div className="card-content absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                                    RPA Flight Hours
                                </h2>
                                <p className="text-blue-100 leading-relaxed mb-4">
                                    Vuelos de Drone pueden tener diversos propósitos, como la vigilancia, la inspección de instalaciones, la supervisión de actividades y otras aplicaciones específicas relacionadas con la gestión y operación de la unidad minera Constancia. </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="cta-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">Ver mas</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SecuritySystem;
