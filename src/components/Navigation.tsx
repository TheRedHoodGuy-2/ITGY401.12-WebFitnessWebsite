import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../App';

interface NavigationProps {
  setCurrentPage: (page: Page) => void;
}

export function Navigation({ setCurrentPage }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-white text-2xl tracking-tight hover:text-orange-600 transition-colors"
          >
            FITPRO
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('classes')}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Classes
            </button>
            <button 
              onClick={() => handleNavClick('membership')}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Membership
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavClick('membership')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => handleNavClick('home')}
              className="block w-full text-left text-neutral-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="block w-full text-left text-neutral-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('classes')}
              className="block w-full text-left text-neutral-300 hover:text-white transition-colors"
            >
              Classes
            </button>
            <button 
              onClick={() => handleNavClick('membership')}
              className="block w-full text-left text-neutral-300 hover:text-white transition-colors"
            >
              Membership
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left text-neutral-300 hover:text-white transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavClick('membership')}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
