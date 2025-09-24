import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const ModernHero = () => {
  return (
    <section className="relative p-6 lg:p-8 bg-gradient-to-br from-card via-card to-secondary/50 border border-border rounded-2xl shadow-premium overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-48 -translate-y-24"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-40 translate-y-20"></div>
      
      <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
        {/* Content */}
        <div>
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            En vedette cette semaine
          </Badge>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Objets rares, experts vérifiés, enchères sécurisées.
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6 max-w-lg leading-relaxed">
            Découvrez une sélection soignée de véhicules, montres, œuvres d'art et pièces de collection. 
            Chaque lot est examiné par des spécialistes pour garantir authenticité et qualité.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Button className="bg-brand-gradient hover:opacity-90 font-semibold px-6">
              Voir les ventes
            </Button>
            <Button variant="outline" className="border-border hover:bg-secondary/80">
              Commencer à vendre
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-secondary/80 to-card border border-border/50 rounded-xl p-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>💬 24/7 Support</span>
              <span>🔒 Paiement protégé</span>
              <span>🚚 Suivi de livraison</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-xl overflow-hidden border border-border/50 bg-secondary/30">
          <div 
            className="aspect-video bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop')"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};