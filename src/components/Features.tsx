import { Dumbbell, Heart, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Professional Equipment',
    description: 'State-of-the-art facilities with the latest fitness equipment and technology.',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Certified professionals dedicated to helping you reach your fitness goals.',
  },
  {
    icon: Heart,
    title: 'Personalized Programs',
    description: 'Custom workout plans tailored to your fitness level and objectives.',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Track your progress and celebrate achievements with our success system.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600/10 border border-orange-600/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-500 text-sm tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-white text-4xl sm:text-5xl mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            We provide comprehensive fitness solutions designed to help you achieve lasting results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-orange-600/50 transition-all hover:transform hover:scale-105"
            >
              <div className="bg-orange-600/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="text-orange-600" size={28} />
              </div>
              <h3 className="text-white text-xl mb-3">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
