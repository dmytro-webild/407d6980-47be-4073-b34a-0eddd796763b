"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';

import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
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
          name: "Services",          id: "/#services"},
        {
          name: "À Propos",          id: "/#about"},
        {
          name: "Témoignages",          id: "/#testimonials"},
        {
          name: "Tarifs",          id: "/#pricing"},
        {
          name: "Portfolio",          id: "/portfolio"},
        {
          name: "Contact",          id: "/contact-form"}
      ]}
      brandName="STRUCTURAL // COLOR"
      button={{ text: "Contactez-nous", href: "/contact-form" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated"}}
      title="Développez Votre Marque avec un Design Impactant & une Stratégie Marketing Ciblée"
      description="Nous créons des expériences visuelles impactantes et déployons des stratégies marketing sur mesure pour faire grandir votre marque et engager durablement votre audience."
      buttons={[
        {
          text: "Voir Mon Portfolio",          href: "/portfolio"},
        {
          text: "Prendre Contact",          href: "/contact-form"}
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
          id: "5",          imageSrc: "http://img.b2bpic.net:80/free-photo/side-view-people-working-desk_23-2149741154.jpg?_wi=2",          imageAlt: "Conception web responsive sur ordinateur portable, tablette, téléphone"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net:80/free-photo/data-analysis-marketing-business-report-concept_53876-124759.jpg",          imageAlt: "Planification de campagne de marketing sur les réseaux sociaux"},
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
          tag: "Digital",          title: "Conception de site ",          subtitle: "Création de sites web engageants, responsives et performants.",          description: "Création de sites web modernes et intuitifs, avec une navigation fluide, un design impactant et des fonctionnalités performantes sur tous les appareils.",          imageSrc: "http://img.b2bpic.net/free-vector/business-landing-page_52683-10153.jpg"},
        {
          id: 3,
          tag: "Stratégie",          title: "Stratégie de Communication",          subtitle: "Création de messages de marque clairs, cohérents et percutants pour renforcer votre identité et marquer les esprits.",          description: "Développement de stratégies de communication efficaces, de contenus percutants et d’une voix de marque cohérente pour garantir un message clair, impactant et mémorable.",          imageSrc: "http://img.b2bpic.net:80/free-photo/side-view-business-people-working-together_23-2150384880.jpg?_wi=2"},
        {
          id: 4,
          tag: "Croissance",          title: "Stratégie Marketing",          subtitle: "Maximisez votre visibilité en ligne et l’impact de votre marque grâce à des stratégies digitales efficaces.",          description: "Mise en œuvre de stratégies data-driven en SEO, réseaux sociaux, email marketing et campagnes payantes pour accroître votre visibilité et générer davantage de conversions.",          imageSrc: "http://img.b2bpic.net/free-photo/friends-using-smartphones-together-outdoors_53876-26150.jpg"},
      ]}
      title="Mes Services : Design, Communication, & Marketing"
      description="Du design visuel impactant à une présence en ligne performante, en passant par des stratégies marketing ciblées, je propose des services complets pour développer votre entreprise et atteindre vos objectifs"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <SocialProofOne
      useInvertedBackground={false}
      textboxLayout="default"
      title="Nos Partenaires et Collaborations"
      description="Nous sommes fiers de collaborer avec des entreprises innovantes pour les aider à atteindre leurs objectifs de design et de marketing."
      names={[
        "AvivA Cuisines",        "LEM AVOCAT",        "HARAJUKU CLOTHING",        "JENNY'S AGENCY"
      ]}
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
          price: "400 €",          subtitle: "Idéal pour les startups & petits projets",          buttons: [
            {
              text: "Commencer"},
          ],
          features: [
            "Conception de Logo Basique",            "Site Web 1 Page",            "Audit des Réseaux Sociaux",            "Configuration SEO Basique"],
        },
        {
          id: "pro",          badge: "Le Plus Populaire",          badgeIcon: Star,
          price: "800 €",          subtitle: "Pour les entreprises en croissance cherchant de l'impact",          buttons: [
            {
              text: "Choisir Pro"},
          ],
          features: [
            "Identité de Marque Complète",            "Site Web 1 page",            "Audit et stratégie de contenu ",            "Set de 12 posts réseaux sociaux"],
        },
        {
          id: "enterprise",          badge: "Solutions Personnalisées",          badgeIcon: Crown,
          price: "Personnalisé",          subtitle: "Adapté aux grands projets & besoins continus",          buttons: [
            {
              text: "Contactez-nous pour un Devis"},
          ],
          features: [
            "Branding Complet",            "Application Web Personnalisée",            "Marketing Digital Avancé",            "Support Dédié"],
        },
      ]}
      title="Des tarifs flexibles et adaptés à vos besoins et à votre budget."
      description="Choisissez parmi nos forfaits conçus par des experts ou créons une solution personnalisée qui correspond parfaitement à votre projet et à votre budget."
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
              label: "Services",              href: "/#services"},
            {
              label: "Portfolio",              href: "/portfolio"},
          ],
        },
        {
          items: [
            {
              label: "À Propos",              href: "/#about"},
            {
              label: "Témoignages",              href: "/#testimonials"},
            {
              label: "Tarifs",              href: "/#pricing"},
          ],
        },
        {
          items: [
            {
              label: "Contact",              href: "/contact-form"},
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