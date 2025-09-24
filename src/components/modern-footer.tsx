import { Separator } from '@/components/ui/separator';

export const ModernFooter = () => {
  return (
    <footer className="mt-12 py-8 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 font-bold text-xl mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-gradient shadow-glow flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded opacity-90"></div>
              </div>
              <span>Bidin<strong>souK</strong></span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Le marché des objets exceptionnels : voitures, montres, art, et plus encore.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground/90">Bidinsouk</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Presse</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground/90">Aide</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Vendre</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Expédition</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground/90">Légal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Conditions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border/50 mb-6" />

        <div className="text-center text-muted-foreground text-sm">
          © 2025 Bidinsouk. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};