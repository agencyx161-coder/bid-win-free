import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Countdown } from '@/components/ui/countdown';
import { Heart, Eye, ShieldCheck } from 'lucide-react';

interface AuctionCardProps {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  reservePrice?: number;
  reserveMet: boolean;
  endDate: Date;
  imageUrl: string;
  bidCount: number;
  watchingCount: number;
  isWatched?: boolean;
  category: string;
}

export const AuctionCard: React.FC<AuctionCardProps> = ({
  title,
  description,
  currentBid,
  reservePrice,
  reserveMet,
  endDate,
  imageUrl,
  bidCount,
  watchingCount,
  isWatched = false,
  category
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-premium hover:shadow-auction transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={reserveMet ? "default" : "secondary"} className="text-xs font-medium">
            {reserveMet ? (
              <>
                <ShieldCheck className="w-3 h-3 mr-1" />
                Reserve Met
              </>
            ) : (
              'Reserve Not Met'
            )}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Button
            variant="secondary"
            size="sm"
            className={`w-8 h-8 p-0 rounded-full ${isWatched ? 'text-destructive' : ''}`}
          >
            <Heart className={`w-4 h-4 ${isWatched ? 'fill-current' : ''}`} />
          </Button>
        </div>
        <div className="absolute bottom-3 right-3">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Current Bid</div>
              <div className="text-xl font-bold text-primary">
                {formatCurrency(currentBid)}
              </div>
            </div>
            {reservePrice && (
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Reserve</div>
                <div className="text-sm font-medium">
                  {formatCurrency(reservePrice)}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{bidCount} bids</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {watchingCount} watching
            </span>
          </div>
          
          <div className="border-t pt-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">Time remaining</span>
            </div>
            <Countdown
              targetDate={endDate}
              className="mb-3"
            />
            <Button 
              className="w-full bg-auction-premium hover:opacity-90 text-primary-foreground font-semibold"
              size="sm"
            >
              Place Bid
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};