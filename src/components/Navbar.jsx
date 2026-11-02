import React, { useState, useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const { dark, toggleDark } = useTheme();

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Why GymFinity", href: "#why-gymfinity" },
    { name: "Pricing", href: "#pricing" },
    { name: "Our Team", href: "#OurTeam" },
    { name: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      if (y > lastScrollY.current && y > 120) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      lastScrollY.current = y;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (y / docHeight) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setHideNav(true);
    setMenuOpen(false);
  };

  const ThemeToggle = ({ className = "" }) => (
    <button
      type="button"
      onClick={toggleDark}
      className={`p-2 rounded-md text-gymfinity-900 hover:bg-gray-100 hover:text-gymfinity-400 transition duration-300 ${className}`}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
          hideNav ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-200"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/gymfinity-logo-new.png"
                alt="GymFinity Logo"
                className="h-9 lg:h-10 w-auto object-contain"
              />

              <span className="text-2xl lg:text-3xl font-bold text-gymfinity-400 leading-none">
                GymFinity
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-sm lg:text-base font-medium text-gymfinity-900 hover:text-gymfinity-400 transition duration-300 relative group"
                >
                  {link.name}

                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gymfinity-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <a
                href="https://app.thegymfinity.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gymfinity-400 text-white text-sm font-semibold rounded-md hover:bg-gymfinity-600 transition duration-300"
              >
                Log In
              </a>
            </div>

            <div className="md:hidden flex items-center gap-1">
              <ThemeToggle />
              <button
                className="p-2 rounded-md hover:bg-gray-100 transition"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6 text-gymfinity-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent pointer-events-none"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(scrollProgress)}
          aria-label="Page scroll progress"
        >
          <div
            className="h-full bg-gymfinity-400 shadow-[0_0_8px_rgba(58,175,169,0.45)] transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <span className="text-xl font-bold text-gymfinity-400">
            GymFinity
          </span>

          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="text-lg font-medium text-gray-800 hover:text-gymfinity-400 transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://app.thegymfinity.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-5 py-2 bg-gymfinity-400 text-white text-sm font-semibold rounded-md text-center hover:bg-gymfinity-600 transition"
          >
            Log In
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
