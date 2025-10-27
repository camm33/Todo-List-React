import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-orange-500">SENA</div>
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-orange-500">Inicio</a>
              <a href="#" className="text-gray-600 hover:text-orange-500">Propuestas</a>
              <a href="#" className="text-gray-600 hover:text-orange-500">Acerca</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20" style={{backgroundColor: '#5CB85C'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <h1 className="text-6xl font-bold text-white mb-4">SENA</h1>
              <p className="text-white text-lg mb-4">Centro de Gestión de Mercados, Logística y Tecnologías</p>
              <p className="text-white mb-6">Formando profesionales competentes para el desarrollo del país</p>
              <button className="bg-white text-green-600 px-6 py-2 rounded font-semibold">
                Conoce más
              </button>
            </div>
            
            {/* Right side - Card */}
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Educación de Calidad</h3>
                  <p className="text-gray-600 text-sm">Para el futuro de Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Programas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* ADSO */}
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">ADSO</h3>
              <p className="text-gray-600 text-sm">Análisis y Desarrollo de Software</p>
            </div>

            {/* Redes */}
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Redes</h3>
              <p className="text-gray-600 text-sm">Infraestructura y conectividad</p>
            </div>

            {/* Inglés */}
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Inglés</h3>
              <p className="text-gray-600 text-sm">Aprendizaje de idioma global</p>
            </div>

            {/* Multimedia */}
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Multimedia</h3>
              <p className="text-gray-600 text-sm">Diseño y producción digital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Contáctanos</h2>
          
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-3 rounded border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="email"
                placeholder="Correo"
                className="w-full px-4 py-3 rounded border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <textarea
                placeholder="Mensaje"
                rows="4"
                className="w-full px-4 py-3 rounded border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 font-semibold py-3 rounded hover:bg-gray-100 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 SENA - Centro de Gestión de Mercados, Logística y Tecnologías</p>
        </div>
      </footer>
    </div>
  );
}