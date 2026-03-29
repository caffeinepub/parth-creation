import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Package,
  Palette,
  Phone,
  Quote,
  Scissors,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface GalleryItem {
  src: string;
  label: string;
}

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  stars: number;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const galleryItems: GalleryItem[] = [
  { src: "/assets/generated/gallery-saree.dim_400x400.jpg", label: "Sarees" },
  { src: "/assets/generated/gallery-blouse.dim_400x400.jpg", label: "Blouses" },
  { src: "/assets/generated/gallery-kurti.dim_400x400.jpg", label: "Kurtis" },
  {
    src: "/assets/generated/gallery-machine.dim_400x400.jpg",
    label: "Machine Work",
  },
  {
    src: "/assets/generated/gallery-handwork.dim_400x400.jpg",
    label: "Hand Work",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Mehta",
    company: "Mehta Garments, Surat",
    quote:
      "Parth Creation has been our embroidery partner for 5 years. Their precision and quality are unmatched in the market. Bulk orders are always delivered on time.",
    stars: 5,
  },
  {
    name: "Priya Shah",
    company: "Shah Fashion House, Ahmedabad",
    quote:
      "The custom embroidery designs they created for our fashion collection were absolutely stunning. Clients loved every piece. Highly recommend!",
    stars: 5,
  },
  {
    name: "Vikram Patel",
    company: "VP Textiles, Mumbai",
    quote:
      "Professional, reliable and incredibly skilled. Their machine embroidery work is flawless and pricing is very competitive for bulk orders.",
    stars: 5,
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream shadow-md" : "bg-cream/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
            <span className="font-cinzel text-white text-sm font-bold">PC</span>
          </div>
          <div>
            <p className="font-cinzel text-charcoal font-semibold text-base leading-tight tracking-widest">
              PARTH CREATION
            </p>
            <p className="text-gray-brown text-[10px] tracking-widest uppercase">
              Textile Embroidery
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-gray-brown hover:text-teal text-sm font-medium transition-colors duration-200"
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex">
          <button
            type="button"
            onClick={() => handleNav("#contact")}
            className="btn-primary"
            data-ocid="header.get_quote.button"
          >
            Get Quote
          </button>
        </div>

        <button
          type="button"
          className="md:hidden text-charcoal p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="header.mobile_menu.toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-cream border-t border-gold-light overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-gray-brown hover:text-teal text-sm font-medium text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNav("#contact")}
                className="btn-primary w-full text-center"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-embroidery.dim_1200x700.jpg')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(20,16,12,0.58)" }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold text-sm tracking-[0.35em] uppercase mb-4 font-poppins"
        >
          Surat, India • Est. 2007
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-cinzel text-white text-5xl md:text-7xl font-bold uppercase tracking-[0.12em] leading-tight mb-4"
        >
          PARTH CREATION
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-gold-light text-lg md:text-xl font-poppins font-light tracking-wide mb-3"
        >
          Textile Embroidery Specialists
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="w-20 h-px bg-gold mx-auto mb-5"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/80 text-sm md:text-base font-poppins font-light tracking-widest uppercase mb-10"
        >
          Precision Embroidery, Crafted to Perfection
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            type="button"
            onClick={() => scrollTo("#services")}
            className="btn-primary text-base px-10 py-4 shadow-lg"
            data-ocid="hero.explore_services.button"
          >
            Explore Our Services
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-content mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-poppins">
              Our Story
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-charcoal mb-2 tracking-wide">
              About Us
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <p className="text-gray-brown leading-relaxed mb-5 text-[15px]">
              Founded in Surat — India's textile capital — Parth Creation has
              been delivering precision embroidery work to garment manufacturers
              and designers across India. With years of expertise, we specialize
              in intricate embroidery for sarees, blouses, kurtis, and exclusive
              fashion collections.
            </p>
            <p className="text-gray-brown leading-relaxed mb-8 text-[15px]">
              Our state-of-the-art facility houses both computerized embroidery
              machines and skilled hand-embroidery artisans, enabling us to
              serve clients ranging from boutique fashion labels to large
              garment manufacturing units across Gujarat, Maharashtra, and
              beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative py-4 px-4"
          >
            <div className="absolute top-0 right-0 w-full h-full border-2 border-gold/40 rounded-2xl" />
            <div className="absolute bottom-0 left-0 w-full h-full border border-gold/20 rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="/assets/generated/about-workshop.dim_600x500.jpg"
                alt="Parth Creation embroidery workshop in Surat"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-6">
                <p className="font-cinzel text-white text-sm tracking-widest uppercase">
                  Our Workshop, Surat
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: <Scissors size={28} strokeWidth={1.5} />,
      title: "Embroidery Job-Work",
      desc: "Professional embroidery job-work for garment manufacturers. We work with your fabric and designs to deliver precise, high-quality stitch work at scale.",
    },
    {
      icon: <Palette size={28} strokeWidth={1.5} />,
      title: "Custom Designs",
      desc: "From concept to creation, our design team crafts unique embroidery patterns for your brand. We bring your vision to life with expert artistry.",
    },
    {
      icon: <Package size={28} strokeWidth={1.5} />,
      title: "Bulk Orders",
      desc: "Efficient bulk embroidery production with consistent quality and on-time delivery. Competitive pricing for large-scale garment manufacturing orders.",
    },
  ];

  return (
    <section id="services" className="py-24" style={{ background: "#F7F2E8" }}>
      <div className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-poppins">
            What We Offer
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl text-charcoal tracking-wide mb-3">
            Services
          </h2>
          <div className="w-14 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-gray-brown max-w-xl mx-auto text-[15px]">
            Comprehensive embroidery solutions for B2B clients — from individual
            job-work to large-scale manufacturing partnerships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-white rounded-xl border border-gold-light p-8 text-center shadow-card hover:shadow-gold transition-shadow duration-300"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="w-16 h-16 rounded-full bg-cream border border-gold-light flex items-center justify-center text-gold mx-auto mb-5">
                {service.icon}
              </div>
              <h3 className="font-cinzel text-lg text-charcoal font-semibold mb-3 tracking-wide">
                {service.title}
              </h3>
              <div className="w-8 h-px bg-gold mx-auto mb-4" />
              <p className="text-gray-brown text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(
    () =>
      setLightboxIdx((i) =>
        i === null ? 0 : (i - 1 + galleryItems.length) % galleryItems.length,
      ),
    [],
  );
  const next = useCallback(
    () =>
      setLightboxIdx((i) => (i === null ? 0 : (i + 1) % galleryItems.length)),
    [],
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIdx, prev, next, closeLightbox]);

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-poppins">
            Our Portfolio
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl text-charcoal tracking-wide mb-3">
            Our Gallery
          </h2>
          <div className="w-14 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-gray-brown max-w-xl mx-auto text-[15px]">
            A showcase of our finest embroidery work across categories — from
            traditional sarees to modern fashion designs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative group rounded-xl overflow-hidden cursor-pointer shadow-card"
              onClick={() => setLightboxIdx(i)}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-all duration-300" />
              <div className="absolute bottom-3 left-3">
                <span className="bg-charcoal/70 text-white text-xs px-3 py-1.5 rounded-full font-poppins tracking-wide backdrop-blur-sm">
                  {item.label}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-lg">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
            data-ocid="gallery.modal"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightboxIdx].src}
                alt={galleryItems[lightboxIdx].label}
                className="w-full rounded-xl object-cover max-h-[80vh]"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-charcoal/70 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm font-poppins">
                  {galleryItems[lightboxIdx].label}
                </span>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                data-ocid="gallery.close_button"
              >
                <X size={16} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                data-ocid="gallery.pagination_prev"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                data-ocid="gallery.pagination_next"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── Why Choose Us ───────────────────────────────────────────────────────────
