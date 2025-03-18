import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full flex justify-center py-4">
        <nav className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2.5 flex items-center justify-between max-w-3xl w-full mx-4 shadow-sm hover:shadow transition-all duration-300">
          <div className="flex items-center">
            <div className="font-space text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              <span className="text-xl font-bold tracking-tight">S</span>
              <span className="text-lg font-bold">hankar</span>
            </div>
          </div>

          {/* Mobile Menu Button with Animation */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none relative w-6 h-6"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`} />
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`} />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#home" className="text-sm text-gray-300 hover:text-white font-medium transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-300 hover:text-white font-medium transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-300 hover:text-white font-medium transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Menu Dropdown with Animation */}
        <div className={`absolute top-full left-0 right-0 mt-2 mx-4 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg">
            <ul className="py-2">
              <li>
                <a
                  href="#home"
                  className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar; 