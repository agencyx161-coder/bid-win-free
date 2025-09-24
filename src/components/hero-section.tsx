import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingUp, Shield, Clock } from 'lucide-react';
import heroImage from '@/assets/auction-hero.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium auction items"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-auction-gold text-primary font-semibold px-3 py-1">
              100% Free Platform
            </Badge>
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              No Platform Fees
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover Rare
            <span className="block text-auction-gold">Treasures</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join the premier auction marketplace where collectors find extraordinary items. 
            No platform fees, just pure discovery and bidding excitement.
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for watches, art, collectibles..."
                className="pl-12 h-12 bg-background/95 backdrop-blur border-0 text-base"
              />
            </div>
            <Button 
              size="lg"
              className="bg-auction-gold-gradient hover:opacity-90 text-primary font-semibold px-8 h-12"
            >
              Search Auctions
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-auction-gold" />
              <span className="font-semibold">2,847</span>
              <span>Active Auctions</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-auction-gold" />
              <span className="font-semibold">$0</span>
              <span>Platform Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-auction-gold" />
              <span className="font-semibold">24/7</span>
              <span>Live Bidding</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-auction-gold/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-auction-gold/10 rounded-full blur-2xl" />
    </section>
  );
};