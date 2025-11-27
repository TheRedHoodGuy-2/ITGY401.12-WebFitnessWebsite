import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const trainers = [
  {
    name: 'Sarah Johnson',
    specialty: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBmaXRuZXNzfGVufDF8fHx8MTc2NDIyMjMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    experience: '10+ Years',
  },
  {
    name: 'Michael Chen',
    specialty: 'CrossFit & HIIT',
    image: 'https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMGNvYWNofGVufDF8fHx8MTc2NDI0ODA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    experience: '8+ Years',
  },
  {
    name: 'Emily Rodriguez',
    specialty: 'Yoga & Pilates',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd29ya291dCUyMGNsYXNzfGVufDF8fHx8MTc2NDI0ODA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    experience: '12+ Years',
  },
  {
    name: 'David Martinez',
    specialty: 'Sports Performance',
    image: 'https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc2NDE2NTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    experience: '15+ Years',
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600/10 border border-orange-600/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-500 text-sm tracking-wide">OUR TEAM</span>
          </div>
          <h2 className="text-white text-4xl sm:text-5xl mb-4">
            Meet Your Expert Trainers
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Certified professionals committed to helping you achieve your fitness goals
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-600/50 transition-all group"
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
                
                {/* Social Links - Show on Hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg transition-colors">
                    <Instagram size={18} />
                  </button>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg transition-colors">
                    <Twitter size={18} />
                  </button>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg transition-colors">
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white text-xl mb-2">{trainer.name}</h3>
                <p className="text-orange-600 mb-2">{trainer.specialty}</p>
                <p className="text-neutral-400 text-sm">{trainer.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
