import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Programs } from './components/Programs';
import { Trainers } from './components/Trainers';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Hero />
      <Features />
      <Programs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
