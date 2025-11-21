import { motion } from 'framer-motion';
export default function Footer() {
  const year = new Date().getFullYear();

  return (

    <footer className="bg-gray-100 py-10 border-t border-gray-200"> 
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm"> {/* Increased gap */}
        
        {/* Left Section (Copyright) */}
        <div className="text-center md:text-left text-gray-700">
          <p>
            © {year} <span className="font-semibold text-primary">Webworks by Arnav</span>. All rights reserved.
          </p>
        </div>

        {/* Right Section (Social Icons) */}
        <motion.div 
            className="flex gap-6" 

        >
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-primary transition duration-300 filter hover:drop-shadow-md hover:drop-shadow-blue-500/50"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin text-xl"></i> 
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-primary transition duration-300 filter hover:drop-shadow-md hover:drop-shadow-blue-500/50"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram text-xl"></i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-primary transition duration-300 filter hover:drop-shadow-md hover:drop-shadow-blue-500/50"
            aria-label="GitHub"
          >
            <i className="bi bi-github text-xl"></i>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
