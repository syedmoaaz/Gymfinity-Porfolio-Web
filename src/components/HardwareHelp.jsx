import { motion } from "framer-motion";
import {
  Award,
  MonitorSmartphone,
  Wrench,
  Headphones,
  ArrowRight,
} from "lucide-react";

const phoneNumber = "923131234420";
const message =
  "Hello, I need help with hardware selection and installation for my gym.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const points = [
  { icon: Award, label: "Expert Guidance" },
  { icon: MonitorSmartphone, label: "Wide Range of Devices" },
  { icon: Wrench, label: "Professional Installation" },
  { icon: Headphones, label: "Ongoing Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const HardwareHelp = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gymfinity-100/40 to-white">
      <div className="absolute top-10 right-0 w-72 h-72 bg-gymfinity-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gymfinity-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left sm:text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-tight text-gymfinity-900"
        >
          Confused about{" "}
          <span className="text-gymfinity-400">
            hardware selection and installation?
          </span>
        </motion.h2>

        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.55, delay: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-6 text-xl sm:text-2xl font-bold text-gymfinity-900"
        >
          Don&apos;t worry, GymFinity got you covered!
        </motion.h3>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.55, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-4 text-base text-gray-500 leading-relaxed max-w-2xl sm:mx-auto"
        >
          From choosing the right devices to seamless installation, our experts
          handle everything according to your preference and budget.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.55, delay: 1.05, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0"
        >
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.label}
                className={`flex flex-col items-center text-center px-3 ${
                  index < points.length - 1
                    ? "lg:border-r lg:border-gray-200"
                    : ""
                }`}
              >
                <Icon className="text-gymfinity-400 mb-3" size={28} strokeWidth={1.75} />
                <p className="text-sm font-bold text-gymfinity-900 leading-snug">
                  {point.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.55, delay: 1.35, ease: "easeOut" }}
          viewport={{ once: true }}
          className="group inline-flex items-center justify-between gap-6 mt-10 pl-7 pr-2 py-2 rounded-full bg-gymfinity-400 text-white font-semibold text-sm sm:text-base shadow-lg shadow-gymfinity-400/25 hover:bg-gymfinity-600 transition-colors duration-300 min-w-[240px] sm:min-w-[280px]"
        >
          <span>Talk to Our Experts</span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gymfinity-400 group-hover:translate-x-0.5 transition-transform">
            <ArrowRight size={18} strokeWidth={2.5} />
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default HardwareHelp;
