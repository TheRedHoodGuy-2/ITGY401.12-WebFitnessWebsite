import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-white text-2xl tracking-tight">FITPRO</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#programs" className="text-neutral-300 hover:text-white transition-colors">
                Programs
              </a>
              <a href="#trainers" className="text-neutral-300 hover:text-white transition-colors">
                Trainers
              </a>
              <a href="#pricing" className="text-neutral-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-neutral-300 hover:text-white transition-colors">
                About
              </a>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-colors">
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
              <a href="#programs" className="block text-neutral-300 hover:text-white transition-colors">
                Programs
              </a>
              <a href="#trainers" className="block text-neutral-300 hover:text-white transition-colors">
                Trainers
              </a>
              <a href="#pricing" className="block text-neutral-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#about" className="block text-neutral-300 hover:text-white transition-colors">
                About
              </a>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-colors">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1750698544932-c7471990f1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3NjQxOTQyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fitness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-orange-600/20 border border-orange-600/30 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-500 text-sm tracking-wide">TRANSFORM YOUR BODY</span>
            </div>
            
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight">
              Achieve Your
              <br />
              <span className="text-orange-600">Fitness Goals</span>
            </h1>
            
            <p className="text-neutral-300 text-lg sm:text-xl mb-8 max-w-2xl">
              Join thousands of members who have transformed their lives through our world-class training programs, expert coaches, and state-of-the-art facilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-neutral-950 transition-all">
                View Programs
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-neutral-800">
              <div>
                <div className="text-orange-600 text-3xl sm:text-4xl mb-2">500+</div>
                <div className="text-neutral-400 text-sm">Active Members</div>
              </div>
              <div>
                <div className="text-orange-600 text-3xl sm:text-4xl mb-2">50+</div>
                <div className="text-neutral-400 text-sm">Expert Trainers</div>
              </div>
              <div>
                <div className="text-orange-600 text-3xl sm:text-4xl mb-2">15+</div>
                <div className="text-neutral-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
