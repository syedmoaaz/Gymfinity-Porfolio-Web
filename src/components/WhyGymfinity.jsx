// import { motion } from "framer-motion";

// import {
//   Users,
//   GraduationCap,
//   Sparkles,
//   MapPin,
//   Headphones,
//   CheckCircle,
//   Unlock,
//   Banknote,
//   Bell
// } from "lucide-react";

// import dashboard from "../assets/dashboard.png";

// const stats = [
//   { value: "All-in-One", label: "Gym Management System" },
//   { value: "Cloud", label: "Secure Data Storage" },
//   { value: "Fast", label: "Quick Member Management" },
//   { value: "24/7", label: "System Availability" },
// ];

// const benefits = [
//   {
//     icon: <Users size={24} />,
//     title: "Complete Gym Management",
//     description:
//       "Manage members, fees, attendance, trainers, reports, and gym operations all in one powerful system.",
//   },
//   {
//     icon: <GraduationCap size={24} />,
//     title: "Free Of Cost Staff Training",
//     description:
//       "We provide complete training for gym staff so they can easily operate Gymfinity without technical knowledge.",
//   },
//   {
//     icon: <Sparkles size={24} />,
//     title: "Monthly Feature Updates",
//     description:
//       "Gymfinity continuously improves with new features and updates released every month.",
//   },
//   {
//     icon: <MapPin size={24} />,
//     title: "Free On-Site Setup",
//     description:
//       "Our team can visit your gym and set up the software on-site if required.",
//   },
//   {
//     icon: <Headphones size={24} />,
//     title: "24/7 Customer Support",
//     description:
//       "Our support team is available anytime to help you with setup, guidance, and troubleshooting.",
//   },
// ];

// const WhyGymfinity = () => {
//   return (
//     <section
//       id="why-gymfinity"
//       className="pt-12 pb-20 bg-gradient-to-b from-gymfinity-100/40 to-white"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* HEADER */}
//         <div className="text-center max-w-3xl mx-auto mb-14">

//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight"
//           >
//             Why Gym Owners Choose{" "}
//             <span className="text-gymfinity-400">GymFinity</span> ?
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="mt-4 text-lg text-gray-500 leading-relaxed"
//           >
//             Gymfinity is designed specifically for gyms in Pakistan, helping gym
//             owners manage members, fees, attendance, trainers, and reports
//             from one powerful dashboard.
//           </motion.p>

//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">

//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.15 }}
//               viewport={{ once: true }}
//               className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
//             >
//               <div className="text-2xl font-extrabold text-gymfinity-400">
//                 {stat.value}
//               </div>

//               <div className="text-sm text-gray-500 mt-1">
//                 {stat.label}
//               </div>

//             </motion.div>
//           ))}

//         </div>

//         {/* MAIN CONTENT */}
//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* BENEFITS */}
//           <div className="space-y-8">

//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 className="flex gap-4"
//               >

//                 <div className="w-12 h-12 bg-gymfinity-400/10 text-gymfinity-400 rounded-xl flex items-center justify-center">
//                   {benefit.icon}
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-bold text-gymfinity-900 mb-1">
//                     {benefit.title}
//                   </h3>

//                   <p className="text-gray-500 text-sm leading-relaxed">
//                     {benefit.description}
//                   </p>
//                 </div>

//               </motion.div>
//             ))}

//           </div>

//           {/* DASHBOARD */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative"
//           >

//             <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden hover:scale-[1.02] transition duration-500">

//               {/* mac style bar */}
//               <div className="flex items-center gap-2 px-4 py-2 bg-gray-100">
//                 <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                 <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                 <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//               </div>

//               <img
//                 src={dashboard}
//                 alt="Gymfinity Dashboard"
//                 className="w-full object-cover"
//               />

//             </div>

//             {/* Floating Cards */}

