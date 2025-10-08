import Pricing from '../Pricing';

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "month",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 projects",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "SSL certificate",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$79",
    period: "month",
    description: "Ideal for growing businesses and teams",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "SSL certificate",
      "Custom domain",
      "Team collaboration",
      "API access",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "month",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited everything",
      "1TB storage",
      "White-label solution",
      "24/7 phone support",
      "SSL certificate",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact Sales",
  },
];

export default function PricingExample() {
  return <Pricing plans={pricingPlans} />;
}
