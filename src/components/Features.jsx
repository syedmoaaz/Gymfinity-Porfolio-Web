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
