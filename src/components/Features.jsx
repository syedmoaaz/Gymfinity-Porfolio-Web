// const features = [
//     {
//         title: 'Member Management',
//         description: 'Easily manage your gym members, track attendance, and handle memberships with our intuitive dashboard.',
//         icon: (
//             <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//         ),
//     },
//     {
//         title: 'Class Scheduling',
//         description: 'Create and manage class schedules, automate bookings, and send real-time notifications to members.',
//         icon: (
//             <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//         ),
//     },
//     {
//         title: 'Financial Reports',
//         description: 'Generate detailed revenue reports, track expenses, and gain clear insights into your gym\'s financial health.',
//         icon: (
//             <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//             </svg>
//         ),
//     },
//     {
//         title: 'Equipment Tracking',
//         description: 'Monitor equipment usage, schedule maintenance, and manage your gym inventory all in one platform.',
//         icon: (
//             <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//         ),
//     },
//     {
//         title: 'Automated Billing',
//         description: 'Set up recurring billing, process payments securely, and reduce manual work with smart automation.',
//         icon: (
//             <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//             </svg>
//         ),
//     },
//     {
//         title: 'Analytics Dashboard',
//         description: 'Get real-time analytics on membership trends, peak hours, and performance metrics in a beautiful UI.',
//         icon: (
//             <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//         ),
//     },
// ];

// const Features = () => {
//     return (
//         <section id="features" className="py-20 lg:py-28 bg-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Section Header */}
//                 <div className="text-center max-w-3xl mx-auto mb-16">
                    
//                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
//                         Everything you need to{' '}
//                         <span className="text-gymfinity-400">manage your gym</span>
//                     </h2>
//                     <p className="mt-4 text-gray-500 text-lg leading-relaxed">
//                         Powerful tools designed to streamline your gym operations and keep your members happy.
//                     </p>
//                 </div>

//                 {/* Features Grid */}
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//                     {features.map((feature, index) => (
//                         <div
//                             key={index}
//                             className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-gymfinity-400/30 hover:shadow-xl hover:shadow-gymfinity-400/5 transition-all duration-500 hover:-translate-y-1"
//                         >
//                             {/* Icon */}
//                             <div className="w-14 h-14 bg-gymfinity-100 text-gymfinity-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gymfinity-400 group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gymfinity-400/25">
//                                 {feature.icon}
//                             </div>

//                             <h3 className="text-lg font-bold text-gymfinity-900 mb-2">
//                                 {feature.title}
//                             </h3>
//                             <p className="text-gray-500 text-sm leading-relaxed">
//                                 {feature.description}
//                             </p>

//                             {/* Hover arrow */}
//                             <div className="mt-4 flex items-center gap-1 text-gymfinity-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
//                                 Learn more
//                                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                 </svg>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Features;










// const features = [
// {
// title: "Analytics Dashboard",
// description:
// "Easy-to-use dashboard that shows total members, unpaid members, revenue stats, and other key insights instantly.",
// icon: (
// <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h4v8H3zM10 9h4v12h-4zM17 5h4v16h-4z"/>
// </svg>
// ),
// },

// {
// title: "Member Management",
// description:
// "Add, edit, and manage gym members easily while tracking memberships, payments, and member activity.",
// icon: (
// <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M12 7a4 4 0 110 8 4 4 0 010-8z"/>
// </svg>
// ),
// },

// {
// title: "Gym & Financial Reports",
// description:
// "View complete reports of your gym including members, payments, revenue trends, and financial performance.",
// icon: (
// <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-6M12 17v-3M15 17v-8M5 21h14M5 5h14"/>
// </svg>
// ),
// },

// {
// title: "Trainers & Staff Management",
// description:
// "Manage trainers and staff profiles, salaries, responsibilities, and performance in one organized system.",
// icon: (
// <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 14a4 4 0 10-8 0M12 2a5 5 0 015 5v2H7V7a5 5 0 015-5z"/>
// </svg>
// ),
// },

// {
// title: "Expense Tracker",
// description:
// "Track gym expenses, categorize spending, and monitor financial health with simple expense management tools.",
// icon: (
// <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-3 0-5 1-5 3s2 3 5 3 5-1 5-3-2-3-5-3z"/>
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12v5a7 7 0 0014 0v-5"/>
// </svg>
// ),
// },

