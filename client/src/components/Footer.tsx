import { SectionId } from '@/hooks/useScrollToSection';
import Logo from "./Logo";

type FooterProps = {
    scrollToSection: (section: SectionId) => void;
}
export default function Footer(props: FooterProps) {
    const { scrollToSection } = props;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 border-t border-border py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <Logo variant="full" className="mb-4" onClick={() => scrollToSection("home")} />
                        <p className="text-sm text-muted-foreground">
                            Professional security solutions in London. Discreet, reliable, and experienced.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("services");
                                    }}
                                    className="text-muted-foreground hover:text-foreground nav-hover-modern pb-1"
                                    data-testid="link-footer-services"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-muted-foreground hover:text-foreground nav-hover-modern pb-1"
                                    data-testid="link-footer-about"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("about");
                                    }}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-muted-foreground hover:text-foreground nav-hover-modern pb-1"
                                    data-testid="link-footer-contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("contact");
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="/privacy-policy"
                                    data-testid="link-privacy"
                                    className="text-muted-foreground hover:text-foreground nav-hover-modern pb-1"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms-of-service"
                                    className="text-muted-foreground hover:text-foreground nav-hover-modern pb-1"
                                    data-testid="link-terms"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                        © {currentYear} Adam Roszkop Security. All rights reserved. Based in London, UK.
                    </p>
                </div>
            </div>
        </footer>
    );
}
