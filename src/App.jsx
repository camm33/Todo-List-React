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
        <section className="relative py-20" style={{backgroundColor: '#5CB85C'}}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                SENA
              </h1>
              <p className="text-xl text-white mb-8">
                Centro de Gestión de Mercados, Logística y Tecnologías
              </p>
              <p className="text-lg text-white mb-8">
                Formando profesionales competentes para el desarrollo del país
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Conoce más
              </button>
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