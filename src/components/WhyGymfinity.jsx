// const stats = [
//     { value: '10K+', label: 'Active Members' },
//     { value: '500+', label: 'Gyms Worldwide' },
//     { value: '99.9%', label: 'Uptime' },
//     { value: '4.9/5', label: 'User Rating' },
// ];

// const benefits = [
//     {
//         title: 'Save 10+ Hours Per Week',
//         description: 'Automate repetitive tasks like billing, scheduling, and member check-ins so you can focus on growing your business.',
//     },
//     {
//         title: 'Increase Revenue by 30%',
//         description: 'Smart insights help you identify peak hours, optimize class sizes, and retain members with targeted engagement.',
//     },
//     {
//         title: 'Real-time Insights',
//         description: 'Monitor every aspect of your gym from anywhere. Get live dashboards on attendance, revenue, and member satisfaction.',
//     },
// ];

// const WhyGymfinity = () => {
//     return (
//         <section id="why-gymfinity" className="py-20 lg:py-28 bg-gradient-to-b from-gymfinity-100/40 to-white relative overflow-hidden">
//             {/* Decorative background */}
//             <div className="absolute top-0 right-0 w-80 h-80 bg-gymfinity-400/5 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-gymfinity-400/5 rounded-full blur-3xl"></div>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//                 {/* Section Header */}
//                 <div className="text-center max-w-3xl mx-auto mb-16">
//                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
//                         Trusted by gyms{' '}
//                         <span className="text-gymfinity-400">around the world</span>
//                     </h2>
//                     <p className="mt-4 text-gray-500 text-lg leading-relaxed">
//                         Join hundreds of gyms who have transformed their operations with GymFinity.
//                     </p>
//                 </div>

//                 {/* Stats Row */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//                     {stats.map((stat, index) => (
//                         <div
//                             key={index}
//                             className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gymfinity-400/10 shadow-sm hover:shadow-md hover:border-gymfinity-400/30 transition-all duration-300"
//                         >
//                             <div className="text-3xl lg:text-4xl font-extrabold text-gymfinity-400 mb-1">{stat.value}</div>
//                             <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Benefits */}
//                 <div className="grid lg:grid-cols-2 gap-12 items-center">
//                     {/* Left - Benefits List */}
//                     <div className="space-y-8">
//                         {benefits.map((benefit, index) => (
//                             <div key={index} className="flex gap-4 group">
//                                 <div className="flex-shrink-0 w-10 h-10 bg-gymfinity-400 rounded-xl flex items-center justify-center shadow-md shadow-gymfinity-400/20 group-hover:scale-110 transition-transform duration-300">
//                                     <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-lg font-bold text-gymfinity-900 mb-1">{benefit.title}</h3>
//                                     <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Right - Visual */}
//                     <div className="relative">
//                         <div className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100">
//                             {/* Mini dashboard preview */}
//                             <div className="flex items-center gap-3 mb-6">
//                                 <div className="w-10 h-10 bg-gymfinity-400 rounded-xl flex items-center justify-center">
//                                     <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <div className="text-sm font-bold text-gymfinity-900">Revenue Growth</div>
//                                     <div className="text-xs text-green-500 font-medium">↑ 23% this month</div>
//                                 </div>
//                             </div>

//                             {/* Bar Chart */}
//                             <div className="flex items-end gap-2 h-40 px-2">
//                                 {[45, 65, 55, 80, 70, 90, 75, 95, 85, 100, 88, 92].map((height, i) => (
//                                     <div key={i} className="flex-1 flex flex-col items-center gap-1">
//                                         <div
//                                             className="w-full rounded-t-md bg-gradient-to-t from-gymfinity-400 to-gymfinity-300 transition-all duration-500 hover:from-gymfinity-600 hover:to-gymfinity-400"
//                                             style={{ height: `${height}%` }}
//                                         ></div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="flex justify-between mt-2 px-1">
//                                 <span className="text-[10px] text-gray-400">Jan</span>
//                                 <span className="text-[10px] text-gray-400">Jun</span>
//                                 <span className="text-[10px] text-gray-400">Dec</span>
//                             </div>
//                         </div>

