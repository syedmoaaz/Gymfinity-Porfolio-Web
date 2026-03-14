// const plans = [
//     {
//         name: 'Starter',
//         price: '29',
//         description: 'Perfect for small gyms just getting started.',
//         features: [
//             'Up to 100 members',
//             'Basic scheduling',
//             'Payment processing',
//             'Email support',
//             'Mobile app access',
//         ],
//         popular: false,
//     },
//     {
//         name: 'Professional',
//         price: '79',
//         description: 'Ideal for growing gyms that need more power.',
//         features: [
//             'Up to 500 members',
//             'Advanced scheduling',
//             'Financial reports',
//             'Priority support',
//             'Custom branding',
//             'API access',
//             'Staff management',
//         ],
//         popular: true,
//     },
//     {
//         name: 'Enterprise',
//         price: '149',
//         description: 'For large-scale operations and gym chains.',
//         features: [
//             'Unlimited members',
//             'Multi-location support',
//             'Advanced analytics',
//             'Dedicated account manager',
//             'White-label solution',
//             'Custom integrations',
//             'SLA guarantee',
//             '24/7 phone support',
//         ],
//         popular: false,
//     },
// ];

// const Pricing = () => {
//     return (
//         <section id="pricing" className="py-20 lg:py-28 bg-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Section Header */}
//                 <div className="text-center max-w-3xl mx-auto mb-16">
//                     <span className="inline-block px-4 py-1.5 bg-gymfinity-100 text-gymfinity-400 text-sm font-semibold rounded-full mb-4">
//                         Pricing
//                     </span>
//                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
//                         Simple,{' '}
//                         <span className="text-gymfinity-400">transparent</span> pricing
//                     </h2>
//                     <p className="mt-4 text-gray-500 text-lg leading-relaxed">
//                         No hidden fees. Start with a 14-day free trial. Cancel anytime.
//                     </p>
//                 </div>

//                 {/* Pricing Cards */}
//                 <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
//                     {plans.map((plan, index) => (
//                         <div
//                             key={index}
//                             className={`relative rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 ${plan.popular
//                                     ? 'bg-gymfinity-900 text-white shadow-2xl shadow-gymfinity-900/30 scale-[1.03] lg:scale-105'
//                                     : 'bg-white border border-gray-200 hover:border-gymfinity-400/30 hover:shadow-xl'
//                                 }`}
//                         >
//                             {/* Popular Badge */}
//                             {plan.popular && (
//                                 <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
//                                     <span className="px-4 py-1 bg-gymfinity-400 text-white text-xs font-bold rounded-full shadow-lg shadow-gymfinity-400/30">
//                                         Most Popular
//                                     </span>
//                                 </div>
//                             )}

//                             <div className="mb-6">
//                                 <h3 className={`text-lg font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gymfinity-900'}`}>
//                                     {plan.name}
//                                 </h3>
//                                 <p className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
//                                     {plan.description}
//                                 </p>
//                             </div>

//                             <div className="mb-6">
//                                 <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-gymfinity-900'}`}>
//                                     ${plan.price}
//                                 </span>
//                                 <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>/month</span>
//                             </div>

//                             <ul className="space-y-3 mb-8">
//                                 {plan.features.map((feature, i) => (
//                                     <li key={i} className="flex items-center gap-3 text-sm">
//                                         <svg className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-gymfinity-400' : 'text-gymfinity-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
//                                         </svg>
//                                         <span className={plan.popular ? 'text-gray-200' : 'text-gray-600'}>{feature}</span>
//                                     </li>
//                                 ))}
//                             </ul>

//                             <a
//                                 href="#contact"
//                                 className={`block w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${plan.popular
//                                         ? 'bg-gymfinity-400 text-white shadow-lg shadow-gymfinity-400/30 hover:bg-gymfinity-300 hover:shadow-xl'
//                                         : 'bg-gymfinity-100 text-gymfinity-400 hover:bg-gymfinity-400 hover:text-white hover:shadow-lg hover:shadow-gymfinity-400/25'
//                                     }`}
//                             >
//                                 Get Started
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Pricing;




















