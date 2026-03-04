import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function Home() {
    const { refs, scrollToSection } = useScrollToSection();

    return (
        <div className="min-h-screen">
            <SEO
                title="AB Vip Risk Management - Professional Security Solutions in London"
                description="Elite close protection and asset security services backed by years of experience. Discreet, reliable, and professional protection in London."
                canonicalPath="/"
            />
            <Navigation scrollToSection={scrollToSection} />
            <Hero sectionRef={refs.home} scrollToSection={scrollToSection} />
            <Services sectionRef={refs.services} />
            <About sectionRef={refs.about} />
            <Contact sectionRef={refs.contact} />
            <Footer scrollToSection={scrollToSection}/>
        </div>
    );
}
