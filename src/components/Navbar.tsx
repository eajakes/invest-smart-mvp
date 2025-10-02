import { Button } from "@/components/ui/button";
import { TrendingUp, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="gradient-primary rounded-lg p-2">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">InvestHub</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/#features" className="text-sm font-medium hover:text-primary transition-smooth">
            Features
          </Link>
          <Link to="/#how-it-works" className="text-sm font-medium hover:text-primary transition-smooth">
            How It Works
          </Link>
          <Link to="/learn" className="text-sm font-medium hover:text-primary transition-smooth">
            Learn
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
              <Button variant="gradient" size="sm" asChild>
                <Link to="/auth">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