// import { useState } from "react";

// const plans = [
//   {
//     name: "Starter",
//     monthly: 4999,
//     annual: 2499,
//     description: "Perfect for small gyms just getting started.",
//     features: [
//       "Up to 100 members",
//       "Basic member management",
//       "Attendance tracking",
//       "Revenue dashboard",
//       "Email support",
//     ],
//     popular: false,
//   },
//   {
//     name: "Professional",
//     monthly: 7499,
//     annual: 3749,
//     description: "Best for growing gyms with more members.",
//     features: [
//       "Up to 500 members",
//       "Attendance machine support",
//       "Financial reports",
//       "Trainer management",
//       "Priority support",
//     ],
//     popular: true,
//   },
//   {
//     name: "Enterprise",
//     monthly: 9999,
//     annual: 4999,
//     description: "For large gyms and multiple branches.",
//     features: [
//       "Unlimited members",
//       "Multi-branch support",
//       "Advanced analytics",
//       "Custom integrations",
//       "24/7 support",
//     ],
//     popular: false,
//   },
// ];

// const Pricing = () => {
//   const [billing, setBilling] = useState("monthly");

//   return (
//     <section id="pricing" className="py-20 lg:py-28 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">

//         {/* HEADER */}
//         <div className="text-center max-w-3xl mx-auto mb-12">

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
//             Simple &{" "}
//             <span className="text-gymfinity-400">transparent pricing</span>
//           </h2>

//           <p className="mt-4 text-gray-500 text-lg">
//             Choose the plan that fits your gym. Switch between monthly and annual billing.
//           </p>

//         </div>

//         {/* BILLING TOGGLE */}
//         <div className="flex justify-center mb-14">

//           <div className="relative flex bg-gray-100 rounded-full p-1">

//             <button
//               onClick={() => setBilling("monthly")}
//               className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
//                 billing === "monthly"
//                   ? "bg-gymfinity-400 text-white shadow"
//                   : "text-gray-600"
//               }`}
//             >
//               Monthly
//             </button>

//             <button
//               onClick={() => setBilling("annual")}
//               className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
//                 billing === "annual"
//                   ? "bg-gymfinity-400 text-white shadow"
//                   : "text-gray-600"
//               }`}
//             >
//               Annual
//             </button>

//           </div>

//         </div>

//         {/* PRICING CARDS */}
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

//           {plans.map((plan, index) => {

//             const price =
//               billing === "monthly" ? plan.monthly : plan.annual;

//             return (
//               <div
//                 key={index}
//                 className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
//                   plan.popular
//                     ? "bg-gymfinity-900 text-white shadow-2xl scale-105"
//                     : "bg-white border border-gray-200 hover:shadow-xl"
//                 }`}
//               >

//                 {/* POPULAR BADGE */}
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//                     <span className="px-4 py-1 bg-gymfinity-400 text-white text-xs font-bold rounded-full">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 {/* PLAN NAME */}
//                 <h3 className={`text-xl font-bold mb-2 ${
//                   plan.popular ? "text-white" : "text-gymfinity-900"
//                 }`}>
//                   {plan.name}
//                 </h3>

//                 <p className={`text-sm mb-6 ${
//                   plan.popular ? "text-gray-300" : "text-gray-500"
//                 }`}>
//                   {plan.description}
//                 </p>

//                 {/* PRICE */}
//                 <div className="mb-6">

//                   <span className={`text-5xl font-extrabold ${
//                     plan.popular ? "text-white" : "text-gymfinity-900"
//                   }`}>
//                     Rs {price}
//                   </span>

//                   <span className={`text-sm ml-1 ${
//                     plan.popular ? "text-gray-300" : "text-gray-500"
//                   }`}>
//                     /month
//                   </span>

