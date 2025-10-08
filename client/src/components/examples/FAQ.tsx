import FAQ from '../FAQ';

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

export default function FAQExample() {
  return <FAQ items={faqItems} />;
}
