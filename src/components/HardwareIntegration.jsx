import { motion } from "framer-motion";
import { Fingerprint, ScanFace, RefreshCw, ShieldCheck } from "lucide-react";

import zktecoDevice from "../Assets/Zkteco_Device_Image-removebg-preview.png";
import zktecoK40 from "../Assets/Zkteco_k40-removebg-preview.png";
import zktecoK50 from "../Assets/Zkteco_K50-removebg-preview.png";
import zktecoSenseFace from "../Assets/Zkteco_Sense_Face-removebg-preview.png";
import hikvisionDevice from "../Assets/Hikvision_Device_Image-removebg-preview.png";
import hikvisionBasic from "../Assets/Hikviison Basic.png";
import hikvisionFaceRec from "../Assets/Hikviison_Face_Rec-removebg-preview.png";
import hikvisionFaceFinger from "../Assets/Hikvision Face  and Finger .jpg";
import hikvisionFaceSmall from "../Assets/Hikvision_Face_Small-removebg-preview.png";
import zktecoLogo from "../Assets/zkteco_new_logo-removebg-preview.png";
import hikvisionLogo from "../Assets/Hikvision_Logo-removebg-preview.png";

const devices = [
  {
    src: zktecoDevice,
    alt: "ZKTeco biometric device",
    className: "left-[2%] top-[4%] w-28 sm:w-36 lg:w-44 -rotate-6",
    delay: "0s",
  },
  {
    src: hikvisionFaceRec,
    alt: "Hikvision face recognition terminal",
    className: "left-[20%] top-[0%] w-24 sm:w-32 lg:w-40 rotate-3",
    delay: "0.6s",
  },
  {
    src: zktecoK40,
    alt: "ZKTeco K40",
    className: "left-[38%] top-[6%] w-28 sm:w-36 lg:w-44 -rotate-2",
    delay: "1.2s",
  },
  {
    src: hikvisionBasic,
    alt: "Hikvision basic terminal",
    className: "left-[56%] top-[2%] w-24 sm:w-32 lg:w-40 rotate-6",
    delay: "0.3s",
  },
  {
    src: zktecoK50,
    alt: "ZKTeco K50",
    className: "left-[74%] top-[8%] w-28 sm:w-36 lg:w-44 -rotate-3",
    delay: "1.5s",
  },
  {
    src: hikvisionFaceFinger,
    alt: "Hikvision face and fingerprint device",
    className: "left-[8%] top-[46%] w-28 sm:w-36 lg:w-44 rotate-2",
    delay: "0.9s",
    blendWhite: true,
  },
  {
    src: zktecoSenseFace,
    alt: "ZKTeco Sense Face",
    className: "left-[30%] top-[50%] w-24 sm:w-32 lg:w-40 -rotate-5",
    delay: "1.8s",
  },
  {
    src: hikvisionDevice,
    alt: "Hikvision biometric device",
    className: "left-[50%] top-[44%] w-28 sm:w-36 lg:w-44 rotate-4",
    delay: "0.4s",
  },
  {
    src: hikvisionFaceSmall,
    alt: "Hikvision face terminal",
    className: "left-[70%] top-[48%] w-24 sm:w-32 lg:w-40 -rotate-4",
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
    icon: <ShieldCheck size={22} />,
    title: "Access Control",
    description: "Control door entry with biometric verification so only active members get in.",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Real Time Sync",
    description: "Attendance updates flow into your GymFinity dashboard automatically.",
  },
  {
    icon: <ScanFace size={22} />,
    title: "No Manual Check Ins",
    description: "Members clock in at the device so staff spend less time on registers.",
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
        <div className="text-center max-w-5xl mx-auto mb-10 lg:mb-12">
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
            className="mt-4 text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto"
          >
            Connect Biometric Devices to GymFinity for automatic Member
            Attendance and Access Controls with no manual check ins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 flex items-center justify-center gap-10 sm:gap-14 lg:gap-20"
          >
            <img
              src={hikvisionLogo}
              alt="Hikvision"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain shrink-0"
            />
            <img
              src={zktecoLogo}
              alt="ZKTeco"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain shrink-0"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mx-auto mb-14 lg:mb-16 h-[400px] sm:h-[460px] lg:h-[520px] max-w-6xl"
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
              className={`absolute z-10 ${device.className}`}
            >
              <img
                src={device.src}
                alt={device.alt}
                className={`w-full h-auto object-contain animate-float drop-shadow-[0_12px_24px_rgba(23,37,42,0.18)] ${
                  device.blendWhite ? "mix-blend-multiply" : ""
                }`}
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