//                   {billing === "annual" && (
//                     <div className="text-xs text-green-500 mt-1 font-medium">
//                       50% discount applied
//                     </div>
//                   )}

//                 </div>

//                 {/* FEATURES */}
//                 <ul className="space-y-3 mb-8">

//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-3 text-sm">

//                       <svg
//                         className="w-4 h-4 text-gymfinity-400"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2.5}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>

//                       <span className={
//                         plan.popular ? "text-gray-200" : "text-gray-600"
//                       }>
//                         {feature}
//                       </span>

//                     </li>
//                   ))}

//                 </ul>

//                 {/* BUTTON */}
//                 <a
//                   href="#contact"
//                   className={`block text-center py-3 rounded-full font-semibold text-sm transition ${
//                     plan.popular
//                       ? "bg-gymfinity-400 text-white hover:bg-gymfinity-300"
//                       : "bg-gymfinity-100 text-gymfinity-400 hover:bg-gymfinity-400 hover:text-white"
//                   }`}
//                 >
//                   Get Started
//                 </a>

//               </div>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Pricing;























// import { useState } from "react";
// import { motion } from "framer-motion";

// const plans = [
//   {
//     name: "Starter",
//     monthly: 4999,
//     annual: 2499,
//     description: "Perfect for small gyms just getting started.",
//     features: [
//       "Up to 100 members",
//       "Basic scheduling",
//       "Payment tracking",
//       "Attendance system",
//       "Email support",
//     ],
//     popular: false,
//   },
//   {
//     name: "Professional",
//     monthly: 7499,
//     annual: 3749,
//     description: "Best for growing gyms with more members.",
//     features: [
//       "Up to 500 members",
//       "Advanced reports",
//       "Trainer management",
//       "WhatsApp reminders",
//       "Priority support",
//     ],
//     popular: true,
//   },
//   {
//     name: "Enterprise",
//     monthly: 9999,
//     annual: 4999,
//     description: "For large gyms and multiple branches.",
//     features: [
//       "Unlimited members",
//       "Multi-branch support",
//       "Advanced analytics",
//       "Custom integrations",
//       "24/7 support",
//     ],
//     popular: false,
//   },
// ];

// const Pricing = () => {

//   const [billing, setBilling] = useState("monthly");

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <section
//       id="pricing"
//       className="pt-10 pb-20 lg:pt-16 lg:pb-28 bg-white"
//     >

//       <div className="max-w-7xl mx-auto px-6 lg:px-10">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-10"
//         >

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
//             Simple &{" "}
//             <span className="text-gymfinity-400">
//               transparent pricing
//             </span>
//           </h2>

//           <p className="mt-4 text-gray-500 text-lg leading-relaxed">
//             Choose the plan that fits your gym. Switch between monthly and annual billing.
//           </p>

//         </motion.div>


//         {/* BILLING TOGGLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex justify-center mb-12"
//         >

//           <div className="relative flex bg-gray-100 rounded-full p-1 shadow-inner">

//             <button
//               onClick={() => setBilling("monthly")}
//               className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
//                 billing === "monthly"
//                   ? "bg-gymfinity-400 text-white shadow"
//                   : "text-gray-600"
//               }`}
//             >
//               Monthly
//             </button>

//             <button
//               onClick={() => setBilling("annual")}
//               className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
//                 billing === "annual"
//                   ? "bg-gymfinity-400 text-white shadow"
//                   : "text-gray-600"
//               }`}
//             >
//               Annual
//             </button>

//           </div>

//         </motion.div>


//         {/* CARDS */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
//         >

//           {plans.map((plan, index) => {

//             const price =
//               billing === "monthly" ? plan.monthly : plan.annual;

//             return (
//               <motion.div
//                 key={index}
//                 variants={item}
//             className={`relative rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
//   plan.popular
//     ? "bg-gymfinity-900 text-white shadow-2xl scale-110 z-10 p-10"
//     : "bg-white border border-gray-200 hover:border-gymfinity-400/30 hover:shadow-xl p-8"
// }`}
//               >

