import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Gavel, HandHeart, Shield } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover Items',
      description: 'Browse thousands of unique items across categories like art, watches, collectibles, and more.',
      badge: 'Free to Browse'
    },
    {
      icon: Gavel,
      title: 'Place Your Bid',
      description: 'Use our proxy bidding system to bid automatically up to your maximum amount. No sniping allowed!',
      badge: 'Anti-Sniping'
    },
    {
      icon: HandHeart,
      title: 'Win & Connect',
      description: 'If you win, connect directly with the seller for payment and delivery. Simple and transparent.',
      badge: 'Direct Deal'
    },
    {
      icon: Shield,
      title: 'Complete Transaction',
      description: 'Mark items as paid and received. Build your reputation for future auctions.',
      badge: '100% Free'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
            How Bidinsouk Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Simple, Transparent, Free
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform connects buyers and sellers directly, with no platform fees. 
            Here's how easy it is to participate in our auction community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-premium hover:shadow-auction transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-auction-gold text-primary font-semibold px-3 py-1">
                    {step.badge}
                  </Badge>
                </div>
                
                <div className="w-16 h-16 bg-auction-premium rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                <div className="absolute top-4 right-4 w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm font-bold text-muted-foreground">
                  {index + 1}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
            <Shield className="w-4 h-4" />
            <span className="font-medium">Zero platform fees • Direct seller contact • Secure transactions</span>
          </div>
        </div>
      </div>
    </section>
  );
};