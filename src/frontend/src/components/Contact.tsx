import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useInView } from "../hooks/useInView";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Enquiry sent successfully! We'll get back to you soon.");
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-parth-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-dm-sans text-parth-gold-muted text-xs tracking-[0.2em] uppercase font-semibold mb-3">
            Get in Touch
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-parth-maroon uppercase">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-parth-gold mt-5 rounded-full" />
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
        >
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div
                className="bg-parth-ivory border border-parth-beige-border rounded-xl p-8 text-center"
                data-ocid="contact.success_state"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-parth-maroon mb-2">
                  Enquiry Sent!
                </h3>
                <p className="font-dm-sans text-parth-brown text-sm">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-parth-maroon font-dm-sans text-sm underline underline-offset-2 hover:text-parth-deep-maroon"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
                data-ocid="contact.modal"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="font-dm-sans text-parth-brown text-sm font-medium mb-1.5 block"
                      htmlFor="name"
                    >
                      Full Name <span className="text-parth-maroon">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Your name"
                      className="w-full bg-white border border-parth-beige-border rounded-lg px-4 py-2.5 font-dm-sans text-sm text-parth-brown placeholder:text-parth-brown/40 focus:outline-none focus:ring-2 focus:ring-parth-maroon/30 focus:border-parth-maroon transition-colors"
                      data-ocid="contact.input"
                    />
                    {errors.name && (
                      <p
                        className="text-red-500 text-xs mt-1"
                        data-ocid="contact.error_state"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="font-dm-sans text-parth-brown text-sm font-medium mb-1.5 block"
                      htmlFor="email"
                    >
                      Email <span className="text-parth-maroon">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      className="w-full bg-white border border-parth-beige-border rounded-lg px-4 py-2.5 font-dm-sans text-sm text-parth-brown placeholder:text-parth-brown/40 focus:outline-none focus:ring-2 focus:ring-parth-maroon/30 focus:border-parth-maroon transition-colors"
                      data-ocid="contact.input"
                    />
                    {errors.email && (
                      <p
                        className="text-red-500 text-xs mt-1"
                        data-ocid="contact.error_state"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    className="font-dm-sans text-parth-brown text-sm font-medium mb-1.5 block"
                    htmlFor="phone"
                  >
                    Phone Number <span className="text-parth-maroon">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    placeholder="+91 98241 00999"
                    className="w-full bg-white border border-parth-beige-border rounded-lg px-4 py-2.5 font-dm-sans text-sm text-parth-brown placeholder:text-parth-brown/40 focus:outline-none focus:ring-2 focus:ring-parth-maroon/30 focus:border-parth-maroon transition-colors"
                    data-ocid="contact.input"
                  />
                  {errors.phone && (
                    <p
                      className="text-red-500 text-xs mt-1"
                      data-ocid="contact.error_state"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="font-dm-sans text-parth-brown text-sm font-medium mb-1.5 block"
                    htmlFor="message"
                  >
                    Message <span className="text-parth-maroon">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Tell us about your embroidery requirements..."
                    className="w-full bg-white border border-parth-beige-border rounded-lg px-4 py-2.5 font-dm-sans text-sm text-parth-brown placeholder:text-parth-brown/40 focus:outline-none focus:ring-2 focus:ring-parth-maroon/30 focus:border-parth-maroon transition-colors resize-none"
                    data-ocid="contact.textarea"
                  />
                  {errors.message && (
                    <p
                      className="text-red-500 text-xs mt-1"
                      data-ocid="contact.error_state"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-parth-deep-maroon text-white font-dm-sans font-semibold text-sm py-3.5 rounded-lg uppercase tracking-widest hover:bg-parth-dark-maroon disabled:opacity-60 transition-colors"
                  data-ocid="contact.submit_button"
                >
                  {submitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="bg-parth-ivory rounded-xl border border-parth-beige-border p-6 space-y-5">
              <h3 className="font-playfair text-xl font-bold text-parth-maroon">
                Contact Information
              </h3>

              {[
                {
                  icon: (
                    <MapPin
                      size={18}
                      className="text-parth-gold-muted mt-0.5 flex-shrink-0"
                    />
                  ),
                  label: "Address",
                  value:
                    "PARTH CREATION, 1962/31, Krishna Cinema Compound, Palsana, Surat, Gujarat - 394315",
                },
                {
                  icon: (
                    <Phone
                      size={18}
                      className="text-parth-gold-muted flex-shrink-0"
                    />
                  ),
                  label: "Phone",
                  value: "+91 98241 00999",
                },
                {
                  icon: (
                    <Mail
                      size={18}
                      className="text-parth-gold-muted flex-shrink-0"
                    />
                  ),
                  label: "Email",
                  value: "info@parthcreation.in",
                },
                {
                  icon: (
                    <Clock
                      size={18}
                      className="text-parth-gold-muted flex-shrink-0"
                    />
                  ),
                  label: "Business Hours",
                  value: "Mon–Sat: 9:00 AM – 7:00 PM",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <p className="font-dm-sans text-xs text-parth-brown/60 uppercase tracking-wide font-medium">
                      {item.label}
                    </p>
                    <p className="font-dm-sans text-sm text-parth-brown mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919824100999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-parth-whatsapp text-white font-dm-sans font-semibold text-sm px-6 py-4 rounded-full hover:opacity-90 transition-opacity w-full"
              data-ocid="contact.primary_button"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp: +91 98241 00999
            </a>

            <div className="bg-parth-ivory rounded-xl border border-parth-beige-border p-5">
              <h4 className="font-playfair text-base font-bold text-parth-maroon mb-2">
                Why Choose Parth Creation?
              </h4>
              <ul className="space-y-2">
                {[
                  "ISO-quality embroidery machines",
                  "Experienced digitizers & artisans",
                  "Bulk & custom orders welcome",
                  "Competitive pricing & fast delivery",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-dm-sans text-sm text-parth-brown"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-parth-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