//                 {/* Popular Badge */}
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//                     <span className="px-4 py-1 bg-gymfinity-400 text-white text-xs font-bold rounded-full shadow">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 <h3 className={`text-xl font-bold mb-2 ${
//                   plan.popular ? "text-white" : "text-gymfinity-900"
//                 }`}>
//                   {plan.name}
//                 </h3>

//                 <p className={`text-sm mb-6 ${
//                   plan.popular ? "text-gray-300" : "text-gray-500"
//                 }`}>
//                   {plan.description}
//                 </p>

//                 {/* PRICE */}
//                 <div className="mb-6">

//                   <span className={`text-5xl font-extrabold ${
//                     plan.popular ? "text-white" : "text-gymfinity-900"
//                   }`}>
//                     Rs {price}
//                   </span>

//                   <span className={`text-sm ml-1 ${
//                     plan.popular ? "text-gray-300" : "text-gray-500"
//                   }`}>
//                     /month
//                   </span>

//                   {billing === "annual" && (
//                     <div className="text-xs text-green-500 mt-1 font-medium">
//                       50% discount applied
//                     </div>
//                   )}

//                 </div>

//                 {/* FEATURES */}
//                 <ul className="space-y-3 mb-8">

//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-3 text-sm">

//                       <svg
//                         className="w-4 h-4 text-gymfinity-400"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2.5}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>

//                       <span className={
//                         plan.popular ? "text-gray-200" : "text-gray-600"
//                       }>
//                         {feature}
//                       </span>

//                     </li>
//                   ))}

//                 </ul>

//                 {/* BUTTON */}
//                 <a
//                   href="#contact"
//                   className={`block text-center py-3 rounded-full font-semibold text-sm transition ${
//                     plan.popular
//                       ? "bg-gymfinity-400 text-white hover:bg-gymfinity-300"
//                       : "bg-gymfinity-100 text-gymfinity-400 hover:bg-gymfinity-400 hover:text-white"
//                   }`}
//                 >
//                   Get Started
//                 </a>

//               </motion.div>
//             );

//           })}

//         </motion.div>

//       </div>

//     </section>
//   );
// };

// export default Pricing;











// import { useState } from "react";
// import { motion } from "framer-motion";

// const plans = [
//   {
//     name: "Starter",
//     monthly: 4999,
//     annual: 2499,
//     description: "Perfect for gyms just getting started.",
//     features: [
//       "Up to 100 members",
//       "Basic scheduling",
//       "Payment tracking",
//       "Attendance system",
//       "Email support",
//     ],
//     popular: false,
//   },
//   {
//     name: "Professional",
//     monthly: 7499,
//     annual: 3749,
//     description: "Best for growing gyms with more members.",
//     features: [
//       "Up to 500 members",
//       "Advanced reports",
//       "Trainer management",
//       "WhatsApp reminders",
//       "Priority support",
//     ],
//     popular: true,
//   },
//   {
//     name: "Enterprise",
//     monthly: 9999,
//     annual: 4999,
//     description: "For large gyms and multiple branches.",
//     features: [
//       "Unlimited members",
//       "Multi-branch support",
//       "Advanced analytics",
//       "Custom integrations",
//       "24/7 support",
//     ],
//     popular: false,
//   },
// ];

// const Pricing = () => {

//   const [billing, setBilling] = useState("monthly");

//   return (
//     <section id="pricing" className="pt-10 pb-24 bg-white">

//       <div className="max-w-7xl mx-auto px-6 lg:px-10">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-10"
//         >

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900">
//             Simple &{" "}
//             <span className="text-gymfinity-400">
//               transparent pricing
//             </span>
//           </h2>

//           <p className="mt-4 text-gray-500 text-lg">
//             Choose the plan that fits your gym.
//           </p>

//         </motion.div>


