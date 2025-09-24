import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, User } from 'lucide-react';

export const ModernNavbar = () => {
  const categories = [
    'Voitures', 'Montres', 'Art', 'Mode', 'Maison', 
    'Jeux & Jouets', 'Hi‑Tech', 'Collections', 'Plus…'
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_auto] items-center gap-4 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 font-bold text-xl">
            <div className="w-9 h-9 rounded-xl bg-brand-gradient shadow-glow flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded opacity-90"></div>
            </div>
            <span>Bidin<strong>souK</strong></span>
          </a>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Rechercher des objets uniques, marques, catégories…"
              className="pl-12 py-3 bg-input border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/25"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="border border-border/50 hover:border-border">
              Vendre
            </Button>
            <Button className="bg-brand-gradient hover:opacity-90 font-semibold">
              Se connecter
            </Button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border border-border/50"></div>
          </div>
        </div>

        {/* Categories */}
        <nav className="flex gap-2 pb-4 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="whitespace-nowrap px-4 py-2 rounded-full border border-border/50 bg-secondary/50 text-sm font-semibold text-foreground/90 hover:border-border transition-colors"
            >
              {category}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};