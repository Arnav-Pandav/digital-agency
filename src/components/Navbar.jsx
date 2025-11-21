
import { motion } from 'framer-motion';
import { useState } from 'react';

const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo with primary and accent colors */}
                <motion.a
                    href="#home"
                    className="font-poppins text-xl font-bold flex items-center gap-1 text-gray-900" // Added base text color
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <span className="text-primary">Webworks</span> 
                    {/* Using the accent color defined in your config */}
                    <span className="text-accent ">by Arnav</span> 
                </motion.a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-8 text-sm font-medium items-center">
                    <motion.a href="#services" whileHover={{ color: '#2563EB', scale: 1.1 }} transition={{ duration: 0.2 }} className="hover:text-primary transition">Services</motion.a>
                    <motion.a href="#projects" whileHover={{ color: '#2563EB', scale: 1.1 }} transition={{ duration: 0.2 }} className="hover:text-primary transition">Projects</motion.a>
                    <motion.a href="#about" whileHover={{ color: '#2563EB', scale: 1.1 }} transition={{ duration: 0.2 }} className="hover:text-primary transition">About</motion.a>
                    
                    {/* Premium Button Style (from Contact section) */}
                    <motion.a
                        href="#contact"
                        className="group relative inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-900 text-white font-bold overflow-hidden shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 rotating-gradient-border"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl shadow-blue-500/50 pointer-events-none"></span>
                        <span className="relative z-10">Contact</span>
                    </motion.a>
                </div>

                {/*  Mobile Menu Button */}
                <div className="flex items-center gap-4">
        
                    
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-200 transition">
                        Menu
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-200 ">
                    <a href="#services" className="block px-6 py-3 hover:bg-gray-100  ">Services</a>
                    <a href="#projects" className="block px-6 py-3 hover:bg-gray-100 ">Projects</a>
                    <a href="#about" className="block px-6 py-3 hover:bg-gray-100">About</a>
                    <a href="#contact" className="block px-6 py-3 text-white bg-blue-900 hover:bg-blue-800">Contact</a>
                </div>
            )}
        </nav>
    );
}
