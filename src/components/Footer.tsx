import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="gradient-primary rounded-lg p-2">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">InvestHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering investors with accessible, secure, and profitable investment opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#features" className="text-muted-foreground hover:text-primary transition-smooth">Features</Link></li>
              <li><Link to="/#how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">How It Works</Link></li>
              <li><Link to="/learn" className="text-muted-foreground hover:text-primary transition-smooth">Learn</Link></li>
              <li><Link to="/auth" className="text-muted-foreground hover:text-primary transition-smooth">Sign In</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Investment Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Risk Assessment</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Market News</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                support@investhub.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 InvestHub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-smooth">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
