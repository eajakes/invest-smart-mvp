import { Shield, BarChart3, GraduationCap, Clock, DollarSign, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your investments are protected with enterprise-grade encryption and multi-factor authentication"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track your portfolio performance with detailed charts and comprehensive reporting tools"
  },
  {
    icon: GraduationCap,
    title: "Educational Resources",
    description: "Learn from experts with our extensive library of guides, tutorials, and market insights"
  },
  {
    icon: Clock,
    title: "24/7 Trading",
    description: "Never miss an opportunity with round-the-clock access to global markets"
  },
  {
    icon: DollarSign,
    title: "Low Fees",
    description: "Keep more of your returns with our transparent and competitive fee structure"
  },
  {
    icon: Lock,
    title: "Regulated Platform",
    description: "Invest with confidence on a fully licensed and regulated investment platform"
  }
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Why Choose InvestHub?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to invest confidently and grow your wealth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4 p-6 rounded-xl hover:bg-muted/50 transition-smooth group">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit group-hover:scale-110 transition-smooth">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
