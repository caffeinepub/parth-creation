import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const SERVICES = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 24h24M24 12v24M16 16l16 16M32 16L16 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Machine Embroidery Job-Work",
    description:
      "High-speed multi-head machine embroidery for large volume garment production with consistent precision and quality control.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M10 38L24 10l14 28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 30h20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="10" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Custom Design Embroidery",
    description:
      "Bring your creative designs to life. We digitize and embroider custom patterns to your exact specifications with meticulous attention to detail.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="14"
          width="32"
          height="22"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 14V10a2 2 0 012-2h12a2 2 0 012 2v4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M8 22h32" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M20 27h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Bulk Order Processing",
    description:
      "Efficient bulk order fulfillment for manufacturers and exporters with fast turnaround times and rigorous quality checks at every stage.",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 lg:py-28 bg-parth-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-dm-sans text-parth-gold-muted text-xs tracking-[0.2em] uppercase font-semibold mb-3">
            What We Offer
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-parth-maroon uppercase">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-parth-gold mx-auto mt-5 rounded-full" />
          <p className="font-dm-sans text-parth-brown text-base mt-5 max-w-xl mx-auto leading-relaxed">
            From bulk job-work to custom couture — we cover the full spectrum of
            embroidery needs for India's textile industry.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-parth-ivory border border-parth-beige-border rounded-xl p-6 shadow-xs hover:shadow-card transition-shadow group"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="text-parth-gold-muted group-hover:text-parth-gold transition-colors mb-4">
                {service.icon}
              </div>
              <h3 className="font-playfair text-lg font-bold text-parth-maroon mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="font-dm-sans text-parth-brown text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
