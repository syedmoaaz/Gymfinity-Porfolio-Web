import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    id: "gyms",
    end: 50,
    suffix: "+",
    suffixClassName: "text-gymfinity-400",
    label: "Gyms running on GymFinity",
    count: true,
  },
  {
    id: "coverage",
    display: "Nationwide",
    label: "Coverage across Pakistan",
    count: false,
  },
  {
    id: "support",
    end: 24,
    suffix: "/7",
    suffixClassName: "text-gymfinity-400",
    label: "Hands-on owner support",
    count: true,
  },
  {
    id: "dashboard",
    end: 1,
    suffix: "",
    label: "Dashboard for the whole gym",
    count: true,
  },
];

function useCountUp(end, active, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frameId;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, end, duration]);

  return value;
}

function StatValue({ stat, active }) {
  const counted = useCountUp(stat.end ?? 0, active && stat.count);

  if (!stat.count) {
    return (
      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-400 tracking-tight">
        {stat.display}
      </span>
    );
  }

  return (
    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight tabular-nums">
      <span className="text-gymfinity-900">{counted}</span>
      {stat.suffix ? (
        <span className={stat.suffixClassName || "text-gymfinity-400"}>
          {stat.suffix}
        </span>
      ) : null}
    </span>
  );
}

const ImpactStats = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.35 });

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gymfinity-50/40 to-white overflow-hidden"
      aria-label="GymFinity impact across Pakistan"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gymfinity-400/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gymfinity-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <p className="text-sm font-semibold tracking-wide uppercase text-gymfinity-400 mb-3">
            Built for Pakistan’s fitness industry
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
            Powering gyms across Pakistan
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            From single-branch studios to growing fitness brands — GymFinity
            keeps memberships, fees, and attendance running smoothly every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="text-center rounded-2xl bg-white border border-gray-100 px-4 py-6 sm:py-8 shadow-sm"
            >
              <StatValue stat={stat} active={inView} />
              <div className="mx-auto mt-3 mb-3 h-[3px] w-10 rounded-full bg-gymfinity-400" />
              <p className="text-sm text-gray-500 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