function WhyChooseUs() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const reasons = [
    {
      title: "Deep Expertise",
      desc: "10+ years in textile embroidery with mastery of machine and hand techniques",
    },
    {
      title: "Premium Quality",
      desc: "Strict QC at every stage — consistent finish, color accuracy, thread alignment",
    },
    {
      title: "Timely Delivery",
      desc: "Committed delivery schedules so your production line never halts",
    },
    {
      title: "Competitive Pricing",
      desc: "Factory-direct pricing with no hidden costs, volume discounts available",
    },
  ];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section id="why" className="py-24" style={{ background: "#F7F2E8" }}>
      <div className="max-w-content mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-poppins">
              Our Advantage
            </p>
            <h2 className="font-cinzel text-3xl text-charcoal tracking-wide mb-2">
              Why Choose Us
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <div className="grid gap-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                  data-ocid={`why.item.${i + 1}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center text-teal flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-charcoal text-sm mb-1">
                      {r.title}
                    </h4>
                    <p className="text-gray-brown text-sm leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-poppins">
              Client Words
            </p>
            <h2 className="font-cinzel text-3xl text-charcoal tracking-wide mb-2">
              Testimonials
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />

            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl border border-gold-light p-7 shadow-card"
                >
                  <Quote
                    size={32}
                    className="text-gold mb-4"
                    strokeWidth={1.5}
                  />
                  <p className="text-gray-brown text-[15px] leading-relaxed italic mb-5">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5]
                      .slice(0, testimonials[activeTestimonial].stars)
                      .map((si) => (
                        <Star
                          key={si}
                          size={14}
                          className="text-gold fill-gold"
                        />
                      ))}
                  </div>
                  <p className="font-poppins font-semibold text-charcoal text-sm">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-gray-brown text-xs mt-0.5">
                    {testimonials[activeTestimonial].company}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-2 mt-5">
              {testimonials.map((_, i) => (
                <button
                  type="button"
                  key={testimonials[i].name}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeTestimonial
                      ? "w-8 bg-teal"
                      : "w-2 bg-gold-light"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                  data-ocid="testimonials.tab"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-poppins">
            Reach Out
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl text-charcoal tracking-wide mb-3">
            Contact Us
          </h2>
          <div className="w-14 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div
                className="bg-white rounded-xl border border-gold-light p-10 text-center shadow-card"
                data-ocid="contact.success_state"
              >
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-teal" />
                </div>
                <h3 className="font-cinzel text-xl text-charcoal mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-brown text-sm">
                  We've received your enquiry. Our team will reach out within 24
                  hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-primary"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl border border-gold-light p-8 shadow-card space-y-5"
                data-ocid="contact.modal"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-charcoal text-sm font-medium mb-1.5 block"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="contact-name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    required
                    className="border-gold-light text-[15px]"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-charcoal text-sm font-medium mb-1.5 block"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    required
                    className="border-gold-light text-[15px]"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-charcoal text-sm font-medium mb-1.5 block"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="border-gold-light text-[15px]"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-charcoal text-sm font-medium mb-1.5 block"
                  >
                    Your Message *
                  </label>
                  <Textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Tell us about your embroidery requirements..."
                    required
                    rows={4}
                    className="border-gold-light text-[15px] resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  data-ocid="contact.submit_button"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry"
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-5">
              {[
                {
                  icon: <MapPin size={18} />,
                  label: "Address",
                  value:
                    "PARTH CREATION, 1962/31, Krishna Cinema Compound, Palsana, Surat, Gujarat - 394315",
                },
                {
                  icon: <Phone size={18} />,
                  label: "Phone",
                  value: "+91 98241 00999",
                },
                {
                  icon: <Mail size={18} />,
                  label: "Email",
                  value: "info@parthcreation.com",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex gap-4 items-start bg-white rounded-xl border border-gold-light p-5 shadow-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gold tracking-widest uppercase font-poppins mb-1">
                      {info.label}
                    </p>
                    <p className="text-charcoal text-sm font-medium">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden border border-gold-light shadow-card min-h-[160px]">
              <iframe
                title="Surat Textile Market location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14879.859!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dab5d91a30b%3A0x6e27ee781cb3f87d!2sSurat%20Textile%20Market!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://wa.me/919824100999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-medium text-sm tracking-wide text-white transition-all duration-200 hover:opacity-90 active:scale-95 shadow-md"
              style={{ background: "#25D366" }}
              data-ocid="contact.primary_button"
            >
              <WhatsAppIcon size={20} />
              Chat with Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-teal text-white">
      <div className="max-w-content mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                <span className="font-cinzel text-white text-sm font-bold">
                  PC
                </span>
              </div>
              <div>
                <p className="font-cinzel text-white font-semibold text-base tracking-widest">
                  PARTH CREATION
                </p>
                <p className="text-white/60 text-[10px] tracking-widest uppercase">
                  Textile Embroidery
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Precision embroidery specialists serving B2B clients across India
              since 2007.
            </p>
          </div>

          <div>
            <h4 className="font-cinzel text-white/90 text-sm tracking-widest uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Embroidery Job-Work",
                "Custom Designs",
                "Bulk Orders",
                "Saree Work",
              ].map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#services")}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-white/90 text-sm tracking-widest uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {year} Parth Creation. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/70 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp ────────────────────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919824100999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 text-white"
      style={{ background: "#25D366" }}
      aria-label="Chat on WhatsApp"
      data-ocid="whatsapp.primary_button"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-cream font-poppins">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
