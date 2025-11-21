import { motion } from "framer-motion";

const services = [
    { icon: "💻", title: "Web Design", desc: "Modern, responsive UI/UX designs for your brand." },
    { icon: "⚙️", title: "Development", desc: "Clean, optimized code using React & Next.js." },
    { icon: "🚀", title: "SEO & Performance", desc: "Improve ranking and speed for your business." },
    { icon: "🛒", title: "E-Commerce", desc: "Fully functional stores with cart and checkout." },
    { icon: "📘", title: "E-Books Design", desc: "Visually engaging e-books and digital publications for authors and brands." },
    { icon: "🎨", title: "Logo Design", desc: "Creative, memorable logos that reflect your brand identity." },
    { icon: "📄", title: "Letterhead & Stationery", desc: "Professional business letterheads and stationery design for a consistent brand image." },
    { icon: "🌐", title: "WordPress Development", desc: "Custom WordPress websites with themes, plugins, and CMS integration." },
];

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
    hidden: { opacity: 0, y: 30 },
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

export default function Services() {
    return (
        <section
            id="services"
            className="relative py-28 md:py-32 bg-gray-50  transition-colors duration-500 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-6xl mx-auto px-6 text-center"
            >

                {/* Section Intro */}
                <motion.span
                    variants={itemVariants}
                    className="text-primary font-medium uppercase tracking-wide text-sm mb-2 inline-block"
                >
                    Our Expertise
                </motion.span>

                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-poppins font-semibold mb-4 text-gray-900"
                >
                    What We Do
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-600 mb-14 max-w-2xl mx-auto leading-relaxed"
                >
                    We offer full-stack web and creative design solutions for startups and
                    small businesses — everything your brand needs to shine online and in print.
                </motion.p>

                {/* Service Cards */}


                <motion.div
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch auto-rows-fr"
                >
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }} // Changed scale value slightly for better premium look
                            transition={{ type: "spring", stiffness: 300 }}
                            // Added 'group' class to the outer div to enable group-hover variants
                            className="group relative p-px rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Inner div to create the gradient border effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Inner card content wrapper */}
                            <div className="relative p-8 rounded-[calc(1rem-1px)] bg-white h-full flex flex-col justify-between">
                                <div className="text-5xl mb-4 text-blue-500 group-hover:text-blue-400 transition-colors duration-300 filter group-hover:drop-shadow-lg group-hover:drop-shadow-blue-500/50"> {/* Subtle icon glow on hover */}
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-500 transition-colors duration-300"> {/* Added text hover color for consistency */}
                                    {s.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {s.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


                {/* Call To Action */}
               

                <motion.div variants={itemVariants} className="mt-14">
                    <a
                        href="#contact"

                        className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-900 text-white font-bold overflow-hidden shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
                    >
                        {/* The rotating gradient overlay */}
                        <span

                            className="absolute inset-[-2px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:400%_400%] group-hover:animate-border-rotate"
                            style={{

                                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)'
                            }}
                        />

                        {/* Text content of the button */}
                        <span className="relative z-10">
                            Start Your Project
                        </span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
