import { Check } from 'lucide-react';
import { Page } from '../App';

interface PricingProps {
  setCurrentPage: (page: Page) => void;
}

const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Access to gym facilities',
      'Basic equipment usage',
      'Locker room access',
      'Mobile app access',
      'Community support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$59',
    period: '/month',
    description: 'Most popular for serious fitness enthusiasts',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      'Personal training session (2/month)',
      'Nutrition consultation',
      'Priority booking',
      'Guest passes (2/month)',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '$99',
    period: '/month',
    description: 'Ultimate package for maximum results',
    features: [
      'Everything in Pro',
      'Unlimited personal training',
      'Custom meal planning',
      'Recovery & spa access',
      'Private locker',
      'Guest passes (5/month)',
      '24/7 gym access',
    ],
    popular: false,
  },
];

export function Pricing({ setCurrentPage }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600/10 border border-orange-600/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-500 text-sm tracking-wide">PRICING</span>
          </div>
          <h2 className="text-white text-4xl sm:text-5xl mb-4">
            Choose Your Plan
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Flexible membership options designed to fit your lifestyle and budget
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-orange-600 to-orange-700 transform scale-105'
                  : 'bg-neutral-950 border border-neutral-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-neutral-950 text-orange-500 text-sm px-4 py-1 rounded-full border border-orange-600">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl mb-2 ${
                    plan.popular ? 'text-white' : 'text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? 'text-orange-100' : 'text-neutral-400'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`text-5xl ${
                    plan.popular ? 'text-white' : 'text-white'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`${
                    plan.popular ? 'text-orange-100' : 'text-neutral-400'
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 rounded-full p-0.5 ${
                        plan.popular ? 'bg-white' : 'bg-orange-600'
                      }`}
                    >
                      <Check
                        size={14}
                        className={plan.popular ? 'text-orange-600' : 'text-white'}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-white' : 'text-neutral-300'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setCurrentPage('membership');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full py-4 rounded-full transition-all ${
                  plan.popular
                    ? 'bg-white text-orange-600 hover:bg-neutral-100'
                    : 'bg-orange-600 text-white hover:bg-orange-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-neutral-400">
            All plans include a 7-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
