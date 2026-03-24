"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { useState } from "react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (data: Record<string, string>) => {
    console.log("Form submitted:", data);
    alert("Message sent! We'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

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
              {
                name: "Services",                id: "services"},
              {
                name: "À Propos",                id: "about"},
              {
                name: "Témoignages",                id: "testimonials"},
              {
                name: "Tarifs",                id: "pricing"},
              {
                name: "Contact",                id: "/contact-us"}
            ]}
            brandName="STRUCTURAL // COLOR"
            button={{
              text: "Obtenir un Devis",              href: "/contact-us"}}
          />
        </div>

        <div id="contact-form" data-section="contact-form">
          <ContactSplitForm
            title="Contactez-nous"
            description="Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."
            inputs={[
              { name: "name", type: "text", placeholder: "Votre nom", required: true },
              { name: "email", type: "email", placeholder: "Votre adresse e-mail", required: true },
            ]}
            textarea={{ name: "message", placeholder: "Votre message", rows: 5, required: true }}
            useInvertedBackground={false}
            imageSrc="http://img.b2bpic.net/free-photo/side-view-people-working-desk_23-2149741154.jpg?_wi=1"
            imageAlt="Team working at desk"
            mediaPosition="left"
            buttonText="Envoyer le Message"
            onSubmit={handleSubmit}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[
              {
                items: [
                  {
                    label: "Accueil",                    href: "/"},
                  {
                    label: "Services",                    href: "#services"},
                  {
                    label: "Portfolio",                    href: "#services"},
                ],
              },
              {
                items: [
                  {
                    label: "À Propos",                    href: "#about"},
                  {
                    label: "Témoignages",                    href: "#testimonials"},
                  {
                    label: "Tarifs",                    href: "#pricing"},
                ],
              },
              {
                items: [
                  {
                    label: "Contact",                    href: "/contact-us"},
                  {
                    label: "Politique de Confidentialité",                    href: "#"},
                  {
                    label: "Conditions Générales",                    href: "#"},
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
