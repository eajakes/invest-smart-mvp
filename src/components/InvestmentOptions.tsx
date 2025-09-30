import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import stocksIcon from "@/assets/icon-stocks.png";
import cryptoIcon from "@/assets/icon-crypto.png";
import realEstateIcon from "@/assets/icon-realestate.png";

const investments = [
  {
    id: 1,
    title: "Stocks & ETFs",
    description: "Invest in top companies and diversified funds",
    icon: stocksIcon,
    minInvestment: "$10",
    avgReturn: "10-15%",
    risk: "Medium",
    color: "primary"
  },
  {
    id: 2,
    title: "Cryptocurrency",
    description: "Trade Bitcoin, Ethereum, and altcoins",
    icon: cryptoIcon,
    minInvestment: "$5",
    avgReturn: "15-25%",
    risk: "High",
    color: "accent"
  },
  {
    id: 3,
    title: "Real Estate",
    description: "Own fractional shares in premium properties",
    icon: realEstateIcon,
    minInvestment: "$100",
    avgReturn: "8-12%",
    risk: "Low",
    color: "secondary"
  },
];

const InvestmentOptions = () => {
  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Choose Your Investment Path</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diversify your portfolio across multiple asset classes with minimum investments starting from just $5
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment) => (
            <Card key={investment.id} className="group hover:shadow-xl transition-smooth border-2 hover:border-primary/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <img src={investment.icon} alt={investment.title} className="h-8 w-8" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${investment.color}/10 text-${investment.color}`}>
                    {investment.risk} Risk
                  </span>
                </div>
                <CardTitle className="text-2xl">{investment.title}</CardTitle>
                <CardDescription className="text-base">{investment.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-3 border-t">
                  <span className="text-sm text-muted-foreground">Min. Investment</span>
                  <span className="font-semibold">{investment.minInvestment}</span>
                </div>
                <div className="flex items-center justify-between pb-3">
                  <span className="text-sm text-muted-foreground">Avg. Return</span>
                  <div className="flex items-center gap-1 text-secondary">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-semibold">{investment.avgReturn}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;
