// const OurTeam = () => {
//   return (
//     <div className="min-h-screen pt-24 px-6 bg-gray-50">
//       <h1 className="text-4xl font-bold text-center text-gymfinity-400 mb-10">
//         Meet Our Team
//       </h1>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//           <h2 className="text-xl font-semibold">Taimur Shahid</h2>
//           <p className="text-gray-500 mt-2">Founder & Developer</p>
//           <p className="text-sm text-gray-400 mt-3">
//             Creator of Gymfinity platform.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//           <h2 className="text-xl font-semibold">Team Member</h2>
//           <p className="text-gray-500 mt-2">UI/UX Designer</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//           <h2 className="text-xl font-semibold">Team Member</h2>
//           <p className="text-gray-500 mt-2">Marketing Head</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OurTeam



// const teamMembers = [
//   {
//     name: "Syed Moaaz Kamal",
//     role: "Founder",
//     image: "/Assets/moaaz.jpg", // apni image ka path yahan add karna
//   },
//   {
//     name: "Muhammad Taimur",
//     role: "Co-Founder",
//     image: "/Assets/taimur.jpg",
//   },
//   {
//     name: "Muhammad Saif",
//     role: "Sales & Marketing Head",
//     image: "/Assets/saif.jpg",
//   },
// ];

// const OurTeam = () => {
//   return (
//     <div className="min-h-screen pt-24 px-6 bg-gray-50">
//       <h1 className="text-4xl font-bold text-center text-gymfinity-400 mb-14">
//         Meet Our Team
//       </h1>

//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-center"
//           >
//             {/* Image */}
//             <div className="w-full h-72 overflow-hidden">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover hover:scale-105 transition duration-500"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 {member.name}
//               </h2>
//               <p className="text-gymfinity-400 font-medium mt-2">
//                 {member.role}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurTeam;



// import moaaz from "../Assets/saif.jpeg";
// import taimur from "../Assets/saif.jpeg";
// import saif from "../Assets/saif.jpeg";

// const teamMembers = [
//   {
//     name: "Syed Moaaz Kamal",
//     role: "Founder",
//     image: moaaz,
//     highlight: true,
//   },
//   {
//     name: "Muhammad Taimur",
//     role: "Co-Founder",
//     image: taimur,
//   },
//   {
//     name: "Saif",
//     role: "Sales & Marketing Head",
//     image: saif,
//   },
// ];

// const OurTeam = () => {
//   return (
//     <section className="min-h-screen pt-28 pb-20 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//           Meet The Team Behind <span className="text-gymfinity-400">Gymfinity</span>
//         </h1>
//         <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
//           Passionate innovators building the future of gym management software.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             className={`relative rounded-3xl overflow-hidden backdrop-blur-lg bg-white/70 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
//               member.highlight ? "ring-2 ring-gymfinity-400 scale-105" : ""
//             }`}
//           >
//             {/* Image */}
//             <div className="relative h-80 w-full overflow-hidden">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

//               {/* Founder Badge */}
//               {member.highlight && (
//                 <div className="absolute top-4 left-4 bg-gymfinity-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
//                   Founder
//                 </div>
//               )}
//             </div>

//             {/* Content */}
//             <div className="p-6 text-center">
//               <h2 className="text-xl font-semibold text-gray-900">
//                 {member.name}
//               </h2>
//               <p className="text-gymfinity-400 font-medium mt-2">
//                 {member.role}
//               </p>

//               {/* LinkedIn Button */}
//               <button className="mt-5 px-5 py-2 rounded-full bg-gray-900 text-white text-sm hover:bg-gymfinity-400 transition duration-300">
//                 Connect on LinkedIn
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurTeam;


import { motion } from "framer-motion";
import moaaz from "../Assets/moaaz.jpeg";
import taimur from "../Assets/taimurc.jpeg";
import saif from "../Assets/saifl.jpeg";

const teamMembers = [
  {
    name: "Syed Moaaz Kamal",
    role: "Founder",
    image: moaaz,
    linkedin: 'https://www.linkedin.com/in/syed-moaaz-kamal-b0961333a',
    highlight: 'Founder',
  },
  {
    name: "Muhammad Taimur",
    role: "Co-Founder",
    image: taimur,
    linkedin: 'https://www.linkedin.com/in/muhammad-taimur-b3595331a',
    highlight: "Co-Founder",
    position: "50% 10%",
  },
  {
    name: "Muhammad Saif",
    role: "Sales & Marketing Executive",
    image: saif,
    linkedin: 'https://www.linkedin.com/in/muhammad-saif-se'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
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
  return (
//     <section className="relative min-h-screen pt-32 pb-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-black overflow-hidden">

//       {/* Background Glow Effect */}
//       <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gymfinity-400 opacity-20 blur-[150px] rounded-full"></div>

//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center mb-20 relative z-10"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold text-white">
//           Meet The Team Behind{" "}
//           <span className="text-gymfinity-400">Gymfinity</span>
//         </h1>
//         <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//           Passionate innovators building the future of gym management software.
//         </p>
//       </motion.div>

//       {/* Cards */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10"
//       >
//         {teamMembers.map((member, index) => (
//           <motion.div
//             key={index}
//             variants={cardVariants}
//             whileHover={{ scale: 1.05 }}
//             className={`relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl transition duration-500 ${
//               member.highlight
//                 ? "ring-2 ring-gymfinity-400 shadow-gymfinity-400/30"
//                 : ""
//             }`}
//           >
//             {/* Image */}
//             <div className="relative h-83 w-full overflow-hidden">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />

//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

//               {/* Founder Badge */}
//               {member.highlight && (
//   <div className="absolute top-5 left-5 bg-gymfinity-400 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
//     {member.highlight}
//   </div>
// )}
//             </div>

//             {/* Content */}
//             <div className="p-6 text-center">
//               <h2 className="text-xl font-semibold text-white">
//                 {member.name}
//               </h2>
//               <p className="text-gymfinity-400 font-medium mt-2">
//                 {member.role}
//               </p>

//               <a
//   href={member.linkedin}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="mt-6 inline-block px-6 py-2 rounded-full bg-gymfinity-400 text-white text-sm font-medium hover:bg-white hover:text-black transition duration-300"
// >
//   Connect on LinkedIn
// </a>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>



<section id ="OurTeam"className="relative py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-black overflow-hidden">

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
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-5xl mx-auto relative z-10"
  >
    {teamMembers.map((member, index) => (
      <motion.div
        key={index}
        variants={cardVariants}
        whileHover={{ scale: 1.04 }}
        className={`relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl transition duration-500 ${
          member.highlight
            ? "ring-2 ring-gymfinity-400 shadow-gymfinity-400/30"
            : ""
        }`}
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
  );
};

export default OurTeam;



