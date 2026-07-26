import { motion } from "framer-motion";
import { Fingerprint, ScanFace, RefreshCw, Layers } from "lucide-react";

import zktecoDevice from "../Assets/Zkteco Device Image.jpg";
import zktecoK40 from "../Assets/Zkteco k40.jpg";
import zktecoK50 from "../Assets/Zkteco K50.jpg";
import zktecoSenseFace from "../Assets/Zkteco Sense Face.jpg";
import hikvisionDevice from "../Assets/Hikvision Device Image.jpg";
import hikvisionBasic from "../Assets/Hikviison Basic.png";
import hikvisionFaceRec from "../Assets/Hikviison Face Rec.jpg";
import hikvisionFaceFinger from "../Assets/Hikvision Face  and Finger .jpg";
import hikvisionFaceSmall from "../Assets/Hikvision Face Small.jpg";

const devices = [
  {
    src: zktecoDevice,
    alt: "ZKTeco biometric device",
    className: "left-[4%] top-[8%] w-[4.75rem] sm:w-24 lg:w-28 -rotate-6",
    delay: "0s",
  },
  {
    src: hikvisionFaceRec,
    alt: "Hikvision face recognition terminal",
    className: "left-[22%] top-[2%] w-[4.25rem] sm:w-20 lg:w-24 rotate-3",
    delay: "0.6s",
  },
  {
    src: zktecoK40,
    alt: "ZKTeco K40",
    className: "left-[40%] top-[10%] w-20 sm:w-24 lg:w-[7.5rem] -rotate-2",
    delay: "1.2s",
  },
  {
    src: hikvisionBasic,
    alt: "Hikvision basic terminal",
    className: "left-[58%] top-[4%] w-[4.5rem] sm:w-20 lg:w-24 rotate-6",
    delay: "0.3s",
  },
  {
    src: zktecoK50,
    alt: "ZKTeco K50",
    className: "left-[76%] top-[12%] w-[4.75rem] sm:w-24 lg:w-28 -rotate-3",
    delay: "1.5s",
  },
  {
    src: hikvisionFaceFinger,
    alt: "Hikvision face and fingerprint device",
    className: "left-[10%] top-[48%] w-20 sm:w-24 lg:w-28 rotate-2",
    delay: "0.9s",
  },
  {
    src: zktecoSenseFace,
    alt: "ZKTeco Sense Face",
    className: "left-[32%] top-[52%] w-[4.5rem] sm:w-20 lg:w-24 -rotate-5",
    delay: "1.8s",
  },
  {
    src: hikvisionDevice,
    alt: "Hikvision biometric device",
    className: "left-[52%] top-[46%] w-20 sm:w-24 lg:w-[7.25rem] rotate-4",
    delay: "0.4s",
  },
  {
    src: hikvisionFaceSmall,
    alt: "Hikvision face terminal",
    className: "left-[72%] top-[50%] w-[4.25rem] sm:w-20 lg:w-24 -rotate-4",
    delay: "1.1s",
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
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
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

        {/* Floating device field */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mx-auto mb-14 lg:mb-16 h-[340px] sm:h-[380px] lg:h-[420px] max-w-5xl"
          aria-label="Supported ZKTeco and Hikvision biometric devices"
        >
          <div className="absolute inset-6 sm:inset-8 rounded-full bg-gymfinity-400/5 blur-3xl pointer-events-none" />

          {devices.map((device) => (
            <motion.div
              key={device.alt + device.className}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, zIndex: 20 }}
              className={`absolute z-10 rounded-2xl bg-white border border-gray-100 shadow-md shadow-gray-200/60 p-2 sm:p-2.5 ${device.className}`}
              style={{ animationDelay: device.delay }}
            >
              <img
                src={device.src}
                alt={device.alt}
                className="w-full h-auto object-contain animate-float"
                style={{ animationDelay: device.delay }}
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>

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