// {
// title: "Automated WhatsApp Fee Reminders",
// description:
// "Automatically send WhatsApp reminders to members for upcoming or overdue membership payments.",
// icon: (
// <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-4.22-7.59L21 3v9z"/>
// </svg>
// ),
// },

// {
// title: "Automated & Manual Attendance",
// description:
// "Track member attendance automatically or manually. Whether you use machines or not, Gymfinity supports both.",
// icon: (
// <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14"/>
// </svg>
// ),
// },

// {
// title: "Biometric Device Compatible",
// description:
// "Connect biometric attendance devices easily and automate member check-ins with seamless device integration.",
// icon: (
// <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11z"/>
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 20c0-3.866 3.582-7 7-7s7 3.134 7 7"/>
// </svg>
// ),
// },

// {
// title: "Cloud & Multi-Device Access",
// description:
// "Access Gymfinity anytime from desktop, tablet, or mobile with our secure cloud-based platform.",
// icon: (
// <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 014-4h1a5 5 0 019.7-1.5A4 4 0 1120 15H3z"/>
// </svg>
// ),
// },
// ];

// const Features = () => {
// return (
// <section id="features" className="py-20 lg:py-28 bg-white">
// <div className="max-w-7xl mx-auto px-6 lg:px-10">

// {/* Header */}
// <div className="text-center max-w-3xl mx-auto mb-16">

// <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
// Everything you need to{" "}
// <span className="text-gymfinity-400">
// manage your gym
// </span>
// </h2>

// <p className="mt-4 text-gray-500 text-lg leading-relaxed">
// Powerful tools designed to streamline your gym operations and keep your members happy.
// </p>

// </div>

// {/* Grid */}
// <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

// {features.map((feature, index) => (

// <div
// key={index}
// className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-gymfinity-400/30 hover:shadow-xl hover:shadow-gymfinity-400/5 transition-all duration-500 hover:-translate-y-1"
// >

// <div className="w-14 h-14 bg-gymfinity-100 text-gymfinity-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gymfinity-400 group-hover:text-white transition-all duration-300">
// {feature.icon}
// </div>

// <h3 className="text-lg font-bold text-gymfinity-900 mb-2">
// {feature.title}
// </h3>

// <p className="text-gray-500 text-sm leading-relaxed">
// {feature.description}
// </p>

// </div>

// ))}

// </div>

// </div>
// </section>
// );
// };

// export default Features;












// import {
//   BarChart3,
//   Users,
//   FileBarChart,
//   UserCog,
//   DollarSign,
//   MessageCircle,
//   CalendarCheck,
//   Fingerprint,
//   Cloud
// } from "lucide-react";

// const features = [
//   {
//     title: "Analytics Dashboard",
//     description:
//       "Easy-to-use dashboard that shows total members, unpaid members, revenue stats, and other valuable insights instantly.",
//     icon: <BarChart3 size={28} />,
//   },
//   {
//     title: "Member Management",
//     description:
//       "Add, edit, and manage gym members easily while tracking memberships, payments, and member activity.",
//     icon: <Users size={28} />,
//   },
//   {
//     title: "Gym & Financial Reports",
//     description:
//       "View complete reports of your gym including members, payments, revenue trends, and financial performance.",
//     icon: <FileBarChart size={28} />,
//   },
//   {
//     title: "Trainers & Staff Management",
//     description:
//       "Manage trainers and staff profiles, salaries, roles, and performance from one centralized dashboard.",
//     icon: <UserCog size={28} />,
//   },
//   {
//     title: "Expense Tracker",
//     description:
//       "Track gym expenses, categorize spending, and monitor your gym’s financial health easily.",
//     icon: <DollarSign size={28} />,
//   },
//   {
//     title: "Automated WhatsApp Fee Reminders",
//     description:
//       "Automatically send WhatsApp reminders to members for upcoming or overdue membership payments.",
//     icon: <MessageCircle size={28} />,
//   },
//   {
//     title: "Automated & Manual Attendance",
//     description:
//       "Track attendance automatically or manually. Whether you use machines or not, Gymfinity has you covered.",
//     icon: <CalendarCheck size={28} />,
//   },
//   {
//     title: "Biometric Device Compatible",
//     description:
//       "Connect biometric attendance devices and automate member check-ins with seamless device integration.",
//     icon: <Fingerprint size={28} />,
//   },
//   {
//     title: "Cloud & Multi-Device Access",
//     description:
//       "Access Gymfinity anywhere from desktop, tablet, or mobile with our secure cloud-based platform.",
//     icon: <Cloud size={28} />,
//   },
// ];

