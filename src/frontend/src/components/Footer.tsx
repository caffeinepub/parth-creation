const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-parth-dark-maroon text-parth-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-parth-gold/50 flex items-center justify-center flex-shrink-0">
                <span className="text-parth-gold font-playfair font-bold text-lg leading-none">
                  P
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-playfair font-bold text-parth-gold text-xl tracking-wide">
                  PARTH
                </span>
                <span className="font-dm-sans text-parth-off-white/70 text-xs tracking-[0.2em] uppercase">
                  Creation
                </span>
              </div>
            </div>
            <p className="font-dm-sans text-parth-off-white/70 text-sm leading-relaxed">
              Surat's leading embroidery job-work specialists. Precision
              craftsmanship for India's textile industry.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-playfair text-parth-gold font-bold mb-4 tracking-wide">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block font-dm-sans text-parth-off-white/70 text-sm hover:text-parth-gold transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-playfair text-parth-gold font-bold mb-4 tracking-wide">
              Our Location
            </h4>
            <p className="font-dm-sans text-parth-off-white/70 text-sm leading-relaxed">
              PARTH CREATION, 1962/31,
              <br />
              Krishna Cinema Compound, Palsana,
              <br />
              Surat, Gujarat - 394315, India
            </p>
            <p className="font-dm-sans text-parth-off-white/70 text-sm mt-3">
              📞 +91 98241 00999
            </p>
            <p className="font-dm-sans text-parth-off-white/70 text-sm">
              ✉️ info@parthcreation.in
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-dm-sans text-parth-off-white/50 text-xs">
            © {year} Parth Creation. All Rights Reserved. | Made with ❤️ in
            Surat, India
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-sans text-parth-off-white/40 text-xs hover:text-parth-off-white/70 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
