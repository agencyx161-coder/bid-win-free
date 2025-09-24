import { Badge } from '@/components/ui/badge';

export const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary/80 to-secondary border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
          <span>Expédition rapide • Retours faciles • Service client 7j/7</span>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs font-semibold border-border/50">
              FR
            </Badge>
            <Badge variant="secondary" className="text-xs font-semibold border-border/50">
              € EUR
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};