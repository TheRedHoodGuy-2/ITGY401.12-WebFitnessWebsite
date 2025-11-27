import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Page } from '../App';
import { Target, Users, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AboutPageProps {
  setCurrentPage: (page: Page) => void;
}

export function AboutPage({ setCurrentPage }: AboutPageProps) {
  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-600/10 border border-orange-600/30 rounded-full px-4 py-2 mb-4">
              <span className="text-orange-500 text-sm tracking-wide">ABOUT US</span>
            </div>
            <h1 className="text-white text-5xl sm:text-6xl mb-6 tracking-tight">
              Your Journey to a <span className="text-orange-600">Better You</span>
            </h1>
            <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto">
              For over 15 years, FITPRO has been transforming lives through fitness, dedication, and community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white text-4xl mb-6">Our Story</h2>
              <p className="text-neutral-300 mb-4">
                Founded in 2010, FITPRO started with a simple mission: to make world-class fitness accessible to everyone. What began as a small gym with a handful of members has grown into a thriving community of over 500 active members.
              </p>
              <p className="text-neutral-300 mb-4">
                We believe that fitness is not just about physical transformation—it's about building confidence, creating lasting habits, and becoming the best version of yourself.
              </p>
              <p className="text-neutral-300">
                Our state-of-the-art facilities, expert trainers, and supportive community create the perfect environment for you to achieve your goals, whatever they may be.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl sm:text-5xl mb-4">Our Core Values</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
              <div className="bg-orange-600/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-orange-600" size={32} />
              </div>
              <h3 className="text-white text-xl mb-3">Excellence</h3>
              <p className="text-neutral-400">
                We strive for excellence in everything we do, from our equipment to our coaching.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
              <div className="bg-orange-600/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-orange-600" size={32} />
              </div>
              <h3 className="text-white text-xl mb-3">Community</h3>
              <p className="text-neutral-400">
                We build a supportive community where everyone feels welcome and motivated.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
              <div className="bg-orange-600/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-orange-600" size={32} />
              </div>
              <h3 className="text-white text-xl mb-3">Results</h3>
              <p className="text-neutral-400">
                We're committed to helping you achieve real, measurable results.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
              <div className="bg-orange-600/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="text-orange-600" size={32} />
              </div>
              <h3 className="text-white text-xl mb-3">Passion</h3>
              <p className="text-neutral-400">
                We're passionate about fitness and helping you discover your passion too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-orange-600 text-5xl mb-2">15+</div>
              <div className="text-neutral-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-orange-600 text-5xl mb-2">500+</div>
              <div className="text-neutral-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-orange-600 text-5xl mb-2">50+</div>
              <div className="text-neutral-400">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-orange-600 text-5xl mb-2">100+</div>
              <div className="text-neutral-400">Classes Weekly</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl sm:text-5xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Join our community today and transform your life with FITPRO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('membership')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition-all"
            >
              View Membership Plans
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-transparent border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-600 hover:text-white transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}
