import Image from "next/image"

export function MostLovedSection() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="container max-w-[1200px] mx-auto px-4">
        {/* Title */}
        <h1 className="text-center font-source-serif-4 text-[28px] md:text-[32px] font-normal tracking-[-0.08em] leading-[120%] text-pink-900 mb-12">
          The most-loved <br className="md:hidden" />little love ritual in your phone
        </h1>

        {/* Visual Content Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Video Preview */}
          <div className="max-w-[320px] md:max-w-[400px]">
            <div className="relative rounded-[24px] overflow-hidden border border-[#FFC1DE] hover:border-[#FF8AB8] transition-all duration-300 shadow-[0_18px_40px_rgba(255,122,170,0.18)] hover:shadow-[0_22px_50px_rgba(255,122,170,0.28)] bg-[#FFEAF4]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/visuals/Toss_the_Digital_Dust_version_1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
