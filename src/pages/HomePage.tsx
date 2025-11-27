import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Programs } from '../components/Programs';
import { Trainers } from '../components/Trainers';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import { Page } from '../App';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
      <Features />
      <Programs setCurrentPage={setCurrentPage} />
      <Trainers />
      <Pricing setCurrentPage={setCurrentPage} />
      <Testimonials />
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}
