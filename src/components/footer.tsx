import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Gavel, Mail, Twitter, Facebook, Instagram, Shield, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-auction-gold rounded-lg flex items-center justify-center">
                <Gavel className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">Bidinsouk</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              The world's first completely free auction marketplace. 
              Connect directly with sellers, no platform fees ever.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Browse Auctions</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Start Selling</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">My Account</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Safety & Trust</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Seller Guidelines</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Buyer Protection</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-primary-foreground/80 mb-4">
              Get notified about new auctions and exclusive items.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-auction-gold text-primary hover:bg-auction-gold/90 font-semibold">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
            <span>© 2024 Bidinsouk. All rights reserved.</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-auction-gold">
              <Shield className="w-4 h-4" />
              <span className="font-medium">100% Free Platform</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> for collectors
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};