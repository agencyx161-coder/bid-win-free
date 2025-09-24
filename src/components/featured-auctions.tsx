import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AuctionCard } from '@/components/auction-card';
import { sampleAuctions } from '@/data/sampleAuctions';
import { ArrowRight, Flame } from 'lucide-react';

export const FeaturedAuctions = () => {
  // Get ending soon auctions (next 2 hours)
  const endingSoon = sampleAuctions
    .filter(auction => {
      const hoursLeft = (auction.endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60);
      return hoursLeft <= 2;
    })
    .slice(0, 3);
  
  // Get featured auctions (highest value or most watched)
  const featured = sampleAuctions
    .sort((a, b) => b.currentBid - a.currentBid)
    .slice(0, 6);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Ending Soon Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Flame className="w-6 h-6 text-destructive animate-pulse" />
                <h2 className="text-3xl font-bold text-primary">Ending Soon</h2>
              </div>
              <Badge className="bg-destructive/20 text-destructive border-destructive/30">
                Less than 2 hours left
              </Badge>
            </div>
            <Button variant="outline" className="group">
              View All
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {endingSoon.map((auction) => (
              <AuctionCard key={auction.id} {...auction} />
            ))}
          </div>
        </div>

        {/* Featured Auctions Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Featured Auctions</h2>
              <p className="text-muted-foreground">Discover premium items from verified sellers</p>
            </div>
            <Button variant="outline" className="group">
              Browse All Categories
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((auction) => (
              <AuctionCard key={auction.id} {...auction} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};