//                         {/* Floating card */}
//                         <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-bounce-slow">
//                             <div className="flex items-center gap-2">
//                                 <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
//                                     <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <div className="text-xs font-bold text-gymfinity-900">New Member</div>
//                                     <div className="text-[10px] text-gray-400">Just signed up!</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WhyGymfinity;




















// import { CheckCircle, Users, Fingerprint, BarChart3 } from "lucide-react";

// const benefits = [
//   {
//     icon: <Users size={24} />,
//     title: "Simple Member Management",
//     description:
//       "Add, update, and manage all your gym members in one place. Instantly see paid, unpaid, and expiring memberships.",
//   },
//   {
//     icon: <Fingerprint size={24} />,
//     title: "Fingerprint Attendance",
//     description:
//       "Connect attendance machines and automatically track member check-ins without manual registers.",
//   },
//   {
//     icon: <BarChart3 size={24} />,
//     title: "Powerful Reports",
//     description:
//       "Track gym revenue, member growth, and attendance with clear dashboards and reports.",
//   },
// ];

// const stats = [
//   { value: "All-in-One", label: "Gym Management System" },
//   { value: "Cloud", label: "Secure Data Storage" },
//   { value: "Fast", label: "Quick Member Management" },
//   { value: "24/7", label: "System Availability" },
// ];

// const WhyGymfinity = () => {
//   return (
//     <section
//       id="why-gymfinity"
//       className="py-24 bg-gradient-to-b from-gymfinity-100/40 to-white"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* HEADER */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900">
//             Why Gym Owners Choose{" "}
//             <span className="text-gymfinity-400">Gymfinity</span>
//           </h2>

//           <p className="mt-4 text-lg text-gray-500 leading-relaxed">
//             Gymfinity is designed specifically for gyms in Pakistan,
//             helping gym owners manage members, fees, attendance,
//             trainers, and reports — all from one powerful dashboard.
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
//           {stats.map((stat, i) => (
//             <div
//               key={i}
//               className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
//             >
//               <div className="text-2xl font-extrabold text-gymfinity-400">
//                 {stat.value}
//               </div>

//               <div className="text-sm text-gray-500 mt-1">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* BENEFITS */}
//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* LEFT BENEFITS */}
//           <div className="space-y-8">
//             {benefits.map((benefit, i) => (
//               <div key={i} className="flex gap-4">
                
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

//               </div>
//             ))}

//             {/* EXTRA POINTS */}
//             <div className="mt-8 space-y-3">

//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <CheckCircle className="text-green-500" size={18} />
//                 Track paid and unpaid members instantly
//               </div>

//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <CheckCircle className="text-green-500" size={18} />
//                 Access your gym data from anywhere
//               </div>

//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <CheckCircle className="text-green-500" size={18} />
//                 No more manual registers or paperwork
//               </div>

//             </div>

//           </div>

//           {/* RIGHT VISUAL */}
//           <div className="relative">

//             <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">

//               <div className="mb-4 text-sm font-bold text-gymfinity-900">
//                 Gymfinity Dashboard Preview
//               </div>

//               {/* Fake UI preview bars */}
//               <div className="space-y-3">

//                 <div className="h-4 bg-gymfinity-200 rounded"></div>
//                 <div className="h-4 bg-gymfinity-300 rounded w-5/6"></div>
//                 <div className="h-4 bg-gymfinity-200 rounded w-4/6"></div>

//                 <div className="grid grid-cols-3 gap-3 pt-4">

//                   <div className="bg-gymfinity-100 h-20 rounded-lg"></div>
//                   <div className="bg-gymfinity-200 h-20 rounded-lg"></div>
//                   <div className="bg-gymfinity-300 h-20 rounded-lg"></div>

//                 </div>

//               </div>

//             </div>

