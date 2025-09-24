import { Button } from '@/components/ui/button';

interface CollectionTileProps {
  title: string;
  imageUrl: string;
  href: string;
}

const CollectionTile: React.FC<CollectionTileProps> = ({ title, imageUrl, href }) => {
  return (
    <a 
      href={href}
      className="relative rounded-xl overflow-hidden border border-border/50 bg-secondary/30 min-h-36 group hover:shadow-auction transition-all duration-300"
    >
      <img 
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover filter saturate-90 contrast-105 group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="font-bold text-white">{title}</h3>
      </div>
    </a>
  );
};

export const Collections = () => {
  const collections: CollectionTileProps[] = [
    {
      title: "Vintage",
      imageUrl: "https://images.unsplash.com/photo-1520975922284-9e0ce82759df?q=80&w=1200&auto=format&fit=crop",
      href: "#vintage"
    },
    {
      title: "Hi‑Tech",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
      href: "#hitech"
    },
    {
      title: "Art",
      imageUrl: "https://images.unsplash.com/photo-1520975693411-bafa2fc3a6b0?q=80&w=1200&auto=format&fit=crop",
      href: "#art"
    },
    {
      title: "Sneakers",
      imageUrl: "https://images.unsplash.com/photo-1491554150239-a9062e24de5a?q=80&w=1200&auto=format&fit=crop",
      href: "#sneakers"
    },
    {
      title: "Maison",
      imageUrl: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
      href: "#maison"
    },
    {
      title: "Mode",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
      href: "#mode"
    }
  ];

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Par collections</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-border/50 hover:bg-secondary/80">
            Voitures
          </Button>
          <Button variant="outline" size="sm" className="border-border/50 hover:bg-secondary/80">
            Montres
          </Button>
          <Button variant="outline" size="sm" className="border-border/50 hover:bg-secondary/80">
            Art & Design
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {collections.map((collection, index) => (
          <CollectionTile key={index} {...collection} />
        ))}
      </div>
    </section>
  );
};