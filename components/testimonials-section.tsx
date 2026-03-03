import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      handle: "@sarahandliam",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      quote: "We started using Coupl during a really busy season. Having one small question to answer together each night has brought back the softness we were missing."
    },
    {
      name: "Michael Torres",
      handle: "@mikeandjo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      quote: "Coupl gave us language for things we felt but never said out loud. The prompts are simple but somehow always exactly what we need that day."
    },
    {
      name: "Emma Rodriguez",
      handle: "@emmaandsofia",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      quote: "As a long‑distance couple, Coupl makes me feel like we’re still building something together, even on the days we only have ten minutes."
    }
  ]

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-20">
      {/* Section Header */}
      <header className="text-left mb-8">
        <span className="text-[16px] text-[#FF3E82] font-rethink-sans border border-[#FFB3D7] px-4 py-2 rounded-full bg-[#FFEAF4] shadow-[inset_0px_1px_10px_0px_rgba(255,122,170,0.18)] inline-block mb-[10px]">
          Couples who use Coupl
        </span>
        <h2 className="mt-4 text-[26px] md:text-[40px] font-bold text-pink-900 font-rethink-sans leading-[35px] md:leading-[45px] flex flex-col">
          <span>Real stories from people</span>
          <div className="flex flex-col md:flex-row md:gap-2">
            <span>who wanted to feel closer,</span>
            <span className="text-pink-900/60">and found simple ways to start.</span>
          </div>
        </h2>
        <p className="mt-4 text-[18px] text-pink-900/70 w-full max-w-[734px]">
          Coupl isn’t about fixing everything overnight—it’s about tiny, honest check‑ins that slowly change how you show up for each other.
        </p>
      </header>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-start mt-[60px]">
        {testimonials.map((testimonial, index) => (
          <article 
            key={index}
            className="w-full flex flex-col justify-between rounded-[24px] p-6 border border-[#FFC1DE] bg-[#FFEAF4] hover:border-[#FF8AB8] shadow-[0_18px_40px_rgba(255,122,170,0.18)] transition-all duration-300 hover:-translate-y-1"
          >
            <blockquote>
              <p className="text-pink-900/80 font-rethink-sans text-[16px] md:text-[18px] font-normal leading-[29.333px] mb-6">
                {testimonial.quote}
              </p>
            </blockquote>
            <footer>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                  <Image
                      alt={`Profile picture of ${testimonial.name}`}
                      width={40}
                      height={40}
                      className="rounded-full ring-2 ring-[#FFB3D7]"
                      src={testimonial.avatar}
                  />
                </div>
                <div>
                    <p className="text-pink-900 font-medium font-rethink-sans">
                      {testimonial.name}
                    </p>
                    <p className="text-pink-900/60 text-sm font-rethink-sans">
                      {testimonial.handle}
                    </p>
                </div>
                </div>
              </div>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FF3E82]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}