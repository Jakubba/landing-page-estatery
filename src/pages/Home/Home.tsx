import { Footer } from '../../components/Footer/Footer';
import { Hero } from '../../components/Hero/Hero';
import { Navbar } from '../../components/Navbar/Navbar';
import { TabSelector } from '../../components/TabSelector/TabSelector';
import { houseListings, apartmentListings } from '../../data/listingsData';
import { tabSelectorContent } from '../../data/tabSelectorContent';
import TestimonialSection from '../../components/TestimonialsSection/TestimonialSection';

function Home() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center bg-white">
        <Navbar />
        <Hero />
        <TabSelector
          heading={tabSelectorContent.heading}
          description={tabSelectorContent.description}
          houseListings={houseListings}
          apartmentListings={apartmentListings}
        />
        <TestimonialSection />
        <Footer />
      </div>
    </>
  );
}

export default Home;
