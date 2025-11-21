import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50  transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.img
          src="/Images/About_Section.png"
          alt="About Webworks by Arnav"
          className="rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        {/* Added animation to the text container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animates only once when it enters view
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-poppins font-semibold mb-4 text-gray-900">
            About Webworks
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 mb-4">
            Webworks by Arnav is a creative digital studio that helps businesses
            grow online. We design websites that not only look good but perform great.
          </motion.p>
          <motion.ul variants={containerVariants} className="space-y-2 text-gray-700">
            <motion.li variants={itemVariants}>✅ Responsive and pixel-perfect design</motion.li>
            <motion.li variants={itemVariants}>✅ Modern tech: React, WordPress, APIs</motion.li>
            <motion.li variants={itemVariants}>✅ SEO, analytics, and long-term support</motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
