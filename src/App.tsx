import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ClassesPage } from './pages/ClassesPage';
import { MembershipPage } from './pages/MembershipPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';

export type Page = 'home' | 'about' | 'contact' | 'classes' | 'membership' | 'program-strength' | 'program-yoga' | 'program-cardio';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case 'classes':
        return <ClassesPage setCurrentPage={setCurrentPage} />;
      case 'membership':
        return <MembershipPage setCurrentPage={setCurrentPage} />;
      case 'program-strength':
        return <ProgramDetailPage setCurrentPage={setCurrentPage} programType="strength" />;
      case 'program-yoga':
        return <ProgramDetailPage setCurrentPage={setCurrentPage} programType="yoga" />;
      case 'program-cardio':
        return <ProgramDetailPage setCurrentPage={setCurrentPage} programType="cardio" />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      {renderPage()}
    </div>
  );
}
