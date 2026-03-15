// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import moaaz from "../Assets/moaaz.jpeg";
// import taimur from "../Assets/taimurc.jpeg";
// import saif from "../Assets/saifl.jpeg";

// const teamMembers = [
//   {
//     name: "Syed Moaaz Kamal",
//     role: "Founder",
//     image: moaaz,
//     linkedin: "https://www.linkedin.com/in/syed-moaaz-kamal-b0961333a",
//     highlight: "Founder",
//     clickable: true,
//     experience: [
//       "Software Engineer",
//       "Full Stack MERN Developer",
//       "Backend Architecture & SaaS Systems",
//     ],
//     bio: `Syed Moaaz Kamal is the Founder and CEO of Gymfinity, a modern gym management software designed to simplify and automate gym operations.

// Currently pursuing a Bachelor's degree in Software Engineering, he has built over 50+ MERN stack projects including SaaS-based solutions.

// At Gymfinity he focuses on backend architecture, scalable SaaS systems, and platform reliability.

// Being a fitness enthusiast himself, he created Gymfinity with the vision to automate gyms across Pakistan through affordable technology.`,
//   },
//   {
//     name: "Muhammad Taimur",
//     role: "Co-Founder",
//     image: taimur,
//     linkedin: "https://www.linkedin.com/in/muhammad-taimur-b3595331a",
//     highlight: "Co-Founder",
//     clickable: true,
//     position: "50% 10%",
//     experience: [
//       "Frontend Development",
//       "Business Operations",
//       "Product Strategy",
//     ],
//     bio: `Muhammad Taimur is the Co-Founder of Gymfinity and contributes to both frontend development and business operations.

// He focuses on building intuitive user interfaces that make Gymfinity easy for gym owners to use.

// Alongside product development, he works on business strategy and client relations helping Gymfinity grow across gyms in Pakistan.`,
//   },
//   {
//     name: "Muhammad Saif",
//     role: "Sales & Marketing Executive",
//     image: saif,
//     linkedin: "https://www.linkedin.com/in/muhammad-saif-se",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 80 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const OurTeam = () => {
//   const [selectedMember, setSelectedMember] = useState(null);

//   return (
//     <>
//       <section
//         id="OurTeam"
//         className="relative py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-black overflow-hidden"
//       >
//         {/* Background Glow */}
//         <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gymfinity-400 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center mb-16 relative z-10"
//         >
//           <h1 className="text-3xl md:text-5xl font-bold text-white">
//             Meet The Team Behind{" "}
//             <span className="text-gymfinity-400">GymFinity</span>
//           </h1>

//           <p className="text-gray-400 mt-4 max-w-xl mx-auto">
//             Passionate innovators building the future of gym management software.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-5xl mx-auto relative z-10"
//         >
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ scale: 1.04 }}
//               onClick={() =>
//                 member.clickable ? setSelectedMember(member) : null
//               }
//               className={`relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl transition duration-500 ${
//                 member.highlight
//                   ? "ring-2 ring-gymfinity-400 shadow-lg shadow-gymfinity-400/30"
//                   : ""
//               } ${member.clickable ? "cursor-pointer" : ""}`}
//             >
//               {/* Image */}
//               <div className="relative aspect-[3/4] w-full overflow-hidden">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                   style={{ objectPosition: member.position }}
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

//                 {member.highlight && (
//                   <div className="absolute top-4 left-4 bg-gymfinity-400 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
//                     {member.highlight}
//                   </div>
//                 )}
//               </div>

//               {/* Content */}
//               <div className="p-5 text-center">
//                 <h2 className="text-lg md:text-xl font-semibold text-white">
//                   {member.name}
//                 </h2>

//                 <p className="text-gymfinity-400 text-sm mt-1">
//                   {member.role}
//                 </p>

//                 <a
//                   href={member.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 inline-block px-5 py-2 rounded-full bg-gymfinity-400 text-white text-sm font-medium hover:bg-white hover:text-black transition duration-300"
//                 >
//                   Connect on LinkedIn
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Founder Modal */}
//    <AnimatePresence>
//   {selectedMember && (
//     <motion.div
//       className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={() => setSelectedMember(null)}
//     >
//       <motion.div
//         className="bg-[#0b1120] border border-white/10 rounded-2xl max-w-xl w-full p-6 relative"
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//         exit={{ scale: 0.9 }}
//         transition={{ duration: 0.25 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close */}
//         <button
//           className="absolute top-4 right-4 text-gray-400 hover:text-white"
//           onClick={() => setSelectedMember(null)}
//         >
//           ✕
//         </button>

//         <div className="flex gap-5">

//           {/* LEFT IMAGE */}
//           <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl">
//             <img
//               src={selectedMember.image}
//               alt={selectedMember.name}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="flex-1">

