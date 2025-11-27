import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Page } from '../App';
import { Clock, Users, Calendar } from 'lucide-react';

interface ClassesPageProps {
  setCurrentPage: (page: Page) => void;
}

const schedule = [
  { day: 'Monday', classes: [
    { time: '6:00 AM', name: 'Morning Yoga', instructor: 'Emily Rodriguez', duration: '60 min', spots: 12 },
    { time: '9:00 AM', name: 'HIIT Cardio', instructor: 'Michael Chen', duration: '45 min', spots: 8 },
    { time: '12:00 PM', name: 'Strength Training', instructor: 'Sarah Johnson', duration: '60 min', spots: 10 },
    { time: '5:00 PM', name: 'CrossFit', instructor: 'David Martinez', duration: '60 min', spots: 15 },
    { time: '7:00 PM', name: 'Pilates', instructor: 'Emily Rodriguez', duration: '45 min', spots: 12 }
  ]},
  { day: 'Tuesday', classes: [
    { time: '6:00 AM', name: 'Spin Class', instructor: 'Michael Chen', duration: '45 min', spots: 20 },
    { time: '9:00 AM', name: 'Yoga Flow', instructor: 'Emily Rodriguez', duration: '60 min', spots: 15 },
    { time: '12:00 PM', name: 'Boxing', instructor: 'David Martinez', duration: '60 min', spots: 10 },
    { time: '5:00 PM', name: 'Strength & Conditioning', instructor: 'Sarah Johnson', duration: '60 min', spots: 12 },
    { time: '7:00 PM', name: 'Zumba', instructor: 'Michael Chen', duration: '45 min', spots: 25 }
  ]},
  { day: 'Wednesday', classes: [
    { time: '6:00 AM', name: 'Power Yoga', instructor: 'Emily Rodriguez', duration: '60 min', spots: 12 },
    { time: '9:00 AM', name: 'Circuit Training', instructor: 'Sarah Johnson', duration: '45 min', spots: 15 },
    { time: '12:00 PM', name: 'Cardio Blast', instructor: 'Michael Chen', duration: '30 min', spots: 20 },
    { time: '5:00 PM', name: 'CrossFit', instructor: 'David Martinez', duration: '60 min', spots: 15 },
    { time: '7:00 PM', name: 'Stretching & Mobility', instructor: 'Emily Rodriguez', duration: '45 min', spots: 20 }
  ]},
  { day: 'Thursday', classes: [
    { time: '6:00 AM', name: 'Boot Camp', instructor: 'David Martinez', duration: '60 min', spots: 15 },
    { time: '9:00 AM', name: 'Barre', instructor: 'Emily Rodriguez', duration: '45 min', spots: 12 },
    { time: '12:00 PM', name: 'Functional Training', instructor: 'Sarah Johnson', duration: '60 min', spots: 10 },
    { time: '5:00 PM', name: 'HIIT', instructor: 'Michael Chen', duration: '45 min', spots: 18 },
    { time: '7:00 PM', name: 'Yoga Restore', instructor: 'Emily Rodriguez', duration: '60 min', spots: 15 }
  ]},
  { day: 'Friday', classes: [
    { time: '6:00 AM', name: 'Morning Cardio', instructor: 'Michael Chen', duration: '45 min', spots: 20 },
    { time: '9:00 AM', name: 'Full Body Workout', instructor: 'Sarah Johnson', duration: '60 min', spots: 12 },
    { time: '12:00 PM', name: 'Yoga Flow', instructor: 'Emily Rodriguez', duration: '60 min', spots: 15 },
    { time: '5:00 PM', name: 'CrossFit', instructor: 'David Martinez', duration: '60 min', spots: 15 },
    { time: '7:00 PM', name: 'Dance Fitness', instructor: 'Michael Chen', duration: '45 min', spots: 25 }
  ]},
  { day: 'Saturday', classes: [
    { time: '8:00 AM', name: 'Weekend Warriors', instructor: 'Sarah Johnson', duration: '60 min', spots: 20 },
    { time: '10:00 AM', name: 'Yoga & Meditation', instructor: 'Emily Rodriguez', duration: '75 min', spots: 15 },
    { time: '12:00 PM', name: 'CrossFit Community', instructor: 'David Martinez', duration: '60 min', spots: 25 },
    { time: '2:00 PM', name: 'Family Fitness', instructor: 'Michael Chen', duration: '45 min', spots: 30 }
  ]},
  { day: 'Sunday', classes: [
    { time: '8:00 AM', name: 'Sunrise Yoga', instructor: 'Emily Rodriguez', duration: '60 min', spots: 20 },
    { time: '10:00 AM', name: 'Strength Fundamentals', instructor: 'Sarah Johnson', duration: '60 min', spots: 12 },
    { time: '12:00 PM', name: 'Active Recovery', instructor: 'Michael Chen', duration: '45 min', spots: 15 },
    { time: '4:00 PM', name: 'Sunday Stretch', instructor: 'Emily Rodriguez', duration: '45 min', spots: 20 }
  ]}
];

export function ClassesPage({ setCurrentPage }: ClassesPageProps) {
  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-600/10 border border-orange-600/30 rounded-full px-4 py-2 mb-4">
              <span className="text-orange-500 text-sm tracking-wide">CLASS SCHEDULE</span>
            </div>
            <h1 className="text-white text-5xl sm:text-6xl mb-6 tracking-tight">
              Weekly <span className="text-orange-600">Class Schedule</span>
            </h1>
            <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto">
              Join our expertly led group classes designed for all fitness levels. Book your spot today!
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {schedule.map((day, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <h2 className="text-white text-3xl mb-6">{day.day}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {day.classes.map((classItem, classIndex) => (
                  <div
                    key={classIndex}
                    className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 hover:border-orange-600/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-orange-600/10 text-orange-600 px-3 py-1 rounded-full text-sm">
                        {classItem.time}
                      </div>
                      <div className="flex items-center gap-1 text-neutral-400 text-sm">
                        <Users size={16} />
                        <span>{classItem.spots} spots</span>
                      </div>
                    </div>

                    <h3 className="text-white text-xl mb-2">{classItem.name}</h3>
                    <p className="text-neutral-400 text-sm mb-4">with {classItem.instructor}</p>

                    <div className="flex items-center gap-4 text-neutral-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{classItem.duration}</span>
                      </div>
                    </div>

                    <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full transition-all">
                      Book Class
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="text-orange-600 mx-auto mb-6" size={48} />
          <h2 className="text-white text-4xl sm:text-5xl mb-6">
            New to Group Classes?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Your first class is free! Come experience the energy of our community workouts.
          </p>
          <button 
            onClick={() => setCurrentPage('membership')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition-all"
          >
            Join FITPRO Today
          </button>
        </div>
      </section>

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}
