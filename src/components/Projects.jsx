import { motion } from 'framer-motion';

const projects = [

    { title: 'SaaS Landing', tag: 'Landing Page', img: '/Images/SaasLanding.png' },
    { title: 'Bakery Website', tag: 'Small Business', img: '/Images/Cafe.png' },
    { title: 'Yoga Studio', tag: 'Local Business', img: '/Images/Yoga.png' },
    { title: 'E-Commerce Store', tag: 'Online Shop', img: '/Images/E-Commerence.png' },
];


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-gray-50 ">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-poppins font-semibold mb-3 ">Our Recent Work</h2>
                <p className="text-gray-600  mb-12">A glimpse at the projects we’ve built for startups and local businesses.</p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}

                    className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-fr"
                >
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }} // Subtle lift on hover
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group relative p-px rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300"
                        >

                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative bg-white h-full flex flex-col rounded-[calc(1rem-1px)]">
                                <img src={p.img} alt={p.title} className="w-full h-52 object-cover" />
                                <div className="p-5 text-left flex flex-col flex-grow">
                                    <span className="text-xs text-primary font-medium">{p.tag}</span>
                                    <h3 className="text-lg font-semibold mt-2">{p.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}