//         {/* BILLING TOGGLE */}
//         <div className="flex justify-center mb-14">

//           <div className="flex bg-gray-100 rounded-full p-1 shadow-inner">

//             <button
//               onClick={() => setBilling("monthly")}
//               className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
//                 billing === "monthly"
//                   ? "bg-gymfinity-400 text-white shadow"
//                   : "text-gray-600"
//               }`}
//             >
//               Monthly
//             </button>

//             <button
//               onClick={() => setBilling("annual")}
//               className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
//                 billing === "annual"
//                   ? "bg-gymfinity-400 text-white shadow"
//                   : "text-gray-600"
//               }`}
//             >
//               Annual
//             </button>

//           </div>

//         </div>


//         {/* PRICING CARDS */}
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

//           {plans.map((plan, index) => {

//             const price =
//               billing === "monthly" ? plan.monthly : plan.annual;

//             return (

//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ scale: 1.05 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.35 }}
//                 className={`relative rounded-2xl transition-all duration-300
//                 ${
//                   plan.popular
//                     ? "bg-gymfinity-900 text-white shadow-2xl scale-105 p-10"
//                     : "bg-white border border-gray-200 p-8"
//                 }`}
//               >

//                 {/* POPULAR BADGE */}
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//                     <span className="px-4 py-1 bg-gymfinity-400 text-white text-xs font-bold rounded-full">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 {/* TITLE */}
//                 <h3 className={`text-xl font-bold mb-2 ${
//                   plan.popular ? "text-white" : "text-gymfinity-900"
//                 }`}>
//                   {plan.name}
//                 </h3>

//                 <p className={`text-sm mb-6 ${
//                   plan.popular ? "text-gray-300" : "text-gray-500"
//                 }`}>
//                   {plan.description}
//                 </p>

//                 {/* PRICE */}
//                 <div className="mb-6 flex items-end gap-1">

//                   <span className={`text-xl font-semibold ${
//                     plan.popular ? "text-gray-200" : "text-gray-500"
//                   }`}>
//                     Rs
//                   </span>

//                   <span className={`text-5xl font-extrabold leading-none ${
//                     plan.popular ? "text-white" : "text-gymfinity-900"
//                   }`}>
//                     {price}
//                   </span>

//                   <span className={`text-sm ml-1 ${
//                     plan.popular ? "text-gray-300" : "text-gray-500"
//                   }`}>
//                     /month
//                   </span>

//                 </div>

//                 {/* ANNUAL DISCOUNT TEXT */}
//                 {billing === "annual" && (
//                   <div className="text-green-500 text-sm font-medium mb-4">
//                     50% discount applied
//                   </div>
//                 )}

//                 {/* FEATURES */}
//                 <ul className="space-y-3 mb-8">

//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-3 text-sm">

//                       <svg
//                         className="w-4 h-4 text-gymfinity-400"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2.5}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>

//                       <span className={
//                         plan.popular ? "text-gray-200" : "text-gray-600"
//                       }>
//                         {feature}
//                       </span>

//                     </li>
//                   ))}

//                 </ul>

//                 {/* BUTTON */}
//                 <a
//                   href="#contact"
//                   className={`block text-center py-3 rounded-full font-semibold text-sm transition ${
//                     plan.popular
//                       ? "bg-gymfinity-400 text-white hover:bg-gymfinity-300"
//                       : "bg-gymfinity-100 text-gymfinity-400 hover:bg-gymfinity-400 hover:text-white"
//                   }`}
//                 >
//                   Get Started
//                 </a>

//               </motion.div>

//             );
//           })}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Pricing;















// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const plans = [
//   {
//     tier: "Starter",
//     brand: "GymFinity",
//     monthly: 4999,
//     annual: 2499,
//     description: "Perfect for small gyms just getting started.",
//     features: [
//       "Up to 100 members",
//       "Basic scheduling",
//       "Payment tracking",
//       "Attendance system",
//       "Email support",
//     ],
//     popular: false,
//   },
//   {
//     tier: "Professional",
//     brand: "GymFinity Pro",
//     monthly: 7499,
//     annual: 3749,
//     description: "Best for growing gyms with more members.",
//     features: [
//       "Up to 500 members",
//       "Advanced reports",
//       "Trainer management",
//       "WhatsApp reminders",
//       "Priority support",
//     ],
//     popular: true,
//   },
//   {
//     tier: "Enterprise",
//     brand: "GymFinity Elite",
//     monthly: 9999,
//     annual: 4999,
//     description: "For large gyms and multiple branches.",
//     features: [
//       "Unlimited members",
//       "Multi-branch support",
//       "Advanced analytics",
//       "Custom integrations",
//       "24/7 support",
//     ],
//     popular: false,
//   },
// ];

// const Pricing = () => {

//   const [billing, setBilling] = useState("monthly");

//   return (
//     <section id="pricing" className="pt-10 pb-28 bg-white">

//       <div className="max-w-7xl mx-auto px-6 lg:px-10">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity:0, y:40 }}
//           whileInView={{ opacity:1, y:0 }}
//           viewport={{ once:true }}
//           transition={{ duration:0.6 }}
//           className="text-center max-w-3xl mx-auto mb-10"
//         >

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900">
//             Simple &{" "}
//             <span className="text-gymfinity-400">
//               transparent pricing
//             </span>
//           </h2>

//           <p className="mt-4 text-gray-500 text-lg">
//             Choose the plan that fits your gym.
//           </p>

//         </motion.div>


//         {/* BILLING TOGGLE */}
//         <div className="flex justify-center mb-14">

//           <div className="flex bg-gray-100 rounded-full p-1 shadow-inner">

//             <button
//               onClick={()=>setBilling("monthly")}
//               className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
//                 billing==="monthly"
//                   ? "bg-gymfinity-400 text-white shadow"
//                   : "text-gray-600"
//               }`}
//             >
//               Monthly
//             </button>

//             <button
//               onClick={()=>setBilling("annual")}
//               className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
//                 billing==="annual"
//                   ? "bg-gymfinity-400 text-white shadow"
//                   : "text-gray-600"
//               }`}
//             >
//               Annual
//             </button>

//           </div>

//         </div>


//         {/* CARDS */}
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

//           {plans.map((plan,index)=>{

//             const price =
//               billing==="monthly"
//                 ? plan.monthly
//                 : plan.annual;

//             return (

//            <motion.div
//   key={index}
//   initial={{ opacity:0, y:40 }}
//   whileInView={{ opacity:1, y:0 }}
//   whileHover={{ scale:1.04 }}
//   viewport={{ once:true }}
//   transition={{ duration:0.3 }}
//   className={`relative rounded-2xl transition-all duration-300
//   ${
//     plan.popular
//       ? "bg-gymfinity-900 text-white shadow-xl scale-105 p-10 hover:shadow-2xl"
//       : "bg-white border border-gray-200 p-8 hover:shadow-xl"
//   }`}
// >


//                 {/* BADGE */}
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//                     <span className="px-4 py-1 bg-gymfinity-400 text-white text-xs font-bold rounded-full shadow">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 {/* TIER NAME */}
//                 <h3 className={`text-lg font-semibold ${
//                   plan.popular ? "text-gray-200" : "text-gray-600"
//                 }`}>
//                   {plan.tier}
//                 </h3>

//                 {/* BRAND NAME */}
//                 <h4 className="text-2xl font-bold text-gymfinity-400 mb-2">
//                   {plan.brand}
//                 </h4>

//                 <p className={`text-sm mb-6 ${
//                   plan.popular ? "text-gray-300" : "text-gray-500"
//                 }`}>
//                   {plan.description}
//                 </p>


//                 {/* PRICE */}
//                 <div className="mb-5 flex items-end gap-1">

