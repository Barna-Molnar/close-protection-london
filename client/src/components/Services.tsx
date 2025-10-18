import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, UserCheck, Building, Search, Home } from "lucide-react";

const services = [
    {
        icon: Shield,
        title: "Close Protection",
        description: "Elite personal protection services for high-profile individuals, executives, and VIPs. Discreet and professional security tailored to your lifestyle.",
    },
    {
        icon: Lock,
        title: "Asset Protection",
        description: "Comprehensive security solutions for valuable assets, property, and business interests. Advanced surveillance and protection protocols.",
    },
    {
        icon: UserCheck,
        title: "Executive Protection",
        description: "Specialized protection for corporate executives and business leaders. Risk assessment and strategic security planning.",
    },
    {
        icon: Building,
        title: "Event Security",
        description: "Professional security management for corporate events, private functions, and special occasions with meticulous attention to detail.",
    },
    {
        icon: Search,
        title: "Risk Assessment",
        description: "Thorough evaluation of security vulnerabilities and comprehensive risk mitigation strategies for individuals and businesses.",
    },
    {
        icon: Home,
        title: "Residential Security",
        description: "Advanced home security solutions including surveillance systems, access control, and on-site protection services.",
    },
];
type ServicesProps = {
    sectionRef: React.RefObject<HTMLDivElement>;
}

export default function Services(props: ServicesProps) {
    const { sectionRef } = props;
    return (
        <section id="services" className="py-20 md:py-32" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Security Services
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive protection solutions tailored to your unique security requirements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Card key={index} className="card-hover-modern-light" data-testid={`card-service-${index}`}>
                                <CardHeader>
                                    <div className="mb-4">
                                        <IconComponent className="w-10 h-10 text-primary icon-hover-modern" strokeWidth={1.5} />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
