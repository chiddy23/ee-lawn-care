import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-bark text-cream/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-sage mb-3">
              E&amp;E Lawn Care Service
            </h3>
            <p className="font-accent text-earth italic text-lg mb-4">
              &quot;Your Lawn Is My Problem!&quot;
            </p>
            <p className="text-sm leading-relaxed">
              Family-owned lawn care proudly serving North Port, Port Charlotte,
              and surrounding communities in Southwest Florida.
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-sage transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg text-cream mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">&#9742;</span>
                <a href="tel:+19415550123" className="hover:text-sage transition-colors">
                  (941) 555-0123
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">&#9993;</span>
                <a href="mailto:info@eelawncare.com" className="hover:text-sage transition-colors">
                  info@eelawncare.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">&#9719;</span>
                <span>Mon &ndash; Sat: 7:00 AM &ndash; 6:00 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">&#9873;</span>
                <span>North Port &amp; Port Charlotte, FL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="green-divider mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>&copy; {new Date().getFullYear()} E&amp;E Lawn Care Service, LLC. All rights reserved.</p>
          <p>Serving Southwest Florida with pride.</p>
        </div>
      </div>
    </footer>
  );
}
