import Image from "next/image"
import { Upload } from "lucide-react"

export function FeaturesShowcaseSection() {
  const bentoFeatures = [
    {
      title: "Moments that matter",
      description: "First dates • Big moves • Small rituals • Tough talks • Inside jokes",
      image: "https://framerusercontent.com/images/HrUr6jkcwiRshv9bqe0BdHnyiWc.png?width=1024&height=1024"
    },
    {
      title: "Shared reflections",
      description: "See your answers side‑by‑side and notice what makes each of you unique.",
      image: "/shared-reflections.png"
    },
    {
      title: "Conversation starters",
      description: "Never run out of things to talk about on walks, dates, or long‑distance calls.",
      image: "https://framerusercontent.com/images/6E6sZpvXNMk7gfxjkAycFfDGA.png?width=512&height=512"
    },
    {
      title: "Love in your language",
      description: "Prompts that feel natural whether you’re texting, journaling, or speaking out loud.",
      image: "https://framerusercontent.com/images/AFKMgwrfTwIKnvcJ4wShUb7H55w.png?width=512&height=512"
    },
    {
      title: "Remember the little things",
      description: "From favorite snacks to quiet wishes—Coupl helps you keep track of what matters to them.",
      image: "https://framerusercontent.com/images/r2UBuO436CTVXH0mtCfQ8AyYmVg.png?width=512&height=512"
    },
    {
      title: "Playful couple games",
      description: "Light challenges and dares that bring more fun and affection into your week.",
      image: "https://framerusercontent.com/images/PpaEVFbJGnqxnRZW6xiJZpEHlrc.png?width=495&height=494",
      comingSoon: true
    }
  ]

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 mt-[120px] md:mt-[180px] mb-[100px]">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="text-[16px] text-[#FF3E82] font-rethink-sans border border-[#FFB3D7] px-4 py-2 rounded-[999px] bg-[#FFEAF4] inline-block">
            For couples
          </span>
        </div>
        <h2 className="text-[32px] md:text-[64px] font-medium text-pink-900 font-inter tracking-[-0.06em] leading-[120%]">
          Tiny questions, big feelings.
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="space-y-6">
        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoFeatures.slice(0, 3).map((feature, index) => (
            <div 
              key={index}
              className="rounded-[24px] border border-[#FFC1DE] bg-[#FFEAF4] p-8 flex flex-col items-center text-center overflow-hidden relative group shadow-[0_18px_40px_rgba(255,122,170,0.18)] hover:shadow-[0_22px_50px_rgba(255,122,170,0.28)] transition-all duration-500 hover:-translate-y-1"
            >
              {index === 0 ? (
                <div className="w-full aspect-square mb-6 rounded-[16px] flex items-center justify-center bg-gradient-to-br from-[#FF7FAF]/25 to-[#FFEAF4] ring-1 ring-[#FFC1DE]">
                  <Upload className="w-32 h-32 text-[#FF3E82]" strokeWidth={1.5} />
                </div>
              ) : (
                <div className="w-full aspect-square mb-6 rounded-[16px] overflow-hidden relative ring-1 ring-[#FFC1DE] bg-[#FFEAF4]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-pink-900 font-inter text-[24px] md:text-[28px] font-medium mb-3 tracking-[-0.02em] flex items-center gap-2 flex-wrap justify-center">
                {feature.title}
                {feature.comingSoon && (
                  <span className="text-xs px-3 py-1 rounded-full border border-[#FF8AB8]/60 bg-[#FFCCE4] text-[#C71563]">
                    Coming Soon
                  </span>
                )}
              </h3>
              <p className="text-pink-900/80 font-rethink-sans text-[14px] md:text-[16px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoFeatures.slice(3, 6).map((feature, index) => (
            <div 
              key={index}
              className="rounded-[24px] border border-[#FFC1DE] bg-[#FFEAF4] p-8 flex flex-col items-center text-center overflow-hidden relative group shadow-[0_18px_40px_rgba(255,122,170,0.18)] hover:shadow-[0_22px_50px_rgba(255,122,170,0.28)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-full aspect-square mb-6 rounded-[16px] overflow-hidden relative ring-1 ring-[#FFC1DE] bg-[#FFEAF4]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-pink-900 font-inter text-[24px] md:text-[28px] font-medium mb-3 tracking-[-0.02em] flex items-center gap-2 flex-wrap justify-center">
                {feature.title}
                {feature.comingSoon && (
                  <span className="text-xs px-3 py-1 rounded-full border border-[#FF8AB8]/60 bg-[#FFCCE4] text-[#C71563]">
                    Coming Soon
                  </span>
                )}
              </h3>
              <p className="text-pink-900/80 font-rethink-sans text-[14px] md:text-[16px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

