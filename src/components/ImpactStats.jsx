import { useEffect, useRef } from "react";
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

function CountUpNumber({ end, active, duration = 1600 }) {
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const el = ref.current;
    if (!el) return;

    let frameId = 0;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // Smooth ease-out quart — fewer perceived jumps near the end
      const eased = 1 - Math.pow(1 - t, 4);
      el.textContent = String(Math.round(end * eased));
      if (t < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        el.textContent = String(end);
      }
    };

    el.textContent = "0";
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, end, duration]);

  return (
    <span ref={ref} className="text-gymfinity-900">
      0
    </span>
  );
}

function StatValue({ stat, active }) {
  if (!stat.count) {
    return (
      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-400 tracking-tight">
        {stat.display}
      </span>
    );
  }

  return (
    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight tabular-nums">
      <CountUpNumber end={stat.end} active={active} />
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
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative py-14 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden"
      aria-label="GymFinity impact across Pakistan"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gymfinity-900 tracking-tight">
            Powering gyms across Pakistan
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            Made for fitness businesses that care about accuracy, speed, and a
            better member experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
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
