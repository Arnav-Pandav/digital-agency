import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
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
        transition: { duration: 0.6 }
    },
};

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-center bg-white overflow-hidden"
        >
            <div className="absolute inset-0 overflow-hidden z-0">

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-32 left-1/4 w-96 h-96 bg-blue-500/40  rounded-full blur-[120px]"
                ></motion.div>


                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        x: [0, -10, 0],
                        scale: [1, 1.03, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-400/40 rounded-full blur-[120px]"
                ></motion.div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-3xl px-6 z-10"
            >
                <motion.p
                    variants={itemVariants}
                    className="uppercase text-sm tracking-widest text-primary font-semibold mb-3"
                >
                    Transform Your Online Presence
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="font-poppins text-4xl sm:text-6xl font-bold mb-6 leading-tight"
                >
                    We Build <span className="text-primary">Beautiful</span>,{" "}
                    <span className="text-accent">Functional</span>, and Fast Websites.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-600 mb-8 text-lg"
                >
                    Empowering your business online with responsive, user-friendly, and modern web experiences.
                </motion.p>

                <motion.div variants={itemVariants} className="flex justify-center gap-4">
                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-lg bg-blue-900 text-white font-bold shadow-md hover:bg-blue-800 transition-all duration-300"
                    >
                        Start a Project
                    </a>
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-lg border border-gray-400 text-gray-800 hover:bg-gray-100 transition-all duration-300"
                    >
                        See Work
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}