//             {/* FLOATING CARD */}
//             <div className="absolute -top-4 -right-4 bg-white shadow-lg border border-gray-100 rounded-xl p-4">

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

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyGymfinity;























// import { Users, Fingerprint, BarChart3, Headphones, Cpu } from "lucide-react";
// import dashboard from "../Assets/dashboard.png"

// const stats = [
//   { value: "All-in-One", label: "Gym Management System" },
//   { value: "Cloud", label: "Secure Data Storage" },
//   { value: "Fast", label: "Quick Member Management" },
//   { value: "24/7", label: "System Availability" },
// ];

// const benefits = [
//   {
//     icon: <Users size={24} />,
//     title: "Simple Member Management",
//     description:
//       "Add, update, and manage all your gym members in one place. Instantly see paid, unpaid, and expiring memberships.",
//   },
//   {
//     icon: <Fingerprint size={24} />,
//     title: "Fingerprint Attendance",
//     description:
//       "Connect attendance machines and automatically track member check-ins without manual registers.",
//   },
//   {
//     icon: <BarChart3 size={24} />,
//     title: "Powerful Reports",
//     description:
//       "Track gym revenue, member growth, and attendance with clear dashboards and reports.",
//   },
//   {
//     icon: <Headphones size={24} />,
//     title: "24/7 Customer Support",
//     description:
//       "Our team is available to help you anytime with setup, troubleshooting, and system guidance.",
//   },
//   {
//     icon: <Cpu size={24} />,
//     title: "Built with Modern MERN Technology",
//     description:
//       "Gymfinity is built by expert engineers using modern MERN stack technology ensuring speed, stability, and scalability.",
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
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
//             Why Gym Owners Choose{" "}
//             <span className="text-gymfinity-400">GymFinity</span>
//              <span> </span> ?
//           </h2>

//           <p className="mt-4 text-lg text-gray-500 leading-relaxed">
//             Gymfinity is designed specifically for gyms in Pakistan, helping gym
//             owners manage members, fees, attendance, trainers, and reports
//             all from one powerful dashboard.
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
//             >
//               <div className="text-2xl font-extrabold text-gymfinity-400">
//                 {stat.value}
//               </div>

//               <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* MAIN CONTENT */}
//         <div className="grid lg:grid-cols-2 gap-14 items-center">
//           {/* BENEFITS LEFT */}
//           <div className="space-y-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="flex gap-4">
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
//               </div>
//             ))}
//           </div>

//           {/* RIGHT DASHBOARD PREVIEW */}
//           <div className="relative">
//             <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
//               {/* Mac style top bar */}
//               <div className="flex items-center gap-2 px-4 py-2 bg-gray-100">
//                 <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                 <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                 <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//               </div>

//               {/* Dashboard Screenshot */}
//               <img
//                 src={dashboard}
//                 alt="Gymfinity Dashboard"
//                 className="w-full object-cover"
//               />
//             </div>

//             {/* Floating card */}
//             <div className="absolute -top-4 -right-4 bg-white shadow-lg border border-gray-100 rounded-xl p-4">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
//                   <svg
//                     className="w-4 h-4 text-green-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
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
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyGymfinity;




















// import { Users, Fingerprint, BarChart3, Headphones, Cpu } from "lucide-react";
// import dashboard from "../Assets/dashboard.png";

// const stats = [
//   { value: "All-in-One", label: "Gym Management System" },
//   { value: "Cloud", label: "Secure Data Storage" },
//   { value: "Fast", label: "Quick Member Management" },
//   { value: "24/7", label: "System Availability" },
// ];

