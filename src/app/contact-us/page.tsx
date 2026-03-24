"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import ContactText from '@/components/sections/contact/ContactText';

export default function ContactUsPage() {
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
              { name: "Contact", id: "/contact-us" }
            ]}
            brandName="STRUCTURAL // COLOR"
            button={{
              text: "Obtenir un Devis",              href: "/contact-us"
            }}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            background={{ variant: "radial-gradient" }}
            text="Discutons de Votre Projet. Contactez-nous Dès Aujourd'hui!"
            buttons={[
              { text: "Envoyer un Message", href: "mailto:contact@structuralcolor.com" },
              { text: "Appeler", href: "tel:+123456789" }
            ]}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[
              {
                items: [
                  { label: "Accueil", href: "/" },
                  { label: "Services", href: "/#services" },
                  { label: "Portfolio", href: "/#services" },
                ],
              },
              {
                items: [
                  { label: "À Propos", href: "/#about" },
                  { label: "Témoignages", href: "/#testimonials" },
                  { label: "Tarifs", href: "/#pricing" },
                ],
              },
              {
                items: [
                  { label: "Contact", href: "/contact-us" },
                  { label: "Politique de Confidentialité", href: "#" },
                  { label: "Conditions Générales", href: "#" },
                ],
              },
            ]}
            logoText="STRUCTURAL COLOR"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}