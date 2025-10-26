import { SiteConfig } from "./types";
import { Shield, Lock, UserCheck, Building, Search, Home } from "lucide-react";
import heroImage from "@assets/stock_images/corporate_security_m_e607b3e0.jpg";
import aboutImage from "@assets/stock_images/professional_securit_717af2d8.jpg";

export const config: SiteConfig = {
  meta: {
    businessName: "Adam Roszkop Security",
    tagline: "Professional Security Solutions",
    location: "London, United Kingdom",
    website: "adamroszkopsecurity.com"
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
    title: "Professional Security Solutions in London",
    subtitle: "Elite close protection and asset security services backed by years of experience. Discreet, reliable, and professional protection when you need it most.",
    ctaButton: "Request Consultation",
    backgroundImage: heroImage,
    ariaLabel: "Professional security personnel providing close protection services in London"
  },

  about: {
    title: "About Adam Roszkop Security",
    paragraphs: [
      "With years of professional experience in the security industry, Adam Roszkop Security provides elite protection services to clients across London and beyond. Our commitment to discretion, professionalism, and excellence has made us a trusted name in personal and asset protection.",
      "Based in London, we bring extensive expertise in close protection, executive security, and comprehensive risk management. Every member of our team is highly trained, vetted, and dedicated to maintaining the highest standards of security services.",
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
        title: "Close Protection",
        description: "Elite personal protection services for high-profile individuals, executives, and VIPs. Discreet and professional security tailored to your lifestyle."
      },
      {
        icon: Lock,
        title: "Asset Protection",
        description: "Comprehensive security solutions for valuable assets, property, and business interests. Advanced surveillance and protection protocols."
      },
      {
        icon: UserCheck,
        title: "Executive Protection",
        description: "Specialized protection for corporate executives and business leaders. Risk assessment and strategic security planning."
      },
      {
        icon: Building,
        title: "Event Security",
        description: "Professional security management for corporate events, private functions, and special occasions with meticulous attention to detail."
      },
      {
        icon: Search,
        title: "Risk Assessment",
        description: "Thorough evaluation of security vulnerabilities and comprehensive risk mitigation strategies for individuals and businesses."
      },
      {
        icon: Home,
        title: "Residential Security",
        description: "Advanced home security solutions including surveillance systems, access control, and on-site protection services."
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
          description: "SIA licensed professionals with advanced certifications"
        },
        {
          title: "Discrete Service",
          description: "Confidential and professional approach to all operations"
        },
        {
          title: "Rapid Response",
          description: "Quick deployment and immediate threat assessment"
        }
      ]
    }
  },

  footer: {
    description: "Professional security solutions in London. Discreet, reliable, and experienced.",
    quickLinks: [
      { id: "services", label: "Services" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" }
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" }
    ],
    copyright: "Adam Roszkop Security. All rights reserved. Based in London, UK."
  }
};
