import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-orange-600">SENA</div>
          </div>
          
          {/* Navigation */}
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Propuestas</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Acerca</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;