//             <div className="absolute -top-4 -right-4 bg-white shadow-lg border border-gray-100 rounded-xl p-3 animate-float">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
//                   <CheckCircle size={16} className="text-green-600" />
//                 </div>
//                 <div>
//                   <div className="text-xs font-bold text-gymfinity-900">
//                     Member Joined
//                   </div>
//                   <div className="text-[10px] text-gray-400">
//                     New registration added
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute top-24 -left-6 bg-white shadow-lg border border-gray-100 rounded-xl p-3 animate-float [animation-delay:1s]">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <Unlock size={16} className="text-blue-600" />
//                 </div>
//                 <div>
//                   <div className="text-xs font-bold text-gymfinity-900">
//                     Access Allowed
//                   </div>
//                   <div className="text-[10px] text-gray-400">
//                     Member check-in success
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute bottom-16 -left-4 bg-white shadow-lg border border-gray-100 rounded-xl p-3 animate-float [animation-delay:2s]">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
//                   <Banknote size={16} className="text-yellow-600" />
//                 </div>
//                 <div>
//                   <div className="text-xs font-bold text-gymfinity-900">
//                     Fees Paid
//                   </div>
//                   <div className="text-[10px] text-gray-400">
//                     Monthly payment received
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute bottom-2 right-10 bg-white shadow-lg border border-gray-100 rounded-xl p-3 animate-float [animation-delay:3s]">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
//                   <Bell size={16} className="text-purple-600" />
//                 </div>
//                 <div>
//                   <div className="text-xs font-bold text-gymfinity-900">
//                     Reminder Sent
//                   </div>
//                   <div className="text-[10px] text-gray-400">
//                     Payment reminder delivered
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyGymfinity;





















import { motion } from "framer-motion";

import {
Users,
GraduationCap,
Sparkles,
MapPin,
Headphones,
} from "lucide-react";

const stats = [
{ value: "All-in-One", label: "Gym Management System" },
{ value: "Cloud", label: "Secure Data Storage" },
{ value: "Fast", label: "Quick Member Management" },
{ value: "24/7", label: "System Availability" },
];

const benefits = [
{
icon: <Users size={24} />,
title: "Complete Gym Management",
description:
"Manage members, fees, attendance, trainers, reports, and gym operations all in one powerful system.",
},
{
icon: <GraduationCap size={24} />,
title: "Free Of Cost Staff Training",
description:
"We provide complete training for gym staff so they can easily operate Gymfinity without technical knowledge.",
},
{
icon: <Sparkles size={24} />,
title: "Monthly Feature Updates",
description:
"Gymfinity continuously improves with new features and updates released every month.",
},
{
icon: <MapPin size={24} />,
title: "Free On-Site Setup",
description:
"Our team can visit your gym and set up the software on-site if required.",
},
{
icon: <Headphones size={24} />,
title: "24/7 Customer Support",
description:
"Our support team is available anytime to help you with setup, guidance, and troubleshooting.",
},
];

const WhyGymfinity = () => {
return ( <section
   id="why-gymfinity"
   className="pt-12 pb-20 bg-gradient-to-b from-gymfinity-100/40 to-white"
 > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-14">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight"
      >
        Why Gym Owners Choose{" "}
        <span className="text-gymfinity-400">GymFinity</span> ?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 text-lg text-gray-500 leading-relaxed"
      >
        Gymfinity is designed specifically for gyms in Pakistan, helping gym
        owners manage members, fees, attendance, trainers, and reports
        from one powerful dashboard.
      </motion.p>

    </div>

    {/* STATS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">

      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-2xl font-extrabold text-gymfinity-400">
            {stat.value}
          </div>

          <div className="text-sm text-gray-500 mt-1">
            {stat.label}
          </div>

        </motion.div>
      ))}

    </div>

    {/* MAIN CONTENT */}
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* BENEFITS */}
      <div className="space-y-8">

        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >

            <div className="w-12 h-12 bg-gymfinity-400/10 text-gymfinity-400 rounded-xl flex items-center justify-center">
              {benefit.icon}
            </div>

            <div>
              <h3 className="text-lg font-bold text-gymfinity-900 mb-1">
                {benefit.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>

          </motion.div>
        ))}

      </div>

      {/* SOFTWARE VIDEO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >

        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

          {/* Mac style bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>

          {/* VIDEO */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover"
          >
            {/* <source src="/public/gymfinity-demo.mp4" type="video/mp4" /> */}
            <source src="/gymfinity-demo.mp4" type="video/mp4" />
          </video>

        </div>

      </motion.div>

    </div>
  </div>
</section>

);
};

export default WhyGymfinity;