// const Features = () => {
//   return (
//     // <section id="features" className="py-20 lg:py-28 bg-white">
//     <section id="features" className="pt-6 pb-20 lg:pt-16 lg:pb-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">

//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
//             Everything you need to
//             <br />
//             <span className="text-gymfinity-400">
//              Manage Your Gym!
//             </span>
//           </h2> */}

//           {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
//   Everything you need to
//   <span className="block text-gymfinity-400 lg:text-6xl mt-3">
//     Manage Your Gym!
//   </span>
// </h2> */}

// <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight opacity-0 animate-[fadeUp_0.9s_ease_forwards]">
//   Everything you need to
//   <span className="block text-gymfinity-400 lg:text-6xl mt-3">
//     Manage Your Gym!
//   </span>
// </h2>

//           {/* <p className="mt-4 text-gray-500 text-lg leading-relaxed">
//             Powerful tools designed to streamline your gym operations and keep your members happy.
//           </p> */}

//           <p className="mt-4 text-gray-500 text-lg leading-relaxed opacity-0 animate-[fadeUp_1.2s_ease_forwards]">
//   Powerful tools designed to streamline your gym operations and keep your members happy.
// </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

//           {features.map((feature, index) => (
//             // <div
//             //   key={index}
//             //   className="
//             //   group bg-white border border-gray-100 rounded-2xl p-6
//             //    hover:border-gymfinity-400/30 hover:shadow-xl hover:shadow-gymfinity-400/5 
//             //    transition-all duration-500 hover:-translate-y-1"
//             // >

//              <div
//               key={index}
//               className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gymfinity-400/30 hover:shadow-xl hover:shadow-gymfinity-400/5 transition-all duration-500 hover:-translate-y-1 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
//             >

//               {/* Icon */}
//               <div className="w-12 h-12 bg-gymfinity-100 text-gymfinity-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gymfinity-400 group-hover:text-white transition-all duration-300">
//                 {feature.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-bold text-gymfinity-900 mb-2">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 {feature.description}
//               </p>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;










// import { useEffect, useRef, useState } from "react";
// import {
//   BarChart3,
//   Users,
//   FileBarChart,
//   UserCog,
//   DollarSign,
//   MessageCircle,
//   CalendarCheck,
//   Fingerprint,
//   Cloud
// } from "lucide-react";

// const features = [
//   {
//     title: "Analytics Dashboard",
//     description:
//       "Easy-to-use dashboard that shows total members, unpaid members, revenue stats, and other valuable insights instantly.",
//     icon: <BarChart3 size={28} />,
//   },
//   {
//     title: "Member Management",
//     description:
//       "Add, edit, and manage gym members easily while tracking memberships, payments, and member activity.",
//     icon: <Users size={28} />,
//   },
//   {
//     title: "Gym & Financial Reports",
//     description:
//       "View complete reports of your gym including members, payments, revenue trends, and financial performance.",
//     icon: <FileBarChart size={28} />,
//   },
//   {
//     title: "Trainers & Staff Management",
//     description:
//       "Manage trainers and staff profiles, salaries, roles, and performance from one centralized dashboard.",
//     icon: <UserCog size={28} />,
//   },
//   {
//     title: "Expense Tracker",
//     description:
//       "Track gym expenses, categorize spending, and monitor your gym’s financial health easily.",
//     icon: <DollarSign size={28} />,
//   },
//   {
//     title: "Automated WhatsApp Fee Reminders",
//     description:
//       "Automatically send WhatsApp reminders to members for upcoming or overdue membership payments.",
//     icon: <MessageCircle size={28} />,
//   },
//   {
//     title: "Automated & Manual Attendance",
//     description:
//       "Track attendance automatically or manually. Whether you use machines or not, Gymfinity has you covered.",
//     icon: <CalendarCheck size={28} />,
//   },
//   {
//     title: "Biometric Device Compatible",
//     description:
//       "Connect biometric attendance devices and automate member check-ins with seamless device integration.",
//     icon: <Fingerprint size={28} />,
//   },
//   {
//     title: "Cloud & Multi-Device Access",
//     description:
//       "Access Gymfinity anywhere from desktop, tablet, or mobile with our secure cloud-based platform.",
//     icon: <Cloud size={28} />,
//   },
// ];

