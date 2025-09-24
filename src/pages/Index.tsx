import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { FeaturedAuctions } from '@/components/featured-auctions';
import { HowItWorks } from '@/components/how-it-works';
import { Footer } from '@/components/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedAuctions />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
