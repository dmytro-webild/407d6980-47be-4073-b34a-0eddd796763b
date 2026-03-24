"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";

export default function PortfolioPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Services", id: "/#services" },
              { name: "À Propos", id: "/#about" },
              { name: "Témoignages", id: "/#testimonials" },
              { name: "Tarifs", id: "/#pricing" },
              { name: "Portfolio", id: "/portfolio" }
            ]}
            brandName="STRUCTURAL // COLOR"
            button={{ text: "Obtenir un Devis", href: "/contact-form" }}
          />
        </div>

        <div id="portfolio" data-section="portfolio">
          <FeatureCardTwentyThree
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Mon Portfolio de Projets"
            description="Découvrez une sélection de mes travaux récents en design graphique, développement web et stratégie marketing."
            features={[
              {
                id: "1",                title: "Marque X - Refonte d'Identité",                tags: ["Branding", "Design Graphique"],
                imageSrc: "http://img.b2bpic.net/free-vector/modern-creative-gradient-business-brochure-design-template_1017-31012.jpg",                imageAlt: "Refonte d'identité visuelle pour Marque X"},
              {
                id: "2",                title: "Site E-commerce Y",                tags: ["Développement Web", "UX/UI"],
                imageSrc: "http://img.b2bpic.net/free-psd/web-design-template-design-ui-ux_23-2149303023.jpg",                imageAlt: "Site e-commerce moderne et responsive"},
              {
                id: "3",                title: "Campagne Digitale Z",                tags: ["Marketing Digital", "Réseaux Sociaux"],
                imageSrc: "http://img.b2bpic.net/free-photo/social-media-marketing-concept_23-2150379961.jpg",                imageAlt: "Campagne de marketing digital réussie"},
              {
                id: "4",                title: "Application Mobile A",                tags: ["UX/UI", "Application Mobile"],
                imageSrc: "http://img.b2bpic.net/free-vector/website-template-design_23-2148421833.jpg",                imageAlt: "Conception d'application mobile intuitive"},
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[
              {
                items: [
                  { label: "Accueil", href: "/" },
                  { label: "Services", href: "/#services" },
                  { label: "Portfolio", href: "/portfolio" }
                ]
              },
              {
                items: [
                  { label: "À Propos", href: "/#about" },
                  { label: "Témoignages", href: "/#testimonials" },
                  { label: "Tarifs", href: "/#pricing" }
                ]
              },
              {
                items: [
                  { label: "Contact", href: "/contact-form" },
                  { label: "Politique de Confidentialité", href: "#" },
                  { label: "Conditions Générales", href: "#" }
                ]
              }
            ]}
            logoText="STRUCTURAL COLOR"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