// const Features = () => {

//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section
//       id="features"
//       ref={sectionRef}
//       className="pt-6 pb-20 lg:pt-16 lg:pb-24 bg-white"
//     >

//       <div className="max-w-7xl mx-auto px-6 lg:px-10">

//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">

//           <h2
//             className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight transition-all duration-700 ${
//               visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             Everything you need to
//             <span className="block text-gymfinity-400 lg:text-6xl mt-3">
//               Manage Your Gym!
//             </span>
//           </h2>

//           <p
//             className={`mt-4 text-gray-500 text-lg leading-relaxed transition-all duration-700 delay-200 ${
//               visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             Powerful tools designed to streamline your gym operations and keep your members happy.
//           </p>

//         </div>

//         {/* Features Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gymfinity-400/30 hover:shadow-xl hover:shadow-gymfinity-400/5 transition-all duration-500 hover:-translate-y-1 ${
//                 visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}
//               style={{ transitionDelay: `${index * 120}ms` }}
//             >

//               {/* Icon */}
//               <div className="w-12 h-12 bg-gymfinity-100 text-gymfinity-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gymfinity-400 group-hover:text-white transition-all duration-300">
//                 {feature.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-bold text-gymfinity-900 mb-2">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 {feature.description}
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Features;














import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  FileBarChart,
  UserCog,
  DollarSign,
  MessageCircle,
  CalendarCheck,
  Fingerprint,
  Cloud
} from "lucide-react";

const features = [
  {
    title: "Analytics Dashboard",
    description:
      "Easy-to-use dashboard that shows total members, unpaid members, revenue stats, and other valuable insights instantly.",
    icon: <BarChart3 size={28} />,
  },
  {
    title: "Member Management",
    description:
      "Add, edit, and manage gym members easily while tracking memberships, payments, and member activity.",
    icon: <Users size={28} />,
  },
  {
    title: "Gym & Financial Reports",
    description:
      "View complete reports of your gym including members, payments, revenue trends, and financial performance.",
    icon: <FileBarChart size={28} />,
  },
  {
    title: "Trainers & Staff Management",
    description:
      "Manage trainers and staff profiles, salaries, roles, and performance from one centralized dashboard.",
    icon: <UserCog size={28} />,
  },
  {
    title: "Expense Tracker",
    description:
      "Track gym expenses, categorize spending, and monitor your gym’s financial health easily.",
    icon: <DollarSign size={28} />,
  },
  {
    title: "Automated WhatsApp Fee Reminders",
    description:
      "Automatically send WhatsApp reminders to members for upcoming or overdue membership payments.",
    icon: <MessageCircle size={28} />,
  },
  {
    title: "Automated & Manual Attendance",
    description:
      "Track attendance automatically or manually. Whether you use machines or not, Gymfinity has you covered.",
    icon: <CalendarCheck size={28} />,
  },
  {
    title: "Biometric Device Compatible",
    description:
      "Connect biometric attendance devices and automate member check-ins with seamless device integration.",
    icon: <Fingerprint size={28} />,
  },
  {
    title: "Cloud & Multi-Device Access",
    description:
      "Access Gymfinity anywhere from desktop, tablet, or mobile with our secure cloud-based platform.",
    icon: <Cloud size={28} />,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="pt-6 pb-20 lg:pt-16 lg:pb-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight"
          >
            Everything you need to
            <span className="block text-gymfinity-400 lg:text-6xl mt-3">
              Manage Your Gym!
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-500 text-lg leading-relaxed"
          >
            Powerful tools designed to streamline your gym operations and keep your members happy.
          </motion.p>

        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gymfinity-400/30 hover:shadow-xl hover:shadow-gymfinity-400/5 transition-all duration-500 hover:-translate-y-1"
            >

              {/* Icon */}
              <div className="w-12 h-12 bg-gymfinity-100 text-gymfinity-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gymfinity-400 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gymfinity-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;
