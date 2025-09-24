import { Topbar } from '@/components/topbar';
import { ModernNavbar } from '@/components/modern-navbar';
import { ModernHero } from '@/components/modern-hero';
import { FlashDeals } from '@/components/flash-deals';
import { Collections } from '@/components/collections';
import { ModernFeatures } from '@/components/modern-features';
import { Testimonials } from '@/components/testimonials';
import { ModernFooter } from '@/components/modern-footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <ModernNavbar />
      <main className="container mx-auto px-4 space-y-12">
        <ModernHero />
        <FlashDeals />
        <Collections />
        <ModernFeatures />
        <Testimonials />
      </main>
      <ModernFooter />
    </div>
  );
};

export default Index;