// const benefits = [
//   {
//     icon: <Users size={24} />,
//     title: "Simple Member Management",
//     description:
//       "Add, update, and manage all your gym members in one place. Instantly see paid, unpaid, and expiring memberships.",
//   },
//   {
//     icon: <Fingerprint size={24} />,
//     title: "Fingerprint Attendance",
//     description:
//       "Connect attendance machines and automatically track member check-ins without manual registers.",
//   },
//   {
//     icon: <BarChart3 size={24} />,
//     title: "Powerful Reports",
//     description:
//       "Track gym revenue, member growth, and attendance with clear dashboards and reports.",
//   },
//   {
//     icon: <Headphones size={24} />,
//     title: "24/7 Customer Support",
//     description:
//       "Our team is available to help you anytime with setup, troubleshooting, and system guidance.",
//   },
//   {
//     icon: <Cpu size={24} />,
//     title: "Built with Modern MERN Technology",
//     description:
//       "Gymfinity is built by expert engineers using modern MERN stack technology ensuring speed, stability, and scalability.",
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
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
//             Why Gym Owners Choose{" "}
//             <span className="text-gymfinity-400">GymFinity</span> ?
//           </h2>

//           <p className="mt-4 text-lg text-gray-500 leading-relaxed">
//             Gymfinity is designed specifically for gyms in Pakistan, helping gym
//             owners manage members, fees, attendance, trainers, and reports
//             all from one powerful dashboard.
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
//             >
//               <div className="text-2xl font-extrabold text-gymfinity-400">
//                 {stat.value}
//               </div>

//               <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* MAIN CONTENT */}
//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* BENEFITS */}
//           <div className="space-y-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="flex gap-4">
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
//               </div>
//             ))}
//           </div>

//           {/* DASHBOARD */}
//           <div className="relative">

//             <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

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

//             {/* MEMBER JOINED */}
//             <div className="absolute -top-4 -right-4 bg-white shadow-lg border border-gray-100 rounded-xl p-3">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
//                   ✓
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

//             {/* ACCESS ALLOWED */}
//             <div className="absolute top-24 -left-6 bg-white shadow-lg border border-gray-100 rounded-xl p-3">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                   🔓
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

//             {/* FEES PAID */}
//             <div className="absolute bottom-14 -left-4 bg-white shadow-lg border border-gray-100 rounded-xl p-3">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
//                   💰
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

//             {/* REMINDER SENT */}
//             <div className="absolute bottom-2 right-10 bg-white shadow-lg border border-gray-100 rounded-xl p-3">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
//                   📩
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

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyGymfinity;


















// import {
//   Users,
//   Fingerprint,
//   BarChart3,
//   Headphones,
//   Cpu,
//   CheckCircle,
//   Unlock,
//   Banknote,
//   Bell
// } from "lucide-react";

// import dashboard from "../Assets/dashboard.png";

// const stats = [
//   { value: "All-in-One", label: "Gym Management System" },
//   { value: "Cloud", label: "Secure Data Storage" },
//   { value: "Fast", label: "Quick Member Management" },
//   { value: "24/7", label: "System Availability" },
// ];

// const benefits = [
//   {
//     icon: <Users size={24} />,
//     title: "Simple Member Management",
//     description:
//       "Add, update, and manage all your gym members in one place. Instantly see paid, unpaid, and expiring memberships.",
//   },
//   {
//     icon: <Fingerprint size={24} />,
//     title: "Fingerprint Attendance",
//     description:
//       "Connect attendance machines and automatically track member check-ins without manual registers.",
//   },
//   {
//     icon: <BarChart3 size={24} />,
//     title: "Powerful Reports",
//     description:
//       "Track gym revenue, member growth, and attendance with clear dashboards and reports.",
//   },
//   {
//     icon: <Headphones size={24} />,
//     title: "24/7 Customer Support",
//     description:
//       "Our team is available to help you anytime with setup, troubleshooting, and system guidance.",
//   },
//   {
//     icon: <Cpu size={24} />,
//     title: "Built with Modern MERN Technology",
//     description:
//       "Gymfinity is built by expert engineers using modern MERN stack technology ensuring speed, stability, and scalability.",
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
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
//             Why Gym Owners Choose{" "}
//             <span className="text-gymfinity-400">GymFinity</span> ?
//           </h2>

