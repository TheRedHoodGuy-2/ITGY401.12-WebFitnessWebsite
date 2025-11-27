import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Page } from '../App';

interface ProgramsProps {
  setCurrentPage: (page: Page) => void;
}

const programs = [
  {
    title: 'Strength Training',
    description: 'Build muscle and increase strength with our comprehensive resistance training program.',
    image: 'https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc2NDE2NTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '45 min',
    level: 'Intermediate',
    page: 'program-strength' as Page,
  },
  {
    title: 'Yoga & Flexibility',
    description: 'Improve flexibility, balance, and mindfulness through guided yoga sessions.',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd29ya291dCUyMGNsYXNzfGVufDF8fHx8MTc2NDI0ODA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '60 min',
    level: 'All Levels',
    page: 'program-yoga' as Page,
  },
  {
    title: 'Cardio Blast',
    description: 'High-intensity cardio workouts designed to burn calories and boost endurance.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBmaXRuZXNzJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY0MjQ4MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '30 min',
    level: 'Advanced',
    page: 'program-cardio' as Page,
  },
];

export function Programs({ setCurrentPage }: ProgramsProps) {
  return (
    <section id="programs" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600/10 border border-orange-600/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-500 text-sm tracking-wide">OUR PROGRAMS</span>
          </div>
          <h2 className="text-white text-4xl sm:text-5xl mb-4">
            Find Your Perfect Workout
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Choose from a variety of programs designed by experts to meet your fitness goals
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-600/50 transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex gap-3 mb-4">
                  <span className="bg-orange-600/10 text-orange-500 text-xs px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                  <span className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full">
                    {program.level}
                  </span>
                </div>

                <h3 className="text-white text-2xl mb-3">{program.title}</h3>
                <p className="text-neutral-400 mb-6">{program.description}</p>

                <button 
                  onClick={() => {
                    setCurrentPage(program.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-orange-600 hover:text-orange-500 flex items-center gap-2 group/btn transition-colors"
                >
                  Learn More
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Programs Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              setCurrentPage('classes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-transparent border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-600 hover:text-white transition-all"
          >
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
}
