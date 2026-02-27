import Image from "next/image"
import { Upload, FileText, GraduationCap } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Share your names & story",
      description: "Start with a soft onboarding—tell Coupl who you are and where your relationship is today.",
      icon: Upload
    },
    {
      number: "2",
      title: "Answer loving prompts",
      description: "Each day, you both get short reflection questions designed to spark conversation and connection.",
      icon: FileText
    },
    {
      number: "3",
      title: "Grow closer over time",
      description: "Look back on your answers, see how you’ve grown, and get suggestions for your next meaningful moment together.",
      icon: GraduationCap
    }
  ]

  return (
    <section id="how-it-works" className="w-full max-w-[1200px] mx-auto px-4 mt-[120px] md:mt-[180px] mb-[100px]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="text-[16px] text-[#FF3E82] font-rethink-sans border border-[#FFB3D7] px-4 py-2 rounded-[999px] bg-[#FFEAF4] inline-block">
            How it works
          </span>
        </div>
        <h2 className="text-[40px] md:text-[70px] font-medium text-pink-900 font-inter tracking-[-0.06em] leading-[100%]">
          Coupl keeps it gentle.
        </h2>
      </div>

      {/* Steps with connecting line */}
      <div className="relative">
        {/* Curved connecting line */}
        <svg
          className="absolute top-[34px] left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[90px] hidden md:block pointer-events-none"
          viewBox="0 0 703 90"
          fill="none"
        >
          <path
            d="M 0 29.775 C 15.958 29.775 81.894 56.622 156.611 59 C 231.329 61.378 314.828 39.287 351.25 29.899 C 533.712 -37.301 703 29.775 703 29.775"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="4"
            strokeLinecap="butt"
            fill="transparent"
            transform="translate(0 15)"
          />
        </svg>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-[68px] h-[68px] rounded-full bg-white flex items-center justify-center mb-8 shadow-lg shadow-[#FFB3D7]">
                  <Icon className="w-8 h-8 text-[#FF3E82]" />
                </div>

                {/* Step Content */}
                <h3 className="text-pink-900 font-inter text-[24px] md:text-[28px] font-medium mb-3 tracking-[-0.02em]">
                  {step.number}. {step.title}
                </h3>
                <p className="text-pink-900/80 font-rethink-sans text-[14px] md:text-[16px] leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* App Preview Images */}
      <div className="mt-16 flex justify-center gap-6 flex-wrap">
        <div className="relative w-[180px] md:w-[220px] h-[360px] md:h-[440px] rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(255,122,170,0.35)] border border-[#FFC1DE]">
          <Image
            src="/visuals/pomelli-image.png"
            alt="Coupl App Screen"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-[180px] md:w-[220px] h-[360px] md:h-[440px] rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(255,122,170,0.35)] border border-[#FFC1DE] hidden md:block">
          <Image
            src="/visuals/pomelli-image (1).png"
            alt="Coupl App Screen"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-[180px] md:w-[220px] h-[360px] md:h-[440px] rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(255,122,170,0.35)] border border-[#FFC1DE] hidden lg:block">
          <Image
            src="/visuals/pomelli-image (2).png"
            alt="Coupl App Screen"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}