//           <p className="mt-4 text-lg text-gray-500 leading-relaxed">
//             Gymfinity is designed specifically for gyms in Pakistan, helping gym
//             owners manage members, fees, attendance, trainers, and reports
//             all from one powerful dashboard.
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
//             >
//               <div className="text-2xl font-extrabold text-gymfinity-400">
//                 {stat.value}
//               </div>

//               <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* MAIN CONTENT */}
//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* BENEFITS */}
//           <div className="space-y-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="flex gap-4">
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
//               </div>
//             ))}
//           </div>

//           {/* DASHBOARD */}
//           <div className="relative">

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

//             {/* MEMBER JOINED */}
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

//             {/* ACCESS ALLOWED */}
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

//             {/* FEES PAID */}
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

//             {/* REMINDER SENT */}
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

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyGymfinity;













import { motion } from "framer-motion";

import {
  Users,
  Fingerprint,
  BarChart3,
  Headphones,
  Cpu,
  CheckCircle,
  Unlock,
  Banknote,
  Bell
} from "lucide-react";

import dashboard from "../Assets/dashboard.png";

const stats = [
  { value: "All-in-One", label: "Gym Management System" },
  { value: "Cloud", label: "Secure Data Storage" },
  { value: "Fast", label: "Quick Member Management" },
  { value: "24/7", label: "System Availability" },
];

const benefits = [
  {
    icon: <Users size={24} />,
    title: "Simple Member Management",
    description:
      "Add, update, and manage all your gym members in one place. Instantly see paid, unpaid, and expiring memberships.",
  },
  {
    icon: <Fingerprint size={24} />,
    title: "Fingerprint Attendance",
    description:
      "Connect attendance machines and automatically track member check-ins without manual registers.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Powerful Reports",
    description:
      "Track gym revenue, member growth, and attendance with clear dashboards and reports.",
  },
  {
    icon: <Headphones size={24} />,
    title: "24/7 Customer Support",
    description:
      "Our team is available to help you anytime with setup, troubleshooting, and system guidance.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Built with Modern MERN Technology",
    description:
      "Gymfinity is built by expert engineers using modern MERN stack technology ensuring speed, stability, and scalability.",
  },
];

const WhyGymfinity = () => {
  return (
    <section
      id="why-gymfinity"
      className="pt-12 pb-20 bg-gradient-to-b from-gymfinity-100/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
            all from one powerful dashboard.
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

          {/* DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden hover:scale-[1.02] transition duration-500">

              {/* mac style bar */}
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

            {/* Floating Cards */}

            {/* MEMBER JOINED */}
            <div className="absolute -top-4 -right-4 bg-white shadow-lg border border-gray-100 rounded-xl p-3 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gymfinity-900">
                    Member Joined
                  </div>
                  <div className="text-[10px] text-gray-400">
                    New registration added
                  </div>
                </div>
              </div>
            </div>

            {/* ACCESS ALLOWED */}
            <div className="absolute top-24 -left-6 bg-white shadow-lg border border-gray-100 rounded-xl p-3 animate-float [animation-delay:1s]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Unlock size={16} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gymfinity-900">
                    Access Allowed
                  </div>
                  <div className="text-[10px] text-gray-400">
                    Member check-in success
                  </div>
                </div>
              </div>
            </div>

            {/* FEES PAID */}
            <div className="absolute bottom-16 -left-4 bg-white shadow-lg border border-gray-100 rounded-xl p-3 animate-float [animation-delay:2s]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Banknote size={16} className="text-yellow-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gymfinity-900">
                    Fees Paid
                  </div>
                  <div className="text-[10px] text-gray-400">
                    Monthly payment received
                  </div>
                </div>
              </div>
            </div>

            {/* REMINDER SENT */}
            <div className="absolute bottom-2 right-10 bg-white shadow-lg border border-gray-100 rounded-xl p-3 animate-float [animation-delay:3s]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Bell size={16} className="text-purple-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gymfinity-900">
                    Reminder Sent
                  </div>
                  <div className="text-[10px] text-gray-400">
                    Payment reminder delivered
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

export default WhyGymfinity;