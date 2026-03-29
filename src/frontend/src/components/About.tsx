import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-parth-cream embroidery-watermark overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-dm-sans text-parth-gold-muted text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              Our Story
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-parth-maroon uppercase mb-6 leading-tight">
              About Us
            </h2>
            <div className="w-16 h-1 bg-parth-gold mb-8 rounded-full" />
            <p className="font-dm-sans text-parth-brown text-base leading-relaxed mb-5">
              Parth Creation is a leading embroidery job-work specialist based
              in Surat, India — the textile capital of the nation. With
              extensive experience, we serve garment manufacturers, fashion
              designers, and exporters with precision embroidery work.
            </p>
            <p className="font-dm-sans text-parth-brown text-base leading-relaxed">
              Our expertise spans sarees, blouses, kurtis, and more. Our
              state-of-the-art machines combined with skilled artisans ensure
              top-quality output for bulk and custom orders alike. We pride
              ourselves on fast turnaround, quality assurance, and building
              long-term partnerships with our clients.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-parth-beige-border shadow-card">
              <img
                src="/assets/generated/about-workshop.dim_700x500.jpg"
                alt="Parth Creation embroidery workshop in Surat"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-parth-maroon/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-parth-gold/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-parth-gold/20 rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