//                   <span className={`text-xl ${
//                     plan.popular ? "text-gray-300" : "text-gray-500"
//                   }`}>
//                     Rs
//                   </span>

//                   <AnimatePresence mode="wait">

//                     <motion.span
//                       key={price}
//                       initial={{ opacity:0, y:10 }}
//                       animate={{ opacity:1, y:0 }}
//                       exit={{ opacity:0, y:-10 }}
//                       transition={{ duration:0.25 }}
//                       className={`text-5xl font-extrabold ${
//                         plan.popular ? "text-white" : "text-gymfinity-900"
//                       }`}
//                     >
//                       {price}
//                     </motion.span>

//                   </AnimatePresence>

//                   <span className={`text-sm ml-1 ${
//                     plan.popular ? "text-gray-300" : "text-gray-500"
//                   }`}>
//                     /month
//                   </span>

//                 </div>


//                 {/* SAVE BADGE */}
//                 {billing==="annual" && (
//                   <div className="text-green-500 text-sm font-medium mb-5">
//                     Save 50%
//                   </div>
//                 )}


//                 {/* FEATURES */}
//                 <ul className="space-y-3 mb-8">

//                   {plan.features.map((feature,i)=>(
//                     <li key={i} className="flex items-center gap-3 text-sm">

//                       <svg
//                         className="w-4 h-4 text-gymfinity-400"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2.5}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>

//                       <span className={
//                         plan.popular ? "text-gray-200" : "text-gray-600"
//                       }>
//                         {feature}
//                       </span>

//                     </li>
//                   ))}

//                 </ul>


//                 {/* BUTTON */}
//                 <a
//                   href="#contact"
//                   className={`block text-center py-3 rounded-full font-semibold text-sm transition ${
//                     plan.popular
//                       ? "bg-gymfinity-400 text-white hover:bg-gymfinity-300"
//                       : "bg-gymfinity-100 text-gymfinity-400 hover:bg-gymfinity-400 hover:text-white"
//                   }`}
//                 >
//                   Get Started
//                 </a>

//               </motion.div>

//             );

//           })}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Pricing;






















import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    tier: "Starter",
    brand: "GymFinity",
    monthly: 4999,
    annual: 2499,
    description: "Perfect for small gyms just getting started.",
    features: [
      "Unlimited members",
      "Member management",
      "Membership plans",
      "Biometric attendance tracking",
      "Fee management",
      "Payment history",
      "Trainer & staff management",
      "Basic financial reports",
      "PDF Reports",
      "WhatsApp payment reminders",
      "Cloud dashboard access",
    ],
    popular: false,
  },
  {
    tier: "Professional",
    brand: "GymFinity Pro",
    monthly: 7499,
    annual: 3749,
    description: "Best for growing gyms with more members.",
  features: [
  "Everything in GymFinity",
  "Unlimited members",
  "Membership plans",
  "Biometric attendance tracking",
  "Trainer & staff management",
  "Payment tracking",
  "Advanced financial reports",
  "WhatsApp reminders automation",
  "PDF Reports",
  "Priority support",
  "**POS Billing + Receipt Printing**",
],
    popular: true,
  },
  {
    tier: "Enterprise",
    brand: "GymFinity Elite",
    monthly: 9999,
    annual: 4999,
    description: "For large gyms and multiple branches.",
   features: [
  "Everything in GymFinity Pro",
  "Unlimited members",
  "Biometric attendance tracking",
  "Trainer & staff management",
  "Multi-branch support",
  "Advanced analytics",
  "Priority support",
  "**RFID Door Access Control**",
  "**Excel + PDF Reports**",
  "**Custom Feature Integrations**",
],
    popular: false,
  },
];

