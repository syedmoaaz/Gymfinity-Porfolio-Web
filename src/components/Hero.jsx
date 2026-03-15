import { motion } from "framer-motion";
import dashboard from "../assets/dashboard.png";
import { useState, useEffect } from "react";
import { CheckCircle, Unlock, Banknote, Bell } from "lucide-react";

const Hero = () => {

  const lines = [
    "Track revenue and expenses in real time.",
    "Automate attendance & membership billing.",
    "Generate powerful financial reports instantly.",
    "Manage your entire gym from one dashboard."
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);


  const phoneNumber = "923131234420";
  const message = "Hello, I want to Book a Demo of GymFinity";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  useEffect(() => {
    const currentLine = lines[index];

    if (!deleting && subIndex === currentLine.length) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % lines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 35 : 65);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    setText(lines[index].substring(0, subIndex));
  }, [subIndex, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="relative pt-28 lg:pt-32 pb-20 bg-gradient-to-br from-white via-gymfinity-100/30 to-gray-50 overflow-hidden">

      {/* background blur */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gymfinity-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gymfinity-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          {/* <div className="max-w-xl"> */}
          <div className="relative z-10 max-w-xl">


            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-gymfinity-900 leading-tight tracking-tight"
            >
              Boost your gym management.
              Start using{" "}
              <span className="text-gymfinity-400">GymFinity</span>{" "}
              today!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base lg:text-lg leading-relaxed max-w-lg min-h-[32px]"
            >

              <span className="bg-gradient-to-r from-gymfinity-400 via-gymfinity-500 to-gymfinity-600 bg-clip-text text-transparent font-medium">
                {text}
              </span>

              <span
                className={`ml-1 border-r-2 border-gymfinity-400 ${
                  blink ? "opacity-100" : "opacity-0"
                }`}
              ></span>

            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >

              {/* <a
                href={whatsappUrl}
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gymfinity-400 text-white font-semibold rounded-lg hover:bg-gymfinity-600 transition-all duration-300 shadow-lg shadow-gymfinity-400/20 hover:-translate-y-0.5"
              >
                Schedule Your Demo Now
              </a> */}

              <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="group cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-gymfinity-400 text-white font-semibold rounded-lg hover:bg-gymfinity-600 transition-all duration-300 shadow-lg shadow-gymfinity-400/20 hover:-translate-y-0.5"
>
  Schedule Your Demo Now
</a>


              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gymfinity-400 text-gymfinity-400 font-semibold rounded-lg hover:bg-gymfinity-400 hover:text-white transition-all duration-300"
              >
                Contact for More Details
              </a>

            </motion.div>

          </div>

          {/* RIGHT DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center lg:justify-end"
          >

            <div className="relative w-full max-w-xl">

              {/* Dashboard Frame */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

                {/* Mac style bar */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <img
                  src={dashboard}
                  alt="Gymfinity Dashboard"
                  className="w-full object-cover"
                />

              </div>

         

            
{/* MEMBER JOINED */}
<div className="absolute top-6 -right-6 bg-white shadow-lg border rounded-xl p-3 animate-float">
  <div className="flex items-center gap-2">
    <CheckCircle size={16} className="text-green-600"/>
    <div>
      <div className="text-xs font-bold">Member Joined</div>
      <div className="text-[10px] text-gray-400">
        New registration added
      </div>
    </div>
  </div>
</div>

{/* ACCESS ALLOWED */}
<div className="absolute top-24 -left-10 bg-white shadow-lg border rounded-xl p-3 animate-float [animation-delay:1s]">
  <div className="flex items-center gap-2">
    <Unlock size={16} className="text-blue-600"/>
    <div>
      <div className="text-xs font-bold">Access Allowed</div>
      <div className="text-[10px] text-gray-400">
        Member check-in success
      </div>
    </div>
  </div>
</div>

{/* FEES PAID */}
<div className="absolute top-48 -left-4 bg-white shadow-lg border rounded-xl p-3 animate-float [animation-delay:2s]">
  <div className="flex items-center gap-2">
    <Banknote size={16} className="text-yellow-600"/>
    <div>
      <div className="text-xs font-bold">Fees Paid</div>
      <div className="text-[10px] text-gray-400">
        Monthly payment received
      </div>
    </div>
  </div>
</div>

{/* REPORT DOWNLOADED */}
<div className="absolute bottom-24 -right-6 bg-white shadow-lg border rounded-xl p-3 animate-float [animation-delay:3s]">
  <div className="flex items-center gap-2">
    <CheckCircle size={16} className="text-green-600"/>
    <div>
      <div className="text-xs font-bold">Report Downloaded</div>
      <div className="text-[10px] text-gray-400">
        Financial report exported
      </div>
    </div>
  </div>
</div>

{/* REMINDER */}
<div className="absolute bottom-6 right-12 bg-white shadow-lg border rounded-xl p-3 animate-float [animation-delay:4s]">
  <div className="flex items-center gap-2">
    <Bell size={16} className="text-purple-600"/>
    <div>
      <div className="text-xs font-bold">Reminder Sent</div>
      <div className="text-[10px] text-gray-400">
        Payment reminder delivered
      </div>
    </div>
  </div>
</div>
            

            

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
