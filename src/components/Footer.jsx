import React from 'react'
import { Instagram, Youtube, Twitter, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-pixel-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-pixel text-xl">
              PIXEL<span className="text-neon-red">ONE</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Play the Past. Power the Present.
            </p>
            <p className="text-white/60 text-sm">
              Bringing retro gaming to the modern era with premium handheld consoles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-white/70 hover:text-neon-red transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-neon-red transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#showcase" className="text-white/70 hover:text-neon-red transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-neon-red transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#buy" className="text-white/70 hover:text-neon-red transition-colors text-sm">
                  Buy Now
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-neon-blue transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-neon-blue transition-colors text-sm">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-neon-blue transition-colors text-sm">
                  Returns & Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-neon-blue transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-neon-blue transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail size={18} className="flex-shrink-0 mt-0.5 text-pixel-coral" />
                <a href="mailto:akashp2010610@gmail.com" className="hover:text-white transition-colors">
                  akashp2010610@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone size={18} className="flex-shrink-0 mt-0.5 text-pixel-teal" />
                <a href="tel:+917975653922" className="hover:text-white transition-colors">
                  +91 7975653922
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-pixel-coral" />
                <span>India</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-neon-red transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-neon-red transition-all duration-300 hover:scale-110"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-neon-blue transition-all duration-300 hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} PixelOne. All rights reserved.
            </p>
            <p className="text-white/70 text-sm font-pixel text-center md:text-right">
              PLAY THE PAST. <span className="text-neon-red">POWER</span> THE <span className="text-neon-blue">PRESENT</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-neon-red to-pink-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
      >
        <svg
          className="w-6 h-6 text-white group-hover:animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer
