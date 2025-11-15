import { SiteConfig } from "./types";
import { Shield, Lock, UserCheck, Building, Search, Home } from "lucide-react";
import heroImage from "@assets/stock_images/corporate_security_m_e607b3e0.jpg";
import aboutImage from "@assets/stock_images/professional_securit_717af2d8.jpg";

export const config: SiteConfig = {
    meta: {
        businessName: "AB Vip Risk Management",
        tagline: "Professional Security Solutions",
        location: "London, United Kingdom",
        website: "www.abvip.co.uk"
    },

    colors: {
        primary: "45 75% 52%",
        primaryForeground: "220 30% 12%",
        secondary: "40 18% 90%",
        secondaryForeground: "220 35% 20%",
        background: {
            light: "40 25% 97%",
            dark: "220 45% 10%"
        },
        foreground: {
            light: "220 35% 15%",
            dark: "40 20% 92%"
        },
        border: {
            light: "40 20% 88%",
            dark: "220 35% 22%"
        },
        card: {
            light: "40 22% 95%",
            dark: "220 40% 14%"
        },
        cardForeground: {
            light: "220 35% 15%",
            dark: "40 20% 92%"
        },
        cardBorder: {
            light: "40 18% 90%",
            dark: "220 35% 18%"
        },
        muted: {
            light: "40 20% 92%",
            dark: "220 32% 20%"
        },
        mutedForeground: {
            light: "220 25% 45%",
            dark: "40 15% 70%"
        }
    },

    navigation: {
        items: [
            { id: "services", label: "Services" },
            { id: "about", label: "About" },
            { id: "contact", label: "Contact" }
        ],
        ctaButton: "Get Started"
    },

    hero: {
        title: "Close Protection Specialists You can Trust",
        subtitle: "Elite close protection and asset security services backed by years of experience. Discreet, reliable, and professional protection when you need it most.",
        ctaButton: "Request Consultation",
        backgroundImage: heroImage,
        ariaLabel: "Trusted international security provider"
    },

    about: {
        title: "About AB Vip Risk Management",
        paragraphs: [
            "With years of professional experience in the security industry, AB Vip Risk Management provides elite protection services internationally. Our commitment to discretion, professionalism, and excellence has made us a trusted name in private and public sector.",
            "Based in United Kingdom, we bring extensive expertise in close protection, and comprehensive risk management. Every member of our team is highly trained, vetted, and dedicated to maintaining the highest standards of security services.",
            "Our approach combines traditional security principles with modern technology and threat assessment techniques, ensuring our clients receive the most effective protection available."
        ],
        credentials: [
            { text: "SIA Licensed" },
            { text: "First Aid Certified" },
            { text: "Advanced Driving" },
            { text: "Risk Assessment" },
            { text: "Counter Surveillance" }
        ],
        stats: {
            yearsExperience: "15+",
            clientsServed: "500+"
        },
        image: aboutImage,
        imageAlt: "Professional security team providing executive protection and close protection services in London"
    },

    services: {
        title: "Security Services",
        subtitle: "Comprehensive protection solutions tailored to your unique security requirements",
        services: [
            {
                icon: Shield,
                title: "Bodyguard Services",
                description: "Elite personal protection services for high-profile individuals, executives, and VIPs. Discreet and professional security tailored to your lifestyle and schedule"
            },
            {
                icon: Lock,
                title: "Asset Protection",
                description: "Comprehensive security solutions for valuable assets, property, and business interests. Advanced surveillance and protection protocols."
            },
            {
                icon: UserCheck,
                title: "Travel Security",
                description: "Specialized protection and risk management for clients who face elevated risk or threat while traveling domestically or internationally."
            },
            {
                icon: Building,
                title: "Event Security & Risk Management",
                description: "Professional security management for corporate events, private functions, and special occasions with meticulous attention to detail."
            },
            {
                icon: Search,
                title: "Secure Transportation",
                description: "Secure transportation provides safe, discreet and efficient movement for clients or their assets with security trained vetted protective drivers, to ensure every journey is conducted with maximum safety and minimal exposure to risk."
            },
            {
                icon: Home,
                title: "Residential Security",
                description: "Advanced home security solutions including surveillance, access control, and on-site protection services."
            }
        ]
    },

    contact: {
        title: "Get in Touch",
        subtitle: "Contact us for a confidential consultation about your security requirements",
        contactInfo: {
            phone: "+44 20 1234 5678",
            email: "contact@adamroszkopsecurity.com",
            location: "London, United Kingdom",
            businessHours: {
                weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
                emergency: "Emergency Response: 24/7"
            },
            emergencyResponse: {
                title: "24/7 Emergency Response",
                description: "For urgent security matters, contact us immediately. We provide round-the-clock emergency response services with rapid deployment capabilities."
            }
        },
        whyChooseUs: {
            title: "Why Choose Us?",
            items: [
                {
                    title: "Licensed & Certified",
                    description: "SIA and medical licensed professionals with advanced certifications"
                },
                {
                    title: "Professional & Discrete Service",
                    description: "Confidential and professional approach to all operations"
                },
                {
                    title: "Rapid Response",
                    description: "Rapid deployment and immediate threat solutions"
                }
            ]
        }
    },

    footer: {
        description: "Professional international security solutions. Discreet, reliable, and experienced.",
        quickLinks: [
            { id: "services", label: "Services" },
            { id: "about", label: "About" },
            { id: "contact", label: "Contact" }
        ],
        legalLinks: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" }
        ],
        copyright: "AB Vip Risk Management. All rights reserved. In London, United Kingdom."
    }
};
