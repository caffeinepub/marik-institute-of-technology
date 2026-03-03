import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Admissions", path: "/admissions" },
  { label: "Campus Life", path: "/campus-life" },
  { label: "Placements", path: "/placements" },
  { label: "Contact", path: "/contact" },
];

const programs = [
  "B.Tech Computer Science",
  "B.Tech Mechanical Engg.",
  "B.Tech Civil Engineering",
  "B.Tech Electrical Engg.",
  "M.Tech Programs",
  "Specialized Courses",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "marikit-edu",
  );

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-gold flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-navy-dark" />
              </div>
              <div>
                <div className="font-bold text-base leading-tight">
                  Marik Institute
                </div>
                <div className="text-gold text-xs font-medium">
                  of Technology
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Empowering future engineers and innovators through academic
              excellence, research, and innovation.
            </p>
            <p className="text-gold text-xs font-semibold uppercase tracking-wider">
              Under NIMS University
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-gold text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Programs
            </h3>
            <ul className="space-y-2">
              {programs.map((prog) => (
                <li key={prog}>
                  <Link
                    to="/programs"
                    className="text-white/70 hover:text-gold text-sm transition-colors duration-150"
                  >
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>
                  Marik Institute of Technology,
                  <br />
                  Jaipur, Rajasthan 302001, India
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+91-141-000-0000</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>admissions@marikit.edu.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {year} Marik Institute of Technology. All rights reserved.</p>
          <p>
            Built with <span className="text-gold">♥</span> using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
