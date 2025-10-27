import React from 'react';
import './App.css';
import Header from './components/Header';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden" style={{backgroundColor: '#5CB85C'}}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px]">
              <div className="text-left">
                <h1 className="text-6xl font-bold text-white mb-4 leading-tight">
                  SENA
                </h1>
                <p className="text-lg text-white mb-4">
                  Centro de Gestión de Mercados, Logística y Tecnologías
                </p>
                <p className="text-base text-white mb-6">
                  Formando profesionales competentes para el desarrollo del país
                </p>
                <button className="bg-white text-green-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm">
                  Conoce más
                </button>
              </div>
              <div className="flex justify-center items-center">
                <div className="bg-white rounded-lg p-8 shadow-lg max-w-sm w-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Educación de Calidad</h3>
                    <p className="text-gray-600 text-sm">Para el futuro de Colombia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}