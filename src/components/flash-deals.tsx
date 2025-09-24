import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Countdown } from '@/components/ui/countdown';

interface DealCardProps {
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  bids: number;
  endDate: Date;
  imageUrl: string;
}

const DealCard: React.FC<DealCardProps> = ({ 
  title, price, originalPrice, discount, bids, endDate, imageUrl 
}) => {
  return (
    <Card className="overflow-hidden border-border/50 bg-gradient-to-b from-card to-secondary/50 shadow-premium hover:shadow-auction transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground font-bold">
          {discount}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xl font-bold">{price}</span>
          <span className="text-muted-foreground line-through font-semibold">{originalPrice}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span>{bids} enchères</span>
          <div className="bg-secondary/80 border border-border/50 px-2 py-1 rounded-lg font-mono">
            <Countdown targetDate={endDate} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const FlashDeals = () => {
  const now = new Date();
  
  const deals: DealCardProps[] = [
    {
      title: "Porsche 911 (2011)",
      price: "€72 500",
      originalPrice: "€88 500",
      discount: "-18%",
      bids: 98,
      endDate: new Date(now.getTime() + 72 * 60 * 1000),
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Rolex Submariner",
      price: "€9 350",
      originalPrice: "€10 650",
      discount: "-12%",
      bids: 53,
      endDate: new Date(now.getTime() + 306 * 60 * 1000),
      imageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Table design en noyer",
      price: "€1 120",
      originalPrice: "€1 490",
      discount: "-25%",
      bids: 18,
      endDate: new Date(now.getTime() + 681 * 60 * 1000),
      imageUrl: "https://images.unsplash.com/photo-1553532435-93d532a45f29?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Casque Hi‑Fi audiophile",
      price: "€280",
      originalPrice: "€399",
      discount: "-30%",
      bids: 42,
      endDate: new Date(now.getTime() + 45 * 60 * 1000),
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-baseline gap-3">
          <h2 className="text-2xl font-bold">Dernières chances</h2>
          <Badge className="bg-warning/20 text-warning border-warning/30">
            Se termine bientôt ⏳
          </Badge>
        </div>
        <Button variant="outline" className="border-border/50 hover:bg-secondary/80">
          Tout voir
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal, index) => (
          <DealCard key={index} {...deal} />
        ))}
      </div>
    </section>
  );
};