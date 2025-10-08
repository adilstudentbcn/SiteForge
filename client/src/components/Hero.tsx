import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/stock_images/abstract_technology__06119b24.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-chart-2/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                🚀 2025 Web Innovation
              </span>
            </div>
            
            <h1 className="font-display font-bold text-[clamp(3rem,8vw,6rem)] leading-none tracking-tight">
              The Future of
              <span className="block bg-gradient-to-r from-primary via-chart-2 to-ring bg-clip-text text-transparent">
                Web Design
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Experience cutting-edge technology meets bold aesthetics. Build stunning, high-performance websites that stand out in 2025.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="group hover-elevate active-elevate-2 shadow-[var(--glow-primary)]"
                data-testid="button-get-started"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="hover-elevate active-elevate-2 backdrop-blur-sm bg-background/50"
                data-testid="button-watch-demo"
              >
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold font-display">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-display">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-display">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-ring/20 rounded-3xl blur-2xl" />
            <img 
              src={heroImage} 
              alt="Futuristic Technology" 
              className="relative rounded-3xl shadow-2xl border border-primary/20 hover-elevate transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
