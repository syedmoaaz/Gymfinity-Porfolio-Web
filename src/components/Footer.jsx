const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  Support: [
    { name: "Help Center", href: "#" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

import { FaLinkedinIn, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const socialLinks = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/company/gymfinitysoftware/",
    icon: FaLinkedinIn,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/thegymfinity?igsh=MWMxbDRzN2c5OHVsZg==",
    icon: FaInstagram,
  },
 
  {
    name: "facebook",
    url: "https://www.facebook.com/people/GymFinity/61588492396027/#",
    icon: FaFacebookF,
  },
];

const Footer = () => {
  return (
    <footer className="bg-gymfinity-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <span className="text-xl font-bold tracking-tight">
              GymFinity
            </span>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mt-4 mb-6">
              The all-in-one gym management platform trusted by fitness businesses worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
  {socialLinks.map((social) => {
    const Icon = social.icon;

    return (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gymfinity-400 transition-all duration-300 hover:-translate-y-0.5"
      >
        <Icon className="w-4 h-4 text-white" />
      </a>
    );
  })}
</div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                    target="_blank"
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-gymfinity-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} GymFinity. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
