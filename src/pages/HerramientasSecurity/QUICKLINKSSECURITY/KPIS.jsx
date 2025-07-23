import React from 'react';
import { FaChartLine, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
const KPIS = () => {
    return (
        <div className="kpis-page bg-gray-50 min-h-screen">
             <Header />
            <section className="hero bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 text-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">KPI'S </h1>
                        <h2 className="text-xl md:text-2xl font-semibold mb-6">KEY PERFORMANCE INDICATOR SECURITY</h2>
                        <Link 
                            to="/HERRAMIENTASSECURITY" 
                            className="inline-flex items-center text-blue-200 hover:text-white transition-colors"
                        >
                            <FaChevronLeft className="mr-2" />
                            Volver a Herramientas Security
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="bg-blue-700 text-white px-6 py-4">
                        <div className="flex items-center gap-4">
                            <FaChartLine className="text-2xl" />
                            <h2 className="text-xl font-bold">KPI' Security</h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                        <div className="prose max-w-none">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Los KPI's son métricas utilizadas para cuantificar objetivos que van reflejar 
                                en el rendimiento del área security.
                            </p>

                            {/* Aquí puedes agregar más contenido como gráficos o tablas */}
                            <div className="bg-gray-100 rounded-lg p-6 mt-8 border border-gray-200">
                                <h3 className="text-xl font-semibold text-blue-800 mb-4">Métricas principales</h3>
                                <p className="text-gray-600">
                                    (Contenido de métricas y gráficos puede ir aquí)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default KPIS;