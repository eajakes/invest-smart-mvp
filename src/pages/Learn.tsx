import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, TrendingUp, Shield, Target, PieChart, Lightbulb } from "lucide-react";

const educationalContent = [
  {
    icon: BookOpen,
    title: "Investment Basics",
    description: "Learn the fundamentals of investing, from understanding risk to building a portfolio",
    topics: ["What is Investing?", "Types of Assets", "Risk vs. Return", "Time Value of Money"]
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Understand how to analyze markets and make informed investment decisions",
    topics: ["Technical Analysis", "Fundamental Analysis", "Market Trends", "Economic Indicators"]
  },
  {
    icon: PieChart,
    title: "Portfolio Diversification",
    description: "Master the art of spreading risk across different asset classes",
    topics: ["Asset Allocation", "Rebalancing", "Sector Diversification", "Geographic Spread"]
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Protect your investments and minimize potential losses",
    topics: ["Stop-Loss Orders", "Position Sizing", "Hedging Strategies", "Insurance Products"]
  },
  {
    icon: Target,
    title: "Investment Strategies",
    description: "Explore different approaches to achieving your financial goals",
    topics: ["Value Investing", "Growth Investing", "Income Investing", "Index Investing"]
  },
  {
    icon: Lightbulb,
    title: "Tax Optimization",
    description: "Learn how to minimize taxes and maximize after-tax returns",
    topics: ["Tax-Advantaged Accounts", "Capital Gains", "Tax-Loss Harvesting", "Estate Planning"]
  }
];

const Learn = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-12 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-5xl font-bold">Investment Education Center</h1>
            <p className="text-xl text-muted-foreground">
              Master the skills you need to become a confident, successful investor
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationalContent.map((content, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit mb-4">
                    <content.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{content.title}</CardTitle>
                  <CardDescription>{content.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {content.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">Understanding Investment Risks</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Risk Levels Explained</CardTitle>
                <CardDescription>Different investments carry different levels of risk</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/10 border-l-4 border-secondary">
                  <h3 className="font-bold text-secondary mb-2">Low Risk</h3>
                  <p className="text-sm text-muted-foreground">
                    Stable returns with minimal volatility. Examples: Government bonds, high-grade corporate bonds, real estate investment trusts.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-primary/10 border-l-4 border-primary">
                  <h3 className="font-bold text-primary mb-2">Medium Risk</h3>
                  <p className="text-sm text-muted-foreground">
                    Balanced approach with moderate volatility. Examples: Blue-chip stocks, balanced mutual funds, investment-grade bonds.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-destructive/10 border-l-4 border-destructive">
                  <h3 className="font-bold text-destructive mb-2">High Risk</h3>
                  <p className="text-sm text-muted-foreground">
                    Higher potential returns with significant volatility. Examples: Growth stocks, cryptocurrency, emerging market investments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Investment Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <strong>Start Early:</strong> Time in the market beats timing the market. Compound interest works best over long periods.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <strong>Diversify:</strong> Don't put all your eggs in one basket. Spread investments across different asset classes and sectors.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <strong>Stay Informed:</strong> Keep learning and stay updated on market trends and economic indicators.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">4</span>
                    </div>
                    <div>
                      <strong>Think Long-Term:</strong> Avoid emotional decisions based on short-term market fluctuations.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">5</span>
                    </div>
                    <div>
                      <strong>Regular Reviews:</strong> Periodically review and rebalance your portfolio to maintain your target allocation.
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Learn;
