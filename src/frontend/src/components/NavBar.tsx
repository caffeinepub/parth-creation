import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "services", "gallery", "contact"];
    const observers: IntersectionObserver[] = [];

    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-header" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
          >
            <div className="w-10 h-10 rounded-full bg-parth-maroon flex items-center justify-center flex-shrink-0">
              <span className="text-parth-gold font-playfair font-bold text-lg leading-none">
                P
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-playfair font-bold text-parth-maroon text-xl tracking-wide">
                PARTH
              </span>
              <span className="font-dm-sans text-parth-brown text-xs tracking-[0.2em] uppercase">
                Creation
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-dm-sans text-sm font-medium transition-colors relative pb-1 ${
                    isActive
                      ? "text-parth-maroon"
                      : "text-parth-deep-maroon hover:text-parth-maroon"
                  }`}
                  data-ocid="nav.link"
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-parth-maroon rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="hidden md:inline-flex items-center justify-center bg-parth-maroon text-white font-dm-sans font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-parth-deep-maroon transition-colors tracking-wide uppercase"
              data-ocid="nav.primary_button"
            >
              Get Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-parth-maroon hover:bg-parth-cream rounded-lg transition-colors"
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-parth-beige-border shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-dm-sans text-sm font-medium py-2.5 px-3 rounded-lg transition-colors text-left ${
                    isActive
                      ? "text-parth-maroon bg-parth-cream"
                      : "text-parth-deep-maroon hover:bg-parth-cream"
                  }`}
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="mt-2 text-center bg-parth-maroon text-white font-dm-sans font-semibold text-sm px-5 py-2.5 rounded-full uppercase tracking-wide"
              data-ocid="nav.primary_button"
            >
              Get Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
