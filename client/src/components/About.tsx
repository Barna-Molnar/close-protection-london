import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aboutImage from "@assets/stock_images/professional_securit_717af2d8.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              About Adam Roszkop Security
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground/90">
              <p>
                With years of professional experience in the security industry, Adam Roszkop Security 
                provides elite protection services to clients across London and beyond. Our commitment 
                to discretion, professionalism, and excellence has made us a trusted name in personal 
                and asset protection.
              </p>
              <p>
                Based in London, we bring extensive expertise in close protection, executive security, 
                and comprehensive risk management. Every member of our team is highly trained, vetted, 
                and dedicated to maintaining the highest standards of security services.
              </p>
              <p>
                Our approach combines traditional security principles with modern technology and threat 
                assessment techniques, ensuring our clients receive the most effective protection available.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">KEY CREDENTIALS</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="px-3 py-1">SIA Licensed</Badge>
                  <Badge variant="secondary" className="px-3 py-1">First Aid Certified</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Advanced Driving</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Risk Assessment</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Counter Surveillance</Badge>
                </div>
              </div>

              <Card className="p-6">
                <div className="flex items-baseline gap-4">
                  <div>
                    <div className="text-4xl font-bold text-primary" data-testid="text-years-experience">15+</div>
                    <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                  </div>
                  <div className="border-l border-border pl-4">
                    <div className="text-4xl font-bold text-primary" data-testid="text-clients-protected">500+</div>
                    <div className="text-sm text-muted-foreground mt-1">Clients Protected</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <img
              src={aboutImage}
              alt="Professional security services"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
