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
    monthly: "Custom",
    annual: "Custom",
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

  // DEFAULT ANNUAL SELECTED
  const [billing, setBilling] = useState("annual");

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

                {/* BRAND */}
                <h4 className="text-2xl font-bold text-gymfinity-400 mb-2">
                  {plan.brand}
                </h4>

                <p className={`text-sm mb-6 ${
                  plan.popular ? "text-gray-300" : "text-gray-500"
                }`}>
                  {plan.description}
                </p>


                {/* PRICE */}
                <div className="mb-5 flex items-end gap-2">

                  {/* ORIGINAL PRICE STRIKE */}
                  {price !== "Custom" && billing==="annual" && (
                    <span className="text-sm text-gray-400 line-through">
                      Rs {plan.monthly}
                    </span>
                  )}

                  {price !== "Custom" && (
                    <span className={`text-xl ${
                      plan.popular ? "text-gray-300" : "text-gray-500"
                    }`}>
                      Rs
                    </span>
                  )}

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

                  {price !== "Custom" && (
                    <span className={`text-sm ml-1 ${
                      plan.popular ? "text-gray-300" : "text-gray-500"
                    }`}>
                      /month
                    </span>
                  )}

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