const Pricing = () => {

  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="pt-10 pb-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900">
            Simple &{" "}
            <span className="text-gymfinity-400">
              transparent pricing
            </span>
          </h2>

          <p className="mt-4 text-gray-500 text-lg">
            Choose the plan that fits your gym.
          </p>

        </motion.div>


        {/* BILLING TOGGLE */}
        <div className="flex justify-center mb-14">

          <div className="flex bg-gray-100 rounded-full p-1 shadow-inner">

            <button
              onClick={()=>setBilling("monthly")}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
                billing==="monthly"
                  ? "bg-gymfinity-400 text-white shadow"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={()=>setBilling("annual")}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
                billing==="annual"
                  ? "bg-gymfinity-400 text-white shadow"
                  : "text-gray-600"
              }`}
            >
              Annual
            </button>

          </div>

        </div>


        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {plans.map((plan,index)=>{

            const price =
              billing==="monthly"
                ? plan.monthly
                : plan.annual;

            return (

           <motion.div
  key={index}
  initial={{ opacity:0, y:40 }}
  whileInView={{ opacity:1, y:0 }}
  whileHover={{ scale:1.04 }}
  viewport={{ once:true }}
  transition={{ duration:0.3 }}
  className={`relative rounded-2xl transition-all duration-300
  ${
    plan.popular
      ? "bg-gymfinity-900 text-white shadow-xl scale-105 p-10 hover:shadow-2xl"
      : "bg-white border border-gray-200 p-8 hover:shadow-xl"
  }`}
>

                {/* BADGE */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gymfinity-400 text-white text-xs font-bold rounded-full shadow">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* TIER NAME */}
                <h3 className={`text-lg font-semibold ${
                  plan.popular ? "text-gray-200" : "text-gray-600"
                }`}>
                  {plan.tier}
                </h3>

                {/* BRAND NAME */}
                <h4 className="text-2xl font-bold text-gymfinity-400 mb-2">
                  {plan.brand}
                </h4>

                <p className={`text-sm mb-6 ${
                  plan.popular ? "text-gray-300" : "text-gray-500"
                }`}>
                  {plan.description}
                </p>


                {/* PRICE */}
                <div className="mb-5 flex items-end gap-1">

                  <span className={`text-xl ${
                    plan.popular ? "text-gray-300" : "text-gray-500"
                  }`}>
                    Rs
                  </span>

                  <AnimatePresence mode="wait">

                    <motion.span
                      key={price}
                      initial={{ opacity:0, y:10 }}
                      animate={{ opacity:1, y:0 }}
                      exit={{ opacity:0, y:-10 }}
                      transition={{ duration:0.25 }}
                      className={`text-5xl font-extrabold ${
                        plan.popular ? "text-white" : "text-gymfinity-900"
                      }`}
                    >
                      {price}
                    </motion.span>

                  </AnimatePresence>

                  <span className={`text-sm ml-1 ${
                    plan.popular ? "text-gray-300" : "text-gray-500"
                  }`}>
                    /month
                  </span>

                </div>


                {/* SAVE BADGE */}
                {billing==="annual" && (
                  <div className="text-green-500 text-sm font-medium mb-5">
                    Save 50%
                  </div>
                )}


                {/* FEATURES */}
                <ul className="space-y-3 mb-8">

                  {plan.features.map((feature,i)=>{

                    const isBold = feature.startsWith("**");
                    const cleanText = feature.replace(/\*\*/g,"");

                    return (
                      <li key={i} className="flex items-center gap-3 text-sm">

                        <svg
                          className="w-4 h-4 text-gymfinity-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>

                        <span className={`${
                          isBold ? "font-semibold text-gymfinity-400" :
                          plan.popular ? "text-gray-200" : "text-gray-600"
                        }`}>
                          {cleanText}
                        </span>

                      </li>
                    );

                  })}

                </ul>


                {/* BUTTON */}
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full font-semibold text-sm transition ${
                    plan.popular
                      ? "bg-gymfinity-400 text-white hover:bg-gymfinity-300"
                      : "bg-gymfinity-100 text-gymfinity-400 hover:bg-gymfinity-400 hover:text-white"
                  }`}
                >
                  Get Started
                </a>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Pricing;
