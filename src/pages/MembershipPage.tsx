import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Page } from '../App';
import { Check, X } from 'lucide-react';

interface MembershipPageProps {
  setCurrentPage: (page: Page) => void;
}

export function MembershipPage({ setCurrentPage }: MembershipPageProps) {
  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-600/10 border border-orange-600/30 rounded-full px-4 py-2 mb-4">
              <span className="text-orange-500 text-sm tracking-wide">MEMBERSHIP</span>
            </div>
            <h1 className="text-white text-5xl sm:text-6xl mb-6 tracking-tight">
              Choose Your <span className="text-orange-600">Plan</span>
            </h1>
            <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto">
              Flexible membership options designed to fit your lifestyle and budget. All plans include 7-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Basic Plan */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-white text-2xl mb-2">Basic</h3>
              <p className="text-neutral-400 text-sm mb-6">Perfect for beginners</p>
              <div className="mb-6">
                <span className="text-white text-5xl">$29</span>
                <span className="text-neutral-400">/month</span>
              </div>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full transition-all mb-8">
                Start Free Trial
              </button>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Access to gym facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Basic equipment usage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Locker room access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Mobile app access</span>
                </li>
                <li className="flex items-start gap-3">
                  <X size={20} className="text-neutral-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-500">Group classes</span>
                </li>
                <li className="flex items-start gap-3">
                  <X size={20} className="text-neutral-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-500">Personal training</span>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-orange-600 to-orange-700 rounded-2xl p-8 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-neutral-950 text-orange-500 text-sm px-4 py-1 rounded-full border border-orange-600">
                  MOST POPULAR
                </div>
              </div>
              <h3 className="text-white text-2xl mb-2">Pro</h3>
              <p className="text-orange-100 text-sm mb-6">For serious fitness enthusiasts</p>
              <div className="mb-6">
                <span className="text-white text-5xl">$59</span>
                <span className="text-orange-100">/month</span>
              </div>
              <button className="w-full bg-white text-orange-600 hover:bg-neutral-100 px-6 py-3 rounded-full transition-all mb-8">
                Start Free Trial
              </button>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Everything in Basic</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Unlimited group classes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">2 personal training sessions/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Nutrition consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Priority booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">2 guest passes/month</span>
                </li>
              </ul>
            </div>

            {/* Elite Plan */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-white text-2xl mb-2">Elite</h3>
              <p className="text-neutral-400 text-sm mb-6">Ultimate fitness experience</p>
              <div className="mb-6">
                <span className="text-white text-5xl">$99</span>
                <span className="text-neutral-400">/month</span>
              </div>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full transition-all mb-8">
                Start Free Trial
              </button>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Unlimited personal training</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Custom meal planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Recovery & spa access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">Private locker</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">5 guest passes/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">24/7 gym access</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-3xl mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-white text-lg mb-2">Can I cancel anytime?</h3>
                <p className="text-neutral-400">
                  Yes! All memberships are month-to-month with no long-term commitment. You can cancel anytime with 30 days notice.
                </p>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-white text-lg mb-2">Is there a free trial?</h3>
                <p className="text-neutral-400">
                  Absolutely! All new members get a 7-day free trial with full access to their chosen plan. No credit card required.
                </p>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-white text-lg mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-neutral-400">
                  Yes! You can change your membership plan at any time. Upgrades take effect immediately, and downgrades at your next billing cycle.
                </p>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-white text-lg mb-2">Do you offer student or military discounts?</h3>
                <p className="text-neutral-400">
                  Yes! We offer 15% off all memberships for students with valid ID and active military personnel. Contact us for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl sm:text-5xl mb-6">
            Still Have Questions?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Our team is here to help you find the perfect membership plan
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition-all"
          >
            Contact Us
          </button>
        </div>
      </section>

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}
