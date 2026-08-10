import { motion } from "framer-motion";
import {
  SlidersHorizontal,
  Tag,
  BarChart3,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
  LayoutDashboard,
  Users,
  CalendarCheck,
  Dumbbell,
  CreditCard,
  FileText,
  Settings,
  Search,
} from "lucide-react";

const features = [
  {
    icon: SlidersHorizontal,
    title: "Personalized Features",
    description: "Built around your gym workflow",
  },
  {
    icon: Tag,
    title: "Your Own Branding",
    description: "Logo, colors & gym identity",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description: "Revenue, members & reports",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Cloud-ready gym operations",
  },
];

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Members", icon: Users },
  { label: "Attendance", icon: CalendarCheck },
  { label: "Trainers", icon: Dumbbell },
  { label: "Payments", icon: CreditCard },
  { label: "Reports", icon: FileText },
  { label: "Settings", icon: Settings },
];

const phoneNumber = "923131234420";
const message =
  "Hello, I want a Customized GymFinity Software for my gym with my own branding.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

function DashboardMockup() {
  return (
    <div className="flex h-full min-h-0 bg-white text-[7px] sm:text-[8px] lg:text-[9px] leading-tight overflow-hidden">
      {/* Sidebar — Your Gym Name */}
      <aside className="w-[28%] min-w-[72px] bg-gymfinity-900 text-white flex flex-col shrink-0">
        <div className="px-2 sm:px-2.5 py-2 border-b border-white/10">
          <p className="font-bold text-[8px] sm:text-[9px] lg:text-[10px] text-gymfinity-300 truncate">
            Your Gym Name
          </p>
          <p className="text-[6px] sm:text-[7px] text-white/50 mt-0.5 truncate">
            Management Suite
          </p>
        </div>

        <nav className="flex-1 px-1.5 py-2 space-y-0.5 overflow-hidden">
          {navItems.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={`flex items-center gap-1.5 rounded-md px-1.5 py-1 ${
                active
                  ? "bg-gymfinity-400 text-white"
                  : "text-white/70"
              }`}
            >
              <Icon size={10} className="shrink-0" strokeWidth={2} />
              <span className="truncate font-medium">{label}</span>
            </div>
          ))}
        </nav>

        <div className="m-1.5 mt-auto rounded-lg bg-white/10 px-2 py-1.5">
          <div className="flex items-center gap-1.5">
            <Dumbbell size={10} className="text-gymfinity-300 shrink-0" />
            <div className="min-w-0">
              <p className="font-semibold text-[7px] sm:text-[8px] truncate">
                Your Gym
              </p>
              <p className="text-[6px] text-white/50 truncate">
                Stronger everyday
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-2 sm:px-3 py-1.5 flex items-center gap-2">
          <div className="flex-1 flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-gray-400">
            <Search size={9} />
            <span className="truncate">Search members, invoices…</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <div className="w-4 h-4 rounded-full bg-gymfinity-400/20 flex items-center justify-center text-[6px] font-bold text-gymfinity-600">
              YG
            </div>
            <span className="hidden sm:inline font-semibold text-gymfinity-900 truncate max-w-[70px]">
              Your Gym
            </span>
          </div>
        </header>

        <div className="flex-1 p-1.5 sm:p-2 space-y-1.5 overflow-hidden">
          <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
            {[
              { label: "Total Members", value: "1,245", up: "+12%" },
              { label: "Active", value: "987", up: "+5%" },
              { label: "Revenue", value: "Rs 245k", up: "+8%" },
              { label: "Pending", value: "Rs 32k", up: "-3%", down: true },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-md bg-white border border-gray-100 p-1 sm:p-1.5 shadow-sm"
              >
                <p className="text-gray-400 truncate">{card.label}</p>
                <p className="font-bold text-gymfinity-900 text-[8px] sm:text-[9px] mt-0.5">
                  {card.value}
                </p>
                <p
                  className={`text-[6px] mt-0.5 ${
                    card.down ? "text-red-500" : "text-emerald-500"
                  }`}
                >
                  {card.up}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-1.5 min-h-0 flex-1">
            <div className="col-span-3 rounded-md bg-white border border-gray-100 p-1.5 shadow-sm">
              <p className="font-semibold text-gymfinity-900 mb-1">
                Member Growth
              </p>
              <svg
                viewBox="0 0 200 70"
                className="w-full h-12 sm:h-14"
                preserveAspectRatio="none"
              >
                <polyline
                  fill="none"
                  stroke="#3aafa9"
                  strokeWidth="2"
                  points="0,55 30,48 60,50 90,35 120,40 150,22 180,28 200,12"
                />
                <polyline
                  fill="rgba(58,175,169,0.12)"
                  stroke="none"
                  points="0,70 0,55 30,48 60,50 90,35 120,40 150,22 180,28 200,12 200,70"
                />
                <circle cx="150" cy="22" r="3" fill="#3aafa9" />
              </svg>
            </div>

            <div className="col-span-2 rounded-md bg-white border border-gray-100 p-1.5 shadow-sm">
              <p className="font-semibold text-gymfinity-900 mb-1">
                Recent Members
              </p>
              <div className="space-y-1">
                {["Ali Khan", "Sara Ahmed", "Bilal R."].map((name, i) => (
                  <div key={name} className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-gymfinity-100 text-gymfinity-600 flex items-center justify-center text-[6px] font-bold shrink-0">
                      {name[0]}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gymfinity-900 truncate">
                        {name}
                      </p>
                      <p className="text-gray-400 text-[6px]">
                        {i === 0 ? "Premium" : i === 1 ? "Standard" : "Basic"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-md bg-white border border-gray-100 p-1.5 shadow-sm flex items-center gap-2">
              <div className="relative w-10 h-10 shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="4"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#3aafa9"
                    strokeWidth="4"
                    strokeDasharray="55 88"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#2b7a78"
                    strokeWidth="4"
                    strokeDasharray="25 88"
                    strokeDashoffset="-55"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gymfinity-900">Plans</p>
                <p className="text-gray-400 text-[6px]">Premium · Standard · Basic</p>
              </div>
            </div>
            <div className="rounded-md bg-white border border-gray-100 p-1.5 shadow-sm">
              <p className="font-semibold text-gymfinity-900 mb-1">Today</p>
              <p className="text-gray-500">CrossFit · 6:00 PM</p>
              <p className="text-gray-500">Yoga · 7:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CustomSoftware = () => {
  return (
    <section
      id="custom-software"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gymfinity-50/80 to-white"
    >
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3aafa9 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gymfinity-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-gymfinity-900 tracking-tight leading-tight">
              Need a{" "}
              <span className="text-gymfinity-400">Customized Software</span>{" "}
              for your gym?
            </h2>
            <div className="mt-3 w-14 h-1 rounded-full bg-gymfinity-400" />

            <p className="mt-5 text-base sm:text-lg text-gymfinity-900/90 font-medium leading-relaxed">
              <span className="font-bold text-gymfinity-400">GymFinity</span>{" "}
              Offers{" "}
              <span className="font-bold text-gymfinity-900">
                Customized Software
              </span>{" "}
              with your{" "}
              <span className="font-bold text-gymfinity-900">
                personalized features
              </span>{" "}
              and branding.
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
              We design gym management software around how your gym actually
              runs your workflows, your brand, and the features your staff
              need every day.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-gray-100 bg-white p-3 sm:p-4 shadow-sm hover:border-gymfinity-400/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-gymfinity-100 text-gymfinity-400 flex items-center justify-center mb-2.5">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <p className="text-sm font-bold text-gymfinity-900 leading-snug">
                    {title}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 leading-snug">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gymfinity-400 text-white font-semibold text-sm sm:text-base shadow-lg shadow-gymfinity-400/25 hover:bg-gymfinity-600 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Let&apos;s Build Your Software
            </a>

            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-gymfinity-600">
              <CheckCircle2 size={16} className="text-gymfinity-400 shrink-0" />
              Built for Gyms. Backed by Experts.
            </p>
          </motion.div>

          {/* Right — laptop mockup */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-8 bg-gymfinity-400/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Laptop lid / screen bezel */}
              <div className="relative rounded-t-xl bg-gradient-to-b from-gray-700 to-gray-800 p-2 sm:p-2.5 shadow-2xl border border-gray-600/50">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-500/80" />
                <div className="rounded-md overflow-hidden bg-white aspect-[16/10] shadow-inner ring-1 ring-black/10">
                  <DashboardMockup />
                </div>
              </div>
              {/* Laptop base */}
              <div className="relative h-3 sm:h-3.5 bg-gradient-to-b from-gray-400 to-gray-500 rounded-b-lg mx-[-2%] shadow-lg">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[18%] h-1 rounded-b bg-gray-600/40" />
              </div>
              <div className="h-1.5 bg-gradient-to-b from-gray-500 to-gray-600 rounded-b-xl mx-[8%] shadow-md" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomSoftware;
