import React, { useState, useEffect } from "react";
import logo from "../assets/gymfinity-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Why Gymfinity", href: "#why-gymfinity" },
    { name: "Pricing", href: "#pricing" },
     { name: "Our Team", href: "#OurTeam" },
    { name: "Contact Us", href: "#contact" },
   
  ];

  useEffect(() => {
    const handleScroll = () => {

      // background blur
      setScrolled(window.scrollY > 20);

      // hide/show navbar based on scroll direction
      if (window.scrollY > lastScrollY && window.scrollY > 120) {
        setHideNav(true); // scrolling down
      } else {
        setHideNav(false); // scrolling up
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = () => {
    setHideNav(true); // hide navbar after click
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
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

            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Gymfinity Logo"
                className="h-9 lg:h-10 w-auto object-contain"
              />

              <span className="text-2xl lg:text-3xl font-bold text-gymfinity-400 leading-none">
                GymFinity
              </span>
            </a>

            {/* Desktop Menu */}
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

            {/* Login Button */}
            <div className="hidden md:flex">
              <a
                href="https://app.thegymfinity.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gymfinity-400 text-white text-sm font-semibold rounded-md hover:bg-gymfinity-600 transition duration-300"
              >
                Log In
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(true)}
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
      </nav>

      {/* Mobile Overlay */}
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
        <div className="p-6 flex items-center justify-between border-b">

          <span className="text-xl font-bold text-gymfinity-400">
            GymFinity
          </span>

          <button onClick={() => setMenuOpen(false)}>
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

        {/* Mobile Links */}
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

















