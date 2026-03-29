import { X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

const GALLERY_ITEMS = [
  { src: "/assets/generated/gallery-saree.dim_400x400.jpg", label: "Saree" },
  { src: "/assets/generated/gallery-blouse.dim_400x400.jpg", label: "Blouse" },
  { src: "/assets/generated/gallery-kurti.dim_400x400.jpg", label: "Kurti" },
  {
    src: "/assets/generated/gallery-embroidery1.dim_400x400.jpg",
    label: "Embroidery Work",
  },
  {
    src: "/assets/generated/gallery-dupatta.dim_400x400.jpg",
    label: "Dupatta",
  },
  { src: "/assets/generated/gallery-fabric.dim_400x400.jpg", label: "Fabric" },
];

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-parth-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-dm-sans text-parth-gold-muted text-xs tracking-[0.2em] uppercase font-semibold mb-3">
            Our Craftsmanship
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-parth-maroon uppercase">
            Embroidery Gallery
          </h2>
          <div className="w-16 h-1 bg-parth-gold mx-auto mt-5 rounded-full" />
          <p className="font-dm-sans text-parth-brown text-base mt-5 max-w-xl mx-auto leading-relaxed">
            A glimpse into our portfolio — each piece a testament to our skill,
            precision, and passion for the craft.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          data-ocid="gallery.list"
        >
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="gallery-item relative aspect-square overflow-hidden rounded-xl cursor-pointer border border-parth-beige-border"
              onClick={() => setLightbox(i)}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="gallery-overlay absolute inset-0 bg-parth-maroon/70 opacity-0 transition-opacity duration-300 flex items-end justify-start p-3">
                <span className="font-dm-sans text-parth-gold text-sm font-semibold tracking-wide">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => handleScroll("contact")}
            className="inline-flex items-center gap-2 bg-parth-gold text-parth-brown font-dm-sans font-semibold text-sm px-8 py-3.5 rounded-lg uppercase tracking-widest hover:bg-parth-gold-muted transition-colors"
            data-ocid="gallery.primary_button"
          >
            Request a Sample
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          data-ocid="gallery.modal"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white hover:text-parth-gold"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            data-ocid="gallery.close_button"
          >
            <X size={28} />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[lightbox].src}
              alt={GALLERY_ITEMS[lightbox].label}
              className="w-full rounded-xl"
            />
            <p className="text-center text-parth-gold font-playfair text-xl mt-3">
              {GALLERY_ITEMS[lightbox].label}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
