// const footerLinks = {
//     Product: [
//         { name: 'Features', href: '#features' },
//         { name: 'Pricing', href: '#pricing' },
//         { name: 'Integrations', href: '#' },
//         { name: 'Changelog', href: '#' },
//     ],
//     Company: [
//         { name: 'About', href: '#' },
//         { name: 'Blog', href: '#' },
//         { name: 'Careers', href: '#' },
//         { name: 'Press', href: '#' },
//     ],
//     Support: [
//         { name: 'Help Center', href: '#' },
//         { name: 'Contact', href: '#contact' },
//         { name: 'Privacy Policy', href: '#' },
//         { name: 'Terms of Service', href: '#' },
//     ],
// };



// const Footer = () => {
//     return (
//         <footer className="bg-gymfinity-900 text-white pt-16 pb-8">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
//                     {/* Brand column */}
//                     <div className="lg:col-span-2">
//                         <a href="#" className="flex items-center gap-2.5 mb-4">
//                             <div className="w-9 h-9 bg-gymfinity-400 rounded-lg flex items-center justify-center">
//                                 <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <rect x="3" y="9" width="3" height="6" rx="1" fill="currentColor" />
//                                     <rect x="18" y="9" width="3" height="6" rx="1" fill="currentColor" />
//                                     <rect x="7" y="7" width="4" height="10" rx="1.5" fill="currentColor" />
//                                     <rect x="13" y="7" width="4" height="10" rx="1.5" fill="currentColor" />
//                                     <rect x="6" y="11" width="12" height="2" fill="currentColor" />
//                                 </svg>
//                             </div>
//                             <span className="text-xl font-bold text-white tracking-tight">Gymfinity</span>
//                         </a>
//                         <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
//                             The all-in-one gym management platform trusted by fitness businesses worldwide. Streamline your operations and grow your revenue.
//                         </p>

//                         {/* Social Icons */}
//                         <div className="flex items-center gap-3">
//                             {['twitter', 'linkedin', 'instagram', 'facebook'].map((social) => (
//                                 <a
//                                     key={social}
//                                     href="#"
//                                     className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gymfinity-400 transition-all duration-300 hover:-translate-y-0.5"
//                                 >
//                                     {social === 'twitter' && (
//                                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                                         </svg>
//                                     )}
//                                     {social === 'linkedin' && (
//                                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                                         </svg>
//                                     )}
//                                     {social === 'instagram' && (
//                                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//                                         </svg>
//                                     )}
//                                     {social === 'facebook' && (
//                                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                                         </svg>
//                                     )}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Link columns */}
//                     {Object.entries(footerLinks).map(([category, links]) => (
//                         <div key={category}>
//                             <h4 className="text-sm font-bold text-white mb-4">{category}</h4>
//                             <ul className="space-y-2.5">
//                                 {links.map((link) => (
//                                     <li key={link.name}>
//                                         <a
//                                             href={link.href}
//                                             className="text-sm text-gray-400 hover:text-gymfinity-400 transition-colors duration-200"
//                                         >
//                                             {link.name}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//                     <p className="text-sm text-gray-400">
//                         © 2026 GymFinity. All rights reserved.
//                     </p>
//                     <div className="flex items-center gap-6">
//                         <a href="#" className="text-sm text-gray-400 hover:text-gymfinity-400 transition-colors">Privacy</a>
//                         <a href="#" className="text-sm text-gray-400 hover:text-gymfinity-400 transition-colors">Terms</a>
//                         <a href="#" className="text-sm text-gray-400 hover:text-gymfinity-400 transition-colors">Cookies</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



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
    name: "twitter",
    url: "https://twitter.com/YOUR_USERNAME",
    icon: FaTwitter,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/YOUR_USERNAME",
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
          © {new Date().getFullYear()} Gymfinity. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
