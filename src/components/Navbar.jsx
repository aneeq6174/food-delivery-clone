import React, { useState } from 'react';
import logo from '../assets/logo-1.png';
import Modal from './Modal'; // Import the Modal component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <nav className="bg-white shadow-lg p-4 w-full z-50 px-4 sm:px-20 fixed">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2 w-auto rounded-md" />
          <div className="text-pinkPanda text-2xl font-bold">foodpanda</div>
        </div>

        {/* Location Section */}
        <div className="locationArea text-gray-700 hidden sm:flex items-center justify-center">
          <i className="fa-solid fa-location-dot text-xl mr-2"></i>
          <p className="text-gray-700">Location Lahore</p>
        </div>

        {/* Buttons Section */}
        {!isModalOpen && ( // Conditionally render buttons only if modal is not open
          <div className="hidden text-gray-700 sm:flex space-x-4">
            <button
              onClick={() => handleOpenModal('Login')}
              className="transition-all duration-200 hover:bg-gray-200 hover:text-black border-2 border-gray-700 px-4 py-1 rounded hover:scale-105"
            >
              Login
            </button>
            <button
              onClick={() => handleOpenModal('Sign-Up')}
              className="transition-all duration-200 hover:bg-pink-700 bg-pinkPanda text-white px-4 py-1 rounded hover:scale-105"
            >
              Sign-Up
            </button>
            <a href="#" className="text-gray-700 hover:text-pinkPanda transition-all duration-200">
              <i className="fa-solid fa-cart-shopping text-lg"></i>
            </a>
          </div>
        )}

        {/* Menu Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden block text-gray-800 text-2xl focus:outline-none"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            isMenuOpen ? 'max-h-60' : 'max-h-0'
          } w-full sm:hidden text-center mt-2 overflow-hidden transition-all duration-500 ease-in-out space-y-2`}
        >
          <div className="flex items-center justify-center">
            <i className="fa-solid fa-location-dot text-xl mr-2"></i>
            <p className="text-gray-800">Location Lahore</p>
          </div>
          {!isModalOpen && ( // Conditionally render mobile buttons only if modal is not open
            <>
              <button
                onClick={() => handleOpenModal('Login')}
                className="transition-all duration-200 hover:bg-gray-200 hover:text-black border-2 border-black px-4 py-1 rounded w-full hover:scale-105"
              >
                Login
              </button>
              <button
                onClick={() => handleOpenModal('Sign-Up')}
                className="transition-all duration-200 hover:bg-pink-700 bg-pinkPanda text-white px-4 py-1 rounded w-full hover:scale-105"
              >
                Sign-Up
              </button>
              <i className="fa-solid fa-cart-shopping text-lg"></i>
            </>
          )}
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />
    </nav>
  );
};

export default Navbar;
