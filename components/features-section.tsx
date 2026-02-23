import { Upload, MessageSquare, Brain, Smartphone, Globe, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Upload,
      title: "Never run out of things to talk about.",
      description: "Respond to gentle prompts about your stories, values, and everyday moments."
    },
    {
      icon: Brain,
      title: "See how you both have grown.",
      description: "See patterns in how you both feel, think, and show love over time."
    },
    {
      icon: MessageSquare,
      title: "Conversation starters",
      description: "Get follow‑up questions to keep the talk going when you’re not sure what to say."
    },
    {
      icon: Globe,
      title: "Any kind of couple",
      description: "Long‑distance, newly dating, or years in—Coupl meets you where you are."
    },
    {
      icon: Zap,
      title: "Understand your partner before they have to ask.",
      description: "Short, meaningful questions you can answer in under two minutes."
    },
    {
      icon: Zap,
      title: "Playful challenges",
      description: "Little dares and games that nudge you to try sweet new things together.",
      comingSoon: true
    }
  ]

  return (
    <section id="features" className="py-20 md:pt-[160px] md:pb-20 mt-[120px] md:mt-[180px]">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-pink-900 font-rethink-sans text-[26px] md:text-[32px] font-bold leading-[46.8px] mb-4">
            Make it easier to love each other, every day
          </h2>
          <p className="mx-auto px-4 md:px-0 max-w-[280px] md:max-w-[500px] text-center font-rethink-sans text-[16px] md:text-[18px] font-medium leading-[1.3] md:leading-[22.4px] tracking-[0.32px] text-pink-900/70">
            Coupl gives you thoughtful prompts, reflections, and gentle nudges so you can stay curious about each other.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto relative w-full">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isLastRow = index >= 3
            const isLastColumn = (index + 1) % 3 === 0

            return (
              <article 
                key={index}
                className="px-6 py-8 md:p-8 relative rounded-[24px] bg-[#FFEAF4] border border-[#FFC1DE] shadow-[0_18px_40px_rgba(255,122,170,0.18)]"
              >
                <div className="mb-4">
                  <Icon className="w-6 h-6 text-[#FF3E82]" />
                </div>
                <h3 className="text-pink-900 font-rethink-sans text-[18px] font-semibold leading-[22.4px] tracking-[0.32px] mb-2 flex items-center gap-2">
                  {feature.title}
                  {feature.comingSoon && (
                    <span className="text-xs px-3 py-1 rounded-full border border-[#FF8AB8]/60 bg-[#FFCCE4] text-[#C71563]">
               
                    </span>
                  )}
                </h3>
                <p className="text-pink-900/80 font-rethink-sans text-[14px] font-medium leading-[22.4px] tracking-[0.32px]">
                  {feature.description}
              </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}