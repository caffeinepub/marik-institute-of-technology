import { Link, useRouterState } from "@tanstack/react-router";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Admissions", path: "/admissions" },
  { label: "Campus Life", path: "/campus-life" },
  { label: "Placements", path: "/placements" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      {/* Top bar */}
      <div className="bg-navy-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <p className="text-white/70 text-xs hidden sm:block">
            Under NIMS University, Jaipur, Rajasthan
          </p>
          <div className="flex items-center gap-4 text-xs text-white/70">
            <span>📞 +91-141-000-0000</span>
            <span className="hidden sm:inline">
              ✉ admissions@marikit.edu.in
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-gold flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-navy-dark" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm sm:text-base leading-tight">
                Marik Institute
              </div>
              <div className="text-gold text-xs font-medium leading-tight hidden sm:block">
                of Technology
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors duration-150 ${
                  isActive(link.path)
                    ? "text-gold bg-white/10"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Apply Now CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/admissions"
              className="hidden sm:inline-flex items-center bg-gold text-navy-dark px-4 py-2 rounded font-semibold text-sm hover:bg-gold-dark transition-colors duration-150"
            >
              Apply Now
            </Link>
            <button
              type="button"
              className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-3 pb-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-gold bg-white/10"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                onClick={() => setMobileOpen(false)}
                className="mt-2 mx-4 text-center bg-gold text-navy-dark px-4 py-2.5 rounded font-semibold text-sm hover:bg-gold-dark transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
