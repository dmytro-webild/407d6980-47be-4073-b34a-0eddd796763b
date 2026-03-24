"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";

export default function ContactFormPage() {
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
              { name: "Portfolio", id: "/portfolio" },
              { name: "Contact", id: "/contact-form" }
            ]}
            brandName="STRUCTURAL // COLOR"
            button={{ text: "Obtenir un Devis", href: "/contact-form" }}
          />
        </div>

        <div id="contact-form-section" data-section="contact-form-section">
          <ContactSplitForm
            title="Contactez-nous"
            description="Nous serions ravis de discuter de votre projet. Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement."
            inputs={[
              { name: "name", type: "text", placeholder: "Votre Nom", required: true },
              { name: "email", type: "email", placeholder: "Votre Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Votre Message", rows: 5, required: true }}
            buttonText="Envoyer le Message"
            useInvertedBackground={false}
            mediaPosition="right"
            imageSrc="http://img.b2bpic.net/free-photo/side-view-business-people-working-together_23-2150384880.jpg?_wi=1"
            imageAlt="Contact form image"
            onSubmit={(data) => console.log("Form submitted:", data)}
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
