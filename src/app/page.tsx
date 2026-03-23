"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Crown, Sparkles, Star, Users } from "lucide-react";

export default function LandingPage() {
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
          name: "Services",          id: "services"},
        {
          name: "À Propos",          id: "about"},
        {
          name: "Témoignages",          id: "testimonials"},
        {
          name: "Tarifs",          id: "pricing"},
      ]}
      brandName="STRUCTURAL // COLOR"
      button={{
        text: "Obtenir un Devis",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated"}}
      title="Agence de Design Créatif et de Stratégie Marketing pour Développer Votre Marque"
      description="Nous créons des expériences visuelles impactantes et déployons des stratégies marketing sur mesure pour faire grandir votre marque et engager durablement votre audience."
      buttons={[
        {
          text: "Voir Mon Portfolio",          href: "#services"},
        {
          text: "Obtenir une Consultation Gratuite",          href: "#contact"},
      ]}
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-psd/neon-type-web-page-template_23-2149250894.jpg",          imageAlt: "Présentation de portfolio de conception graphique freelance"},
        {
          id: "2",          imageSrc: "http://img.b2bpic.net/free-vector/goals-habits-tracking-app_23-2148627558.jpg",          imageAlt: "Maquettes modernes de développement web créatif"},
        {
          id: "3",          imageSrc: "http://img.b2bpic.net/free-photo/plus-size-woman-working-professional-business-office_23-2150579586.jpg",          imageAlt: "Présentation de stratégie de marketing digital"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-vector/collection-professional-stationery-template-business-presentation_1017-54129.jpg",          imageAlt: "Éléments de branding en design de communication"},
        {
          id: "5",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-people-working-desk_23-2149741154.jpg",          imageAlt: "Conception web responsive sur ordinateur portable, tablette, téléphone"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net/free-photo/data-analysis-marketing-business-report-concept_53876-124759.jpg",          imageAlt: "Planification de campagne de marketing sur les réseaux sociaux"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="À Propos de Mon Parcours & Mon Expertise"
      metrics={[
        {
          icon: Award,
          label: "Années d'Expérience",          value: "5+"},
        {
          icon: Users,
          label: "Clients Satisfaits",          value: "10+"},
        {
          icon: Sparkles,
          label: "Projets Réalisés",          value: "50+"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          tag: "Design",          title: "Conception Graphique",          subtitle: "Identités de marque visuellement époustouflantes",          description: "Création de logos, d’identités de marque, de supports et d’actifs digitaux conçus pour refléter votre vision et capter l’attention de votre audience.",          imageSrc: "http://img.b2bpic.net/free-vector/initial-b-c-coffee-bean-shop-logo-business-branding-template-design-inspiration_384344-1595.jpg"},
        {
          id: 2,
          tag: "Digital",          title: "Conception & Développement Web",          subtitle: "Sites web engageants, responsifs et fonctionnels",          description: "Construction de sites web modernes et conviviaux avec une navigation intuitive, une esthétique époustouflante et des fonctionnalités robustes sur tous les appareils.",          imageSrc: "http://img.b2bpic.net/free-vector/business-landing-page_52683-10153.jpg"},
        {
          id: 3,
          tag: "Stratégie",          title: "Stratégie de Communication",          subtitle: "Messages de marque clairs et percutants",          description: "Développement de plans de communication efficaces, de textes percutants et d'une voix de marque cohérente pour que votre message soit entendu haut et fort.",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-business-people-working-together_23-2150384880.jpg"},
        {
          id: 4,
          tag: "Croissance",          title: "Solutions de Marketing Digital",          subtitle: "Maximisez votre portée et votre impact en ligne",          description: "Mise en œuvre de stratégies basées sur les données pour le SEO, les médias sociaux, l'email marketing et les campagnes payantes afin d'accroître la visibilité et de générer des conversions.",          imageSrc: "http://img.b2bpic.net/free-photo/friends-using-smartphones-together-outdoors_53876-26150.jpg"},
      ]}
      title="Mes Services : Design, Communication, & Marketing"
      description="Du design visuel impactant à une présence en ligne performante, en passant par des stratégies marketing ciblées, je propose des services complets pour développer votre entreprise et atteindre vos objectifs"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Travailler avec CreativeFlow Studio a changé la donne pour notre marque. Le travail de conception graphique était exceptionnel, et la stratégie de communication a parfaitement capturé notre voix. Je le recommande vivement !"
      rating={5}
      author="Jessica L., PDG d'InnovateTech"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/business-woman-sitting-table_23-2148095754.jpg",          alt: "Jessica L., PDG d'InnovateTech"},
        {
          src: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-5596.jpg",          alt: "Mark T., Fondateur de GreenBloom"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-dark-skinned-female-with-long-brunette-hair-broad-happy-smile-wearing-denim-shirt-enjoying-good-positive-news-concerning-her-promotion-work-posing-isolated-against-white-blank-wall-b_176420-10367.jpg",          alt: "Sarah P., Directrice Marketing chez NexusCorp"},
        {
          src: "http://img.b2bpic.net/free-photo/elderly-businessman-with-laptop_23-2148116267.jpg",          alt: "David K., Chef de Produit chez OptiSolutions"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "starter",          badge: "Démarrage Parfait",          badgeIcon: Sparkles,
          price: "750€+",          subtitle: "Idéal pour les startups & petits projets",          buttons: [
            {
              text: "Commencer",              href: "#contact"},
          ],
          features: [
            "Conception de Logo Basique",            "Site Web 1 Page",            "Audit des Réseaux Sociaux",            "Configuration SEO Basique"],
        },
        {
          id: "pro",          badge: "Le Plus Populaire",          badgeIcon: Star,
          price: "2,500€+",          subtitle: "Pour les entreprises en croissance cherchant de l'impact",          buttons: [
            {
              text: "Choisir Pro",              href: "#contact"},
          ],
          features: [
            "Identité de Marque Complète",            "Site Web 3-5 Pages",            "Stratégie de Contenu",            "Campagne Marketing Ciblée"],
        },
        {
          id: "enterprise",          badge: "Solutions Personnalisées",          badgeIcon: Crown,
          price: "Personnalisé",          subtitle: "Adapté aux grands projets & besoins continus",          buttons: [
            {
              text: "Contactez-nous pour un Devis",              href: "#contact"},
          ],
          features: [
            "Branding Complet",            "Application Web Personnalisée",            "Marketing Digital Avancé",            "Support Dédié"],
        },
      ]}
      title="Forfaits Flexibles pour Tous les Besoins"
      description="Choisissez parmi nos forfaits conçus par des experts ou créons une solution personnalisée qui correspond parfaitement à votre projet et à votre budget."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      text="Prêt(e) à transformer votre marque ? Créons quelque chose d'incroyable ensemble. Contactez-moi aujourd'hui pour une discussion personnalisée."
      buttons={[
        {
          text: "Envoyer un Message",          href: "mailto:hello@creativeflow.com"},
        {
          text: "Planifier un Appel",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Accueil",              href: "/"},
            {
              label: "Services",              href: "#services"},
            {
              label: "Portfolio",              href: "#services"},
          ],
        },
        {
          items: [
            {
              label: "À Propos",              href: "#about"},
            {
              label: "Témoignages",              href: "#testimonials"},
            {
              label: "Tarifs",              href: "#pricing"},
          ],
        },
        {
          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Politique de Confidentialité",              href: "#"},
            {
              label: "Conditions Générales",              href: "#"},
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