import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import VideoSection from "@/components/VideoSection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/components/ThemeProvider";

import img1 from "@assets/stock_images/modern_office_worksp_81b24f9a.jpg";
import img2 from "@assets/stock_images/modern_office_worksp_940af8c1.jpg";
import img3 from "@assets/stock_images/modern_office_worksp_9afc6062.jpg";
import img4 from "@assets/stock_images/minimalist_design_pa_4fb5d121.jpg";
import img5 from "@assets/stock_images/minimalist_design_pa_fdee3ace.jpg";
import img6 from "@assets/stock_images/minimalist_design_pa_07e4b51f.jpg";
import img7 from "@assets/stock_images/modern_tech_product__a2fc052a.jpg";
import img8 from "@assets/stock_images/modern_tech_product__ef30447c.jpg";
import img9 from "@assets/stock_images/modern_tech_product__62b9be48.jpg";
import img10 from "@assets/stock_images/creative_workspace_m_37dea2e7.jpg";
import img11 from "@assets/stock_images/creative_workspace_m_70436db7.jpg";

const galleryItems = [
  { id: 1, src: img1, alt: "Modern Workspace Design", span: "col-span-2 row-span-2" },
  { id: 2, src: img2, alt: "Tech Innovation Hub", span: "col-span-1 row-span-1" },
  { id: 3, src: img3, alt: "Collaborative Space", span: "col-span-1 row-span-1" },
  { id: 4, src: img4, alt: "Minimalist Patterns", span: "col-span-1 row-span-2" },
  { id: 5, src: img5, alt: "Geometric Design", span: "col-span-1 row-span-1" },
  { id: 6, src: img6, alt: "Abstract Forms", span: "col-span-2 row-span-1" },
  { id: 7, src: img7, alt: "Product Showcase", span: "col-span-1 row-span-1" },
  { id: 8, src: img8, alt: "Tech Display", span: "col-span-1 row-span-2" },
  { id: 9, src: img9, alt: "Modern Device", span: "col-span-1 row-span-1" },
  { id: 10, src: img10, alt: "Creative Studio", span: "col-span-1 row-span-1" },
  { id: 11, src: img11, alt: "Workspace Aesthetic", span: "col-span-1 row-span-1" },
];

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

const faqItems = [
  {
    question: "What makes this platform different from others?",
    answer: "Our platform combines cutting-edge 2025 design trends with powerful functionality. We focus on delivering exceptional user experience through bold aesthetics, micro-interactions, and performance optimization that sets new industry standards.",
  },
  {
    question: "How quickly can I get started?",
    answer: "You can start using our platform immediately after signing up. Our intuitive onboarding process takes less than 5 minutes, and you'll have access to all core features right away. Our comprehensive documentation and video tutorials will help you make the most of the platform from day one.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 customer support across all plans. Starter plan users get email support with responses within 24 hours. Professional users receive priority support with responses within 4 hours. Enterprise clients get dedicated account managers and phone support for immediate assistance.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Absolutely! You can change your plan at any time from your account settings. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the end of your current billing cycle, and you won't lose any data during the transition.",
  },
  {
    question: "Is my data secure and backed up?",
    answer: "Security is our top priority. We use enterprise-grade encryption for all data in transit and at rest. Your data is automatically backed up daily with point-in-time recovery options. We're SOC 2 Type II certified and fully GDPR compliant to ensure the highest level of data protection.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes! We offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied with our platform within the first 30 days, contact our support team for a full refund, no questions asked.",
  },
];

export default function Home() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <Header onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <Gallery items={galleryItems} />
        <Pricing plans={pricingPlans} />
        <VideoSection />
        <FAQ items={faqItems} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
