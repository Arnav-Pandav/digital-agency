import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Arnav did an amazing job! Our site looks professional and loads fast.",
    name: "— Priya Sharma, Founder of ZenMart",
  },
  {
    quote: "Super communication and clean design. Highly recommend!",
    name: "— Rahul Patel, Business Owner",
  },
  {
    quote: "Loved the modern design and quick delivery. Truly impressed!",
    name: "— Sneha Mehta, E-Commerce Entrepreneur",
  },
  {
    quote: "Arnav understood our brand vision perfectly and delivered beyond expectations.",
    name: "— Karan Desai, Marketing Director",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-28 md:py-32 bg-gray-50 transition-colors duration-500 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        {/* Section Header */}
        <motion.span
          variants={itemVariants}
          className="text-primary font-medium uppercase tracking-wide text-sm mb-2 inline-block"
        >
          Testimonials
        </motion.span>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-poppins font-semibold mb-4 text-gray-900"
        >
          What Clients Say
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-600 mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Our happy clients speak for our quality, communication, and dedication.
        </motion.p>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-500/40 text-left"
            >
              <p className="text-gray-700 text-lg italic leading-relaxed mb-4">
                “{t.quote}”
              </p>
              <p className="text-sm font-semibold text-primary">{t.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
