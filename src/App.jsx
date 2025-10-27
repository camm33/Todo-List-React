import React from 'react';
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
        <section className="py-20 bg-gradient-to-r from-orange-100 to-orange-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                SENA
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Centro de Gestión de Mercados, Logística y Tecnologías
              </p>
              <div className="relative">
                <img 
                  src="/api/placeholder/800/300" 
                  alt="SENA Building" 
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                />
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