import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jessica Williams',
    role: 'Lost 30 lbs',
    content: 'FITPRO completely transformed my life. The trainers are amazing and the community is so supportive. I never thought I could achieve these results!',
    rating: 5,
  },
  {
    name: 'Mark Thompson',
    role: 'Gained 15 lbs muscle',
    content: 'The strength training program is incredible. I have seen results I never thought possible. The personalized approach really makes a difference.',
    rating: 5,
  },
  {
    name: 'Amanda Lee',
    role: 'Marathon Runner',
    content: 'As a runner, the cardio and conditioning programs have taken my performance to the next level. The facilities are top-notch and the staff is phenomenal.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600/10 border border-orange-600/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-500 text-sm tracking-wide">TESTIMONIALS</span>
          </div>
          <h2 className="text-white text-4xl sm:text-5xl mb-4">
            Success Stories
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Hear from our members who have transformed their lives
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-orange-600/50 transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-orange-600 text-orange-600" />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-300 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-800">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-neutral-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
