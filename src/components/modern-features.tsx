import { Card, CardContent } from '@/components/ui/card';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-border/50 bg-gradient-to-b from-card to-secondary/50 shadow-premium hover:shadow-auction transition-all duration-300">
      <CardContent className="p-6">
        <div className="text-2xl mb-3">{icon}</div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export const ModernFeatures = () => {
  const features: FeatureProps[] = [
    {
      icon: "🔍",
      title: "Expertise",
      description: "Des sélections vérifiées par des experts pour assurer authenticité et qualité."
    },
    {
      icon: "🛡️",
      title: "Paiements sécurisés",
      description: "Protection des transactions et escrow jusqu'à la livraison."
    },
    {
      icon: "🚀",
      title: "Expédition suivie",
      description: "Logistique internationale avec suivi temps réel."
    }
  ];

  return (
    <section className="py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Pourquoi Bidinsouk ?</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};