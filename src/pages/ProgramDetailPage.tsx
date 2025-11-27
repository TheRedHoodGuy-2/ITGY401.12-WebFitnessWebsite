import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Page } from '../App';
import { Clock, Users, TrendingUp, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProgramDetailPageProps {
  setCurrentPage: (page: Page) => void;
  programType: 'strength' | 'yoga' | 'cardio';
}

const programData = {
  strength: {
    title: 'Strength Training',
    subtitle: 'Build Muscle & Increase Power',
    description: 'Our comprehensive strength training program is designed to help you build lean muscle mass, increase your overall strength, and transform your physique. Whether you\'re a beginner or an experienced lifter, our expert trainers will guide you through progressive workouts tailored to your goals.',
    image: 'https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc2NDE2NTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '45-60 min',
    level: 'All Levels',
    benefits: [
      'Build lean muscle mass',
      'Increase overall strength',
      'Boost metabolism',
      'Improve bone density',
      'Enhance functional fitness',
      'Progressive overload training'
    ],
    whatToExpect: [
      'Warm-up and mobility exercises',
      'Compound movements (squats, deadlifts, bench press)',
      'Isolation exercises for targeted muscle groups',
      'Progressive weight increases',
      'Proper form coaching',
      'Cool-down and stretching'
    ]
  },
  yoga: {
    title: 'Yoga & Flexibility',
    subtitle: 'Find Balance & Inner Peace',
    description: 'Discover the transformative power of yoga with our expert-led classes. From gentle stretching to dynamic flows, our yoga programs help you improve flexibility, reduce stress, and cultivate mindfulness. All levels welcome.',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd29ya291dCUyMGNsYXNzfGVufDF8fHx8MTc2NDI0ODA2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '60-75 min',
    level: 'All Levels',
    benefits: [
      'Improve flexibility and mobility',
      'Reduce stress and anxiety',
      'Enhance mind-body connection',
      'Better posture and alignment',
      'Increased energy and vitality',
      'Improved sleep quality'
    ],
    whatToExpect: [
      'Breathing exercises (pranayama)',
      'Sun salutations and flow sequences',
      'Standing and seated postures',
      'Balance poses',
      'Core strengthening',
      'Deep relaxation (savasana)'
    ]
  },
  cardio: {
    title: 'Cardio Blast',
    subtitle: 'High-Intensity Fat Burning',
    description: 'Get your heart pumping with our high-intensity cardio workouts. These fast-paced sessions are designed to maximize calorie burn, improve cardiovascular endurance, and boost your metabolism long after your workout ends.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBmaXRuZXNzJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY0MjQ4MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '30-45 min',
    level: 'Intermediate to Advanced',
    benefits: [
      'Maximum calorie burn',
      'Improved cardiovascular health',
      'Increased endurance and stamina',
      'Enhanced metabolic rate',
      'Better athletic performance',
      'Time-efficient workouts'
    ],
    whatToExpect: [
      'Dynamic warm-up',
      'High-intensity intervals',
      'Varied cardio exercises',
      'Plyometric movements',
      'Core engagement',
      'Active recovery periods'
    ]
  }
};

export function ProgramDetailPage({ setCurrentPage, programType }: ProgramDetailPageProps) {
  const program = programData[programType];

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-600/10 border border-orange-600/30 rounded-full px-4 py-2 mb-4">
                <span className="text-orange-500 text-sm tracking-wide">PROGRAM DETAILS</span>
              </div>
              <h1 className="text-white text-5xl sm:text-6xl mb-4 tracking-tight">
                {program.title}
              </h1>
              <p className="text-orange-600 text-2xl mb-6">{program.subtitle}</p>
              <p className="text-neutral-300 text-lg mb-8">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2">
                  <Clock className="text-orange-600" size={20} />
                  <span className="text-neutral-300">{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2">
                  <Users className="text-orange-600" size={20} />
                  <span className="text-neutral-300">{program.level}</span>
                </div>
              </div>

              <button 
                onClick={() => setCurrentPage('classes')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition-all"
              >
                View Class Schedule
              </button>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-600/10 p-3 rounded-lg">
                  <TrendingUp className="text-orange-600" size={28} />
                </div>
                <h2 className="text-white text-3xl">Program Benefits</h2>
              </div>
              <ul className="space-y-4">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-orange-600 rounded-full p-1 mt-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-600/10 p-3 rounded-lg">
                  <Target className="text-orange-600" size={28} />
                </div>
                <h2 className="text-white text-3xl">What to Expect</h2>
              </div>
              <ul className="space-y-4">
                {program.whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-orange-600 rounded-full p-1 mt-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl sm:text-5xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Join FITPRO today and start your {program.title.toLowerCase()} journey with expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('membership')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition-all"
            >
              View Membership Options
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
