import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { SampleQuestionSection } from "@/components/sample-question-section"
import { MostLovedSection } from "@/components/most-loved-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesShowcaseSection } from "@/components/features-showcase-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFE6F2] via-[#FFD9EC] to-[#FFEFF7]">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <HeroSection />
        <SampleQuestionSection />
        <MostLovedSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FeaturesShowcaseSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}