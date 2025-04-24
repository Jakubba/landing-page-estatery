import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { TabSelector } from './components/TabSelector/TabSelector';
import { tabSelectorContent } from './data/tabSelectorContent';
import TestimonialSection from './components/TestimonialsSection/TestimonialSection';

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center bg-white">
        <Navbar />
        <Hero />
        <TabSelector
          heading={tabSelectorContent.heading}
          description={tabSelectorContent.description}
        />
        <TestimonialSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
