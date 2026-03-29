import { motion } from "motion/react";

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-embroidery.dim_1400x700.jpg"
          alt="Parth Creation embroidery work"
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dm-sans text-parth-gold text-xs sm:text-sm tracking-[0.22em] uppercase mb-4 font-semibold"
          >
            Exquisite Textile Embroidery from Surat
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-parth-gold leading-tight mb-6"
          >
            Precision Embroidery,{" "}
            <span className="italic">Crafted to Perfection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-dm-sans text-parth-off-white text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
          >
            Surat's trusted embroidery job-work specialists. We bring exquisite
            thread art to sarees, blouses, kurtis and more — at scale, with
            unmatched precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => handleScroll("gallery")}
              className="bg-parth-maroon text-white font-dm-sans font-semibold text-sm px-7 py-3.5 rounded-lg uppercase tracking-widest hover:bg-parth-deep-maroon transition-colors"
              data-ocid="hero.primary_button"
            >
              Explore Our Work
            </button>
            <button
              type="button"
              onClick={() => handleScroll("contact")}
              className="bg-transparent border-2 border-parth-gold text-parth-gold font-dm-sans font-semibold text-sm px-7 py-3.5 rounded-lg uppercase tracking-widest hover:bg-parth-gold hover:text-parth-brown transition-colors"
              data-ocid="hero.secondary_button"
            >
              Get a Quote
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-parth-gold/60 text-xs font-dm-sans tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-parth-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
}
