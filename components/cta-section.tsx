import Link from "next/link"

export function CTASection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 mt-32 mb-20">
      <div className="w-full rounded-[30px] border border-[#FFC1DE] bg-[#FFEAF4] p-12 md:p-16 text-center relative overflow-hidden shadow-[0_22px_50px_rgba(255,122,170,0.22)]">
        {/* Content */}
        <h2 className="text-[24px] md:text-[26px] font-bold text-pink-900 mb-4 font-rethink-sans">
          Build a happier, healthier relationship.
        </h2>
        <p className="text-pink-900/80 text-base md:text-lg mb-8 max-w-[500px] mx-auto font-rethink-sans">
          Coupl App has already helped couples all over the world talk more openly, share memories, and feel closer at every stage of their relationship.
        </p>
        
        {/* Download + Android waitlist */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <Link 
            href="https://apps.apple.com/us/app/quizliai/id6751740981" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF4B8C] to-[#FF2F70] text-white px-8 py-3 rounded-full hover:opacity-95 transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,75,140,0.55)] font-rethink-sans"
          >
            <svg className="w-4 h-5" viewBox="0 0 814 1000" fill="currentColor">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
            </svg>
            <span>Get started free</span>
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:ml-4">
            <p className="text-[13px] md:text-[14px] text-pink-900/70 font-rethink-sans text-left">
              Android is coming next. Be the first to get early access.
            </p>
            <form className="flex w-full sm:w-auto items-center gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-56 px-3 py-2 rounded-full border border-pink-200 bg-white text-sm font-rethink-sans text-pink-900 placeholder:text-pink-900/40 focus:outline-none focus:ring-2 focus:ring-[#FF3E82]/60"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-full bg-white text-[#FF3E82] text-sm font-medium font-rethink-sans border border-[#FFB3D7] hover:bg-[#FFF2F8] transition-colors"
              >
                Notify me
              </button>
            </form>
          </div>
        </div>

        {/* Soft glow background */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(255,182,213,0.9),_transparent_55%)]" />
      </div>
    </section>
  )
}