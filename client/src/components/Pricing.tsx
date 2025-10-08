import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

interface PricingProps {
  plans: PricingPlan[];
}

export default function Pricing({ plans }: PricingProps) {
  return (
    <section className="py-24 relative" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include 24/7 support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col hover-elevate transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-primary/50 shadow-[var(--glow-primary)] scale-105' 
                  : 'border-border'
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-[var(--glow-primary)]">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl font-display">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold font-display tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full hover-elevate active-elevate-2 ${
                    plan.highlighted 
                      ? 'shadow-[var(--glow-primary)]' 
                      : ''
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                  data-testid={`button-select-${plan.name.toLowerCase()}`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
