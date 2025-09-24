import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  stars: number;
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ stars, quote, author }) => {
  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? "text-warning" : "text-muted-foreground/30"}>
        ★
      </span>
    ));
  };

  return (
    <Card className="border-border/50 bg-gradient-to-b from-card to-secondary/50 shadow-premium">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4 text-lg tracking-wider">
          {renderStars(stars)}
        </div>
        <p className="text-foreground/90 mb-4 leading-relaxed">"{quote}"</p>
        <small className="text-muted-foreground font-medium">— {author}</small>
      </CardContent>
    </Card>
  );
};

export const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      stars: 5,
      quote: "Processus fluide, service client réactif. J'ai remporté une montre en parfait état.",
      author: "Salma"
    },
    {
      stars: 5,
      quote: "Photos fidèles et livraison rapide. Les enchères sont vraiment fun !",
      author: "Mehdi" 
    },
    {
      stars: 4,
      quote: "Belles trouvailles vintage. Je recommande pour les passionnés.",
      author: "Amina"
    },
    {
      stars: 5,
      quote: "Vente de ma collection très simple, paiement sécurisé.",
      author: "Karim"
    }
  ];

  return (
    <section className="py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Ils nous font confiance</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};