//             <h2 className="text-xl font-bold text-white">
//               {selectedMember.name}
//             </h2>

//             <p className="text-gymfinity-400 text-sm mb-2">
//               {selectedMember.role}
//             </p>

//             {/* Experience */}
//             {selectedMember.experience && (
//               <div className="text-gray-300 text-sm mb-3">
//                 {selectedMember.experience.map((exp, i) => (
//                   <div key={i}>{exp}</div>
//                 ))}
//               </div>
//             )}

//             {/* Bio */}
//             {selectedMember.bio && (
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {selectedMember.bio}
//               </p>
//             )}
//           </div>

//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>
//     </>
//   );
// };

// export default OurTeam;

























import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import moaaz from "../Assets/moaaz.jpeg";
import taimur from "../Assets/taimurc.jpeg";
import saif from "../Assets/saifl.jpeg";

const teamMembers = [
  {
    name: "Syed Moaaz Kamal",
    role: "Founder",
    image: moaaz,
    linkedin: "https://www.linkedin.com/in/syed-moaaz-kamal-b0961333a",
    highlight: "Founder",
    clickable: true,
    experience: [
      "Software Engineer",
      "Full Stack MERN Developer",
      "Backend Architecture & SaaS Systems",
    ],
    bio: `Syed Moaaz Kamal is the Founder and CEO of Gymfinity, a modern gym management software designed to simplify and automate gym operations.

Currently pursuing a Bachelor's degree in Software Engineering, he has built over 50+ MERN stack projects including SaaS-based solutions.

At Gymfinity he focuses on backend architecture, scalable SaaS systems, and platform reliability.

Being a fitness enthusiast himself, he created Gymfinity with the vision to automate gyms across Pakistan through affordable technology.`,
  },
  {
    name: "Muhammad Taimur",
    role: "Co-Founder",
    image: taimur,
    linkedin: "https://www.linkedin.com/in/muhammad-taimur-b3595331a",
    highlight: "Co-Founder",
    clickable: true,
    position: "50% 10%",
    experience: [
      "Software Engineer",
      "Frontend Development",
      "Business Operations",
      "Product Strategy",
    ],
    bio: `Muhammad Taimur is the Co-Founder of Gymfinity and contributes to both frontend development and business operations. Currently pursuing a Bachelor's degree in Software Engineering,

He focuses on building intuitive user interfaces that make Gymfinity easy for gym owners to use.

Alongside product development, he works on business strategy and client relations helping Gymfinity grow across gyms in Pakistan.`,
  },

  // TEMPORARILY DISABLED
  /*
  {
    name: "Muhammad Saif",
    role: "Sales & Marketing Executive",
    image: saif,
    linkedin: "https://www.linkedin.com/in/muhammad-saif-se",
  },
  */
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <section
        id="OurTeam"
        className="relative py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-black overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gymfinity-400 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 relative z-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Meet The Team Behind{" "}
            <span className="text-gymfinity-400">GymFinity</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Passionate innovators building the future of gym management software.
          </p>
        </motion.div>

        {/* Cards */}
      //  <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-10 max-w-4xl mx-auto rela    tive z-10"
          // className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-10 max-w-5xl mx-auto relative z-10"
          // className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-10 max-w-5xl mx-auto justify-items-center relative z-10"
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-10 max-w-3xl mx-auto justify-items-center relative z-10"


        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04 }}
              onClick={() =>
                member.clickable ? setSelectedMember(member) : null
              }
              className={`w-full max-w-[320px] relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl transition duration-500 ${member.highlight
                  ? "ring-2 ring-gymfinity-400 shadow-lg shadow-gymfinity-400/30"
                  : ""
                } ${member.clickable ? "cursor-pointer" : ""}`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: member.position }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {member.highlight && (
                  <div className="absolute top-4 left-4 bg-gymfinity-400 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                    {member.highlight}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  {member.name}
                </h2>

                <p className="text-gymfinity-400 text-sm mt-1">
                  {member.role}
                </p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-5 py-2 rounded-full bg-gymfinity-400 text-white text-sm font-medium hover:bg-white hover:text-black transition duration-300"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Founder Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-[#0b1120] border border-white/10 rounded-2xl max-w-xl w-full p-6 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedMember(null)}
              >
                ✕
              </button>

              <div className="flex gap-5">
                {/* LEFT IMAGE */}
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white">
                    {selectedMember.name}
                  </h2>

                  <p className="text-gymfinity-400 text-sm mb-2">
                    {selectedMember.role}
                  </p>

                  {/* Experience */}
                  {selectedMember.experience && (
                    <div className="text-gray-300 text-sm mb-3">
                      {selectedMember.experience.map((exp, i) => (
                        <div key={i}>{exp}</div>
                      ))}
                    </div>
                  )}

                  {/* Bio */}
                  {selectedMember.bio && (
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OurTeam;
