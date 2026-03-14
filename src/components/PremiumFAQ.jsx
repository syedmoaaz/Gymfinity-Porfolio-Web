// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";

// const faqs = [
//   {
//     question: "Is GymFinity suitable for small and large gyms?",
//     answer:
//       "Yes. GymFinity is designed to scale with your business. Whether you run a small local gym or a large fitness center, our system adapts to your needs.",
//   },
//   {
//     question: "Can I track payments and unpaid members?",
//     answer:
//       "Absolutely. You can track paid, unpaid, expiring members, generate revenue reports, and manage financial data in real-time.",
//   },
//   {
//     question: "Does GymFinity support attendance machines?",
//     answer:
//       "Yes. GymFinity integrates with biometric and attendance devices to automate member check-ins and maintain accurate records.",
//   },
//   {
//     question: "Is there a free demo available?",
//     answer:
//       "Yes. We offer a live demo so you can experience how GymFinity works before subscribing.",
//   },
//   {
//     question: "Is my gym data secure?",
//     answer:
//       "Your data is securely stored with proper authentication and isolation, ensuring complete privacy and protection.",
//   },
// ];

// const PremiumFAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-24 px-6 bg-gradient-to-b from-white to-gymfinity-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

//         {/* LEFT SIDE */}
//         <div>
         
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gymfinity-900 leading-tight mb-6">
//             <Typewriter
//               words={["Frequently Asked Questions"]}
//               loop={0}
//               cursor
//               cursorStyle="|"
//               typeSpeed={60}
//               deleteSpeed={0}
//             />
//           </h2>

//           <p className="text-gray-600 text-lg leading-relaxed">
//             Everything you need to know about Gymfinity. From member management
//             to revenue tracking and attendance automation — we’ve got you covered.
//           </p>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="space-y-5">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className={`rounded-xl border transition-all duration-500 ${
//                 activeIndex === index
//                   ? "bg-gymfinity-400 text-white shadow-xl shadow-gymfinity-400/20"
//                   : "bg-white border-gray-200"
//               }`}
//             >
//               <button
//                 onClick={() =>
//                   setActiveIndex(activeIndex === index ? null : index)
//                 }
//                 className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg"
//               >
//                 {faq.question}

//                 <motion.span
//                   animate={{ rotate: activeIndex === index ? 45 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="text-2xl"
//                 >
//                   +
//                 </motion.span>
//               </button>

//               <AnimatePresence>
//                 {activeIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="px-6 pb-6 text-sm leading-relaxed"
//                   >
//                     {faq.answer}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PremiumFAQ;




















import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const faqs = [
  {
    question: "Is GymFinity suitable for small and large gyms?",
    answer:
      "Yes. GymFinity is designed to scale with your business. Whether you run a small local gym or a large fitness center, our system adapts to your needs.",
  },
  {
    question: "Can I track payments and unpaid members?",
    answer:
      "Absolutely. You can track paid, unpaid, expiring members, generate revenue reports, and manage financial data in real-time.",
  },
  {
    question: "Does GymFinity support attendance machines?",
    answer:
      "Yes. GymFinity integrates with biometric and attendance devices to automate member check-ins and maintain accurate records.",
  },
  {
    question: "Is there a free demo available?",
    answer:
      "Yes. We offer a live demo so you can experience how GymFinity works before subscribing.",
  },
  {
    question: "Is my gym data secure?",
    answer:
      "Your data is securely stored with proper authentication and isolation, ensuring complete privacy and protection.",
  },
];

const PremiumFAQ = () => {

  /* FIX 1 — nothing open by default */
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gymfinity-50 overflow-hidden">

      <motion.div
        // className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start"
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"

        /* FIX 2 — animation when section appears */
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gymfinity-400 leading-tight mb-6">
            <Typewriter
              words={["Frequently Asked Questions"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={0}
            />
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Everything you need to know about Gymfinity. From member management
            to revenue tracking and attendance automation we’ve got you covered.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}

              /* small stagger animation for each faq */
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}

              className={`rounded-xl border transition-all duration-500 ${
                activeIndex === index
                  ? "bg-gymfinity-400 text-white shadow-xl shadow-gymfinity-400/20"
                  : "bg-white border-gray-200"
              }`}
            >

              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg"
              >
                {faq.question}

                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl"
                >
                  +
                </motion.span>
              </button>

             <AnimatePresence initial={false}>
  {activeIndex === index && (
    <motion.div
      key="content"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="overflow-hidden px-6 pb-6 text-sm leading-relaxed"
    >
      {faq.answer}
    </motion.div>
  )}
</AnimatePresence>

            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
};

export default PremiumFAQ;