import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Wallet, TrendingUp, PiggyBank } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in minutes with simple KYC verification",
    step: "01"
  },
  {
    icon: Wallet,
    title: "Fund Account",
    description: "Deposit funds securely via bank transfer, card, or wallet",
    step: "02"
  },
  {
    icon: TrendingUp,
    title: "Choose Investments",
    description: "Browse opportunities and invest in assets that match your goals",
    step: "03"
  },
  {
    icon: PiggyBank,
    title: "Track & Grow",
    description: "Monitor your portfolio and watch your wealth grow over time",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your investment journey in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-smooth">
              <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 leading-none p-4">
                {step.step}
              </div>
              <CardContent className="pt-8 space-y-4">
                <div className="gradient-primary p-4 rounded-xl w-fit">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
