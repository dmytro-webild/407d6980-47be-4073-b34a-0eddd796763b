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
              { name: "Partenaires", id: "/#testimonials" },
              { name: "Tarifs", id: "/#pricing" },
              { name: "Portfolio", id: "/portfolio" }
            ]}
            brandName="STRUCTURAL // COLOR"
            button={{ text: "Contactez-nous", href: "/contact-form" }}
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
                id: "1",                title: "Jenny's - Refonte identité graphique. ",                tags: ["Branding", "Design Graphique"],
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLgh5meiyFFxdyU9YEOi16Nr6V/uploaded-1774361382268-lg0gxu67.png",                imageAlt: "Refonte d'identité visuelle pour Marque X"},
              {
                id: "2",                title: "AvivA Cuisines ",                tags: ["Campagne Communicaton ", "Développement image de marque"],
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLgh5meiyFFxdyU9YEOi16Nr6V/uploaded-1774361182628-mvptybyd.png",                imageAlt: "Site e-commerce moderne et responsive"},
              {
                id: "3",                title: "Harajuku Clothing",                tags: ["Création site e-commerce", "Réseaux Sociaux"],
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLgh5meiyFFxdyU9YEOi16Nr6V/uploaded-1774361240371-vqli00yx.png",                imageAlt: "Campagne de marketing digital réussie"},
              {
                id: "4",                title: "LEM - Avocat",                tags: ["Développement image de marque", "Création site internet responsive"],
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLgh5meiyFFxdyU9YEOi16Nr6V/uploaded-1774361270225-63xwr3qv.png",                imageAlt: "Conception d'application mobile intuitive"},
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
                  { label: "Partenaires", href: "/#testimonials" },
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