import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="w-full flex items-center justify-center py-4">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" className="w-60 mb-4"/>
      </header>

      {/* Search Bar */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-xl">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite alguma coisa"
          />
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600">Pesquisa Google</button>
          <button className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg shadow-md hover:bg-gray-300">Estou me sentindo com sorte</button>
        </div>
      </div>

      {/* Additional Links */}
      <div className="mt-8 text-gray-600">
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Sobre</a>
          <a href="#" className="hover:underline">Anúncio</a>
          <a href="#" className="hover:underline">Negócios</a>
          <a href="#" className="hover:underline">Como funciona a pesquisa</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-12 text-gray-600">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:underline">Privacidade</a>
            <a href="#" className="hover:underline">Termos</a>
            <a href="#" className="hover:underline">Configurações</a>
          </div>
          <p className="text-sm">© 2024 Google</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
