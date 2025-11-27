import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-white text-2xl mb-4 tracking-tight">FITPRO</div>
            <p className="text-neutral-400 mb-6">
              Transform your body and mind with our world-class fitness programs and expert guidance.
            </p>
            <div className="flex gap-3">
              <button className="bg-neutral-900 hover:bg-orange-600 text-neutral-400 hover:text-white p-2 rounded-lg transition-all">
                <Facebook size={20} />
              </button>
              <button className="bg-neutral-900 hover:bg-orange-600 text-neutral-400 hover:text-white p-2 rounded-lg transition-all">
                <Instagram size={20} />
              </button>
              <button className="bg-neutral-900 hover:bg-orange-600 text-neutral-400 hover:text-white p-2 rounded-lg transition-all">
                <Twitter size={20} />
              </button>
              <button className="bg-neutral-900 hover:bg-orange-600 text-neutral-400 hover:text-white p-2 rounded-lg transition-all">
                <Youtube size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-neutral-400 hover:text-orange-600 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentPage('classes');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-neutral-400 hover:text-orange-600 transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <a href="#trainers" className="text-neutral-400 hover:text-orange-600 transition-colors">
                  Trainers
                </a>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentPage('membership');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-neutral-400 hover:text-orange-600 transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-neutral-400 hover:text-orange-600 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-neutral-400 hover:text-orange-600 transition-colors"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentPage('membership');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-neutral-400 hover:text-orange-600 transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-neutral-400 hover:text-orange-600 transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400">
                  Ilisan-Remo LGA. Babcock University.<br />
                  Ogun State, Nigeria.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-600 flex-shrink-0" />
                <span className="text-neutral-400">+234 - 123 - 456 - 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-orange-600 flex-shrink-0" />
                <span className="text-neutral-400">info@fitpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-neutral-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-xl mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-neutral-400 mb-6">
              Get fitness tips, workout plans, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-900 border border-neutral-800 rounded-full px-6 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-600"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2025 FITPRO. All rights reserved. Built with passion for fitness.
          </p>
        </div>
      </div>
    </footer>
  );
}
