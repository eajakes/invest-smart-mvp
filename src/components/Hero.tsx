import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-investment.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              Trusted by 50,000+ investors
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Invest Smart,
              <br />
              <span className="text-gradient">Grow Wealth</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Access a world of investment opportunities. From stocks to crypto, real estate to funds — all in one simple platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
                <Link to="/auth">
                  Start Investing
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/learn">Learn More</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-secondary">
                  <Shield className="h-4 w-4" />
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <p className="text-sm text-muted-foreground">Secure</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-2xl font-bold">12.5%</span>
                </div>
                <p className="text-sm text-muted-foreground">Avg. Returns</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-accent">
                  <Users className="h-4 w-4" />
                  <span className="text-2xl font-bold">50K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Investors</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="Investment Dashboard" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
