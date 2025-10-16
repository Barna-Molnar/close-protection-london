import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/corporate_security_m_e607b3e0.jpg";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background/90" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Professional Security Solutions in London
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
          Elite close protection and asset security services backed by years of experience. 
          Discreet, reliable, and professional protection when you need it most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-base btn-hover-modern"
            data-testid="button-hero-consultation"
          >
            Request Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById("services");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-base bg-background/20 backdrop-blur-sm border-foreground/20 text-foreground hover:bg-background/30 btn-hover-modern-light"
            data-testid="button-hero-services"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
