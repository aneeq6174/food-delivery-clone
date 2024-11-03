import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    // Close the modal when clicking outside the content area
    const handleClickOutside = (event) => {
        if (event.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };

    // Close the modal when pressing the ESC key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <>
            {/* Overlay for fading the background except for navbar */}
            <div className="fixed inset-0 top-[64px] bg-gray-800 bg-opacity-50 z-40"></div>

            {/* Modal Content */}
            <div
                className="modal-overlay fixed inset-0 flex justify-center items-center z-50"
                onClick={handleClickOutside}
            >
                <div className="bg-white w-10/12 max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg overflow-hidden relative">
                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl">
                        &times;
                    </button>

                    {/* Header Section */}
                    <div className="px-6 py-4 border-b text-center">
                        <h1 className="text-2xl font-semibold text-gray-800">{title || "Welcome"}</h1>
                        <p className="text-gray-600">Sign up or log in to continue</p>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                        {children}
                        <button className="flex items-center w-full bg-blue-600 text-white font-medium p-3 rounded-md hover:bg-blue-700 transition">
                            <i className="fa-brands fa-facebook mr-3 text-lg"></i>
                            <span className="flex-1 text-center">Continue with Facebook</span>
                        </button>
                        <button className="flex items-center w-full border-2 border-gray-300 text-gray-700 font-medium p-3 rounded-md hover:bg-gray-100 transition">
                            <i className="fa-brands fa-google mr-3 text-lg"></i>
                            <span className="flex-1 text-center">Continue with Google</span>
                        </button>
                        <button className="flex items-center w-full bg-black text-white font-medium p-3 rounded-md hover:bg-gray-800 transition">
                            <i className="fa-brands fa-apple mr-3 text-lg"></i>
                            <span className="flex-1 text-center">Continue with Apple</span>
                        </button>
                        <div className="flex justify-center text-gray-500 my-3">
                            <span>or</span>
                        </div>
                        <button className="w-full bg-pink-500 text-white font-medium p-3 rounded-md hover:bg-pink-600 transition">
                            Login
                        </button>
                        <button className="w-full border-2 border-gray-300 text-gray-700 font-medium p-3 rounded-md hover:bg-gray-100 transition">
                            Sign Up
                        </button>
                        <div className="text-xs text-gray-500 text-center">
                            By signing up, you agree to our
                            <a href="#" className="font-semibold text-pink-500"> Terms and Conditions </a>
                            and
                            <a href="#" className="font-semibold text-pink-500"> Privacy Policy</a>.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
