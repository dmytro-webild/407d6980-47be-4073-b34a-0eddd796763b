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
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
      ]}
      brandName="CreativeFlow Studio"
      button={{
        text: "Get a Quote",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Ignite Your Brand with Creative Design & Strategic Marketing"
      description="As a seasoned freelancer, I blend innovative graphic and web design with powerful communication and marketing strategies to elevate your business and connect with your audience."
      buttons={[
        {
          text: "View My Portfolio",
          href: "#services",
        },
        {
          text: "Get a Free Consultation",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-psd/neon-type-web-page-template_23-2149250894.jpg",
          imageAlt: "Freelance graphic design portfolio showcase",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-vector/goals-habits-tracking-app_23-2148627558.jpg",
          imageAlt: "Creative web development mockups modern",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/plus-size-woman-working-professional-business-office_23-2150579586.jpg",
          imageAlt: "Digital marketing strategy presentation",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-vector/collection-professional-stationery-template-business-presentation_1017-54129.jpg",
          imageAlt: "Communication design branding elements",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-people-working-desk_23-2149741154.jpg",
          imageAlt: "Responsive web design laptop tablet phone",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/data-analysis-marketing-business-report-concept_53876-124759.jpg",
          imageAlt: "Social media marketing campaign planning",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="About My Journey & Expertise"
      metrics={[
        {
          icon: Award,
          label: "Years Experience",
          value: "10+",
        },
        {
          icon: Users,
          label: "Satisfied Clients",
          value: "150+",
        },
        {
          icon: Sparkles,
          label: "Projects Completed",
          value: "200+",
        },
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
          tag: "Design",
          title: "Graphic Design",
          subtitle: "Visually stunning brand identities",
          description: "Crafting logos, branding guidelines, print materials, and digital assets that perfectly represent your vision and resonate with your audience.",
          imageSrc: "http://img.b2bpic.net/free-vector/initial-b-c-coffee-bean-shop-logo-business-branding-template-design-inspiration_384344-1595.jpg",
        },
        {
          id: 2,
          tag: "Digital",
          title: "Web Design & Development",
          subtitle: "Engaging, responsive, and functional websites",
          description: "Building modern, user-friendly websites with intuitive navigation, stunning aesthetics, and robust functionality across all devices.",
          imageSrc: "http://img.b2bpic.net/free-vector/business-landing-page_52683-10153.jpg",
        },
        {
          id: 3,
          tag: "Strategy",
          title: "Communication Strategy",
          subtitle: "Clear and compelling brand messaging",
          description: "Developing effective communication plans, compelling copy, and consistent brand voice to ensure your message is heard loud and clear.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-business-people-working-together_23-2150384880.jpg",
        },
        {
          id: 4,
          tag: "Growth",
          title: "Digital Marketing Solutions",
          subtitle: "Maximize your online reach and impact",
          description: "Implementing data-driven strategies for SEO, social media, email marketing, and paid campaigns to boost visibility and drive conversions.",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-using-smartphones-together-outdoors_53876-26150.jpg",
        },
      ]}
      title="My Services: Design, Communication, & Marketing"
      description="From captivating visuals to engaging online presence and strategic outreach, I offer a comprehensive suite of services tailored to your unique business needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Working with CreativeFlow Studio was a game-changer for our brand. The graphic design work was exceptional, and the communication strategy perfectly captured our voice. Highly recommend!"
      rating={5}
      author="Jessica L., CEO of InnovateTech"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/business-woman-sitting-table_23-2148095754.jpg",
          alt: "Jessica L., CEO of InnovateTech",
        },
        {
          src: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-5596.jpg",
          alt: "Mark T., Founder of GreenBloom",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-dark-skinned-female-with-long-brunette-hair-broad-happy-smile-wearing-denim-shirt-enjoying-good-positive-news-concerning-her-promotion-work-posing-isolated-against-white-blank-wall-b_176420-10367.jpg",
          alt: "Sarah P., Marketing Director at NexusCorp",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elderly-businessman-with-laptop_23-2148116267.jpg",
          alt: "David K., Product Manager at OptiSolutions",
        },
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
          id: "starter",
          badge: "Perfect Start",
          badgeIcon: Sparkles,
          price: "$750+",
          subtitle: "Ideal for startups & small projects",
          buttons: [
            {
              text: "Get Started",
              href: "#contact",
            },
          ],
          features: [
            "Basic Logo Design",
            "1-Page Website",
            "Social Media Audit",
            "Basic SEO Setup",
          ],
        },
        {
          id: "pro",
          badge: "Most Popular",
          badgeIcon: Star,
          price: "$2,500+",
          subtitle: "For growing businesses seeking impact",
          buttons: [
            {
              text: "Choose Pro",
              href: "#contact",
            },
          ],
          features: [
            "Full Brand Identity",
            "3-5 Page Website",
            "Content Strategy",
            "Targeted Marketing Campaign",
          ],
        },
        {
          id: "enterprise",
          badge: "Custom Solutions",
          badgeIcon: Crown,
          price: "Custom",
          subtitle: "Tailored for large projects & ongoing needs",
          buttons: [
            {
              text: "Contact for Quote",
              href: "#contact",
            },
          ],
          features: [
            "Comprehensive Branding",
            "Custom Web Application",
            "Advanced Digital Marketing",
            "Dedicated Support",
          ],
        },
      ]}
      title="Flexible Packages for Every Need"
      description="Choose from our expertly crafted packages or let's create a custom solution that perfectly fits your project and budget."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      text="Ready to transform your brand? Let's create something amazing together. Reach out today for a personalized discussion."
      buttons={[
        {
          text: "Send a Message",
          href: "mailto:hello@creativeflow.com",
        },
        {
          text: "Schedule a Call",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Portfolio",
              href: "#services",
            },
          ],
        },
        {
          items: [
            {
              label: "About Me",
              href: "#about",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="CreativeFlow Studio"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
