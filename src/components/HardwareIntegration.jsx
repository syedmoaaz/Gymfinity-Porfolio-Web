import { motion } from "framer-motion";
import { Fingerprint, ScanFace, RefreshCw, Layers } from "lucide-react";
import zktecoDevice from "../Assets/Zkteco Device Image.jpg";
import hikvisionDevice from "../Assets/Hikvision Device Image.jpg";

const brands = [
  {
    name: "ZKTeco",
    description:
      "Reliable fingerprint and face terminals trusted in gyms worldwide — check-ins sync straight into GymFinity.",
    image: zktecoDevice,
    alt: "ZKTeco biometric attendance device",
  },
  {
    name: "Hikvision",
    description:
      "Modern biometric access devices that capture attendance in real time and keep your member records accurate.",
    image: hikvisionDevice,
    alt: "Hikvision biometric attendance device",
  },
];

const capabilities = [
  {
    icon: <Fingerprint size={22} />,
    title: "Fingerprint & Face",
    description: "Support for common biometric modes used on gym floors.",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Real-time Sync",
    description: "Attendance updates flow into your GymFinity dashboard automatically.",
  },
  {
    icon: <ScanFace size={22} />,
    title: "No Manual Check-ins",
    description: "Members clock in at the device — staff spend less time on registers.",
  },
  {
    icon: <Layers size={22} />,
    title: "Multi-device Ready",
    description: "Run one or more terminals across branches with a unified system.",
  },
];

const HardwareIntegration = () => {
  return (
    <section
      id="hardware"
      className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-white via-gymfinity-100/30 to-white"
    >
      <div className="absolute top-20 -left-24 w-80 h-80 bg-gymfinity-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-96 h-96 bg-gymfinity-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight"
          >
            Seamless{" "}
            <span className="text-gymfinity-400">Hardware Integration</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-500 leading-relaxed"
          >
            Connect ZKTeco and Hikvision biometric devices to GymFinity for
            automatic member attendance — no manual check-ins.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-14 lg:mb-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-gymfinity-400/10 hover:border-gymfinity-400/25 transition-all duration-500"
            >
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gymfinity-400 mb-2">
                  Compatible with
                </p>
                <h3 className="text-2xl font-extrabold text-gymfinity-900">
                  {brand.name}
                </h3>
                <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
                  {brand.description}
                </p>
              </div>

              <div className="relative flex items-center justify-center rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 min-h-[260px] sm:min-h-[300px] overflow-hidden">
                <div className="absolute inset-0 bg-gymfinity-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.img
                  src={brand.image}
                  alt={brand.alt}
                  className="relative z-10 max-h-[240px] sm:max-h-[280px] w-auto object-contain drop-shadow-md animate-float"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-5 hover:border-gymfinity-400/30 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gymfinity-100 text-gymfinity-400 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="font-bold text-gymfinity-900 mb-1.5">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareIntegration;
