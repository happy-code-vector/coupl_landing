import Image from "next/image"

export function FeaturesShowcaseSection() {
  const bentoFeatures = [
    {
      title: "Backed by relationship science",
      description: "Every prompt is grounded in research from leading relationship experts and psychologists.",
      image: "/visuals/Backed_by_relationship_science__version_1.png"
    },
    {
      title: "Rituals built for real life",
      description: "Daily practices that fit into your routine—no matter how busy life gets.",
      image: "/visuals/Rituals_built_for_real_life_version_1.png"
    },
    {
      title: "Skip the small talk",
      description: "Jump straight into conversations that matter with thoughtful, engaging prompts.",
      image: "/visuals/Skip_the_small_talk__version_1.png"
    },
    {
      title: "Visualize your love’s growth",
      description: "See patterns, track your journey together, and celebrate how far you’ve come.",
      image: "/visuals/Visualize_your_love’s_growth_version_1.png"
    },
    {
      title: "Data-driven intimacy",
      description: "Personalized insights that help you understand each other on a deeper level.",
      image: "/visuals/Data-driven_intimacy_version_1.png"
    },
    {
      title: "Renew your love this spring",
      description: "Fresh prompts and seasonal themes to keep your connection feeling new.",
      image: "/visuals/Renew_Your_Love_This_Spring_version_1.png"
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
              <div className="w-full aspect-square mb-6 rounded-[16px] overflow-hidden relative ring-1 ring-[#FFC1DE] bg-[#FFEAF4]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-pink-900 font-inter text-[24px] md:text-[28px] font-medium mb-3 tracking-[-0.02em]">
                {feature.title}
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
              <h3 className="text-pink-900 font-inter text-[24px] md:text-[28px] font-medium mb-3 tracking-[-0.02em]">
                {feature.title}
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

