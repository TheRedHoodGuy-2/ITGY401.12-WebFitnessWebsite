import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Page } from '../App';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  setCurrentPage: (page: Page) => void;
}

export function ContactPage({ setCurrentPage }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-600/10 border border-orange-600/30 rounded-full px-4 py-2 mb-4">
              <span className="text-orange-500 text-sm tracking-wide">GET IN TOUCH</span>
            </div>
            <h1 className="text-white text-5xl sm:text-6xl mb-6 tracking-tight">
              Contact <span className="text-orange-600">FITPRO</span>
            </h1>
            <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
              <h2 className="text-white text-3xl mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-neutral-300 block mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-600 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="text-neutral-300 block mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-600 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="text-neutral-300 block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-600 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="text-neutral-300 block mb-2">Subject</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-600 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="classes">Class Schedule</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="facilities">Facilities Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-neutral-300 block mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-600 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-white text-3xl mb-6">Contact Information</h2>
              <p className="text-neutral-300 mb-8">
                Get in touch with us through any of the following methods. We're here to help!
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-600/10 p-3 rounded-lg">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Visit Us</h3>
                    <p className="text-neutral-400">
                      123 Fitness Street<br />
                      Los Angeles, CA 90001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-600/10 p-3 rounded-lg">
                    <Phone className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Call Us</h3>
                    <p className="text-neutral-400">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-600/10 p-3 rounded-lg">
                    <Mail className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Email Us</h3>
                    <p className="text-neutral-400">info@fitpro.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-600/10 p-3 rounded-lg">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Opening Hours</h3>
                    <p className="text-neutral-400">
                      Monday - Friday: 5:00 AM - 11:00 PM<br />
                      Saturday - Sunday: 7:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-neutral-800 rounded-2xl h-64 flex items-center justify-center">
                <p className="text-neutral-400">Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}
