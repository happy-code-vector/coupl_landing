import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-20 md:pt-32 pb-16 overflow-hidden bg-gradient-to-b from-[#FFE6F2] via-[#FFD9EC] to-[#FFEFF7]">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Hero Heading */}
          <h1 className="mt-[80px] text-center font-inter font-semibold text-[40px] md:text-[50px] leading-[1.1] md:leading-[1.1] max-w-[650px] w-[95%] mx-auto tracking-[-1px] md:tracking-[-2.53px] bg-gradient-to-b from-[#FF4B8C] via-[#FF2F70] to-[#FF7FAF] bg-clip-text text-transparent pb-8 md:pb-8 [@media(max-width:768px)]:text-[32px] [@media(max-width:768px)]:font-manrope [@media(max-width:768px)]:pb-3 [@media(max-width:768px)]:max-w-[350px]">
            Grow closer in just 2 minutes a day.
          </h1>

          {/* Subtitle */}
          <p className="flex flex-col justify-center max-w-[420px] w-[90%] mx-auto text-center font-rethink-sans text-[18px] font-medium leading-[1.2] md:leading-[22.4px] tracking-[0.32px] text-pink-700/80 [@media(max-width:768px)]:text-[16px] [@media(max-width:768px)]:max-w-[320px]">
            Guided prompts, playful dares, and deep reflections—backed by relationship science.
          </p>

          {/* Download Button */}
          <Link 
            href="https://apps.apple.com/us/app/quizliai/id6751740981" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex justify-center items-center w-[192px] h-[50px] px-[15px] py-[2px] gap-[10px] mx-auto mt-8 rounded-[200px] transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_34px_rgba(255,75,140,0.55)]"
          >
            {/* Static inner border */}
            <span className="absolute inset-0 rounded-[200px] border border-white/10"></span>
            
            {/* Animated gradient border */}
            <span className="absolute inset-0 rounded-[200px] overflow-hidden">
              <span className="absolute inset-[-2px] rounded-[200px] bg-gradient-to-r from-[#FF4B8C] via-[#FF7FAF] to-[#FF2F70] bg-[length:200%_100%] animate-gradient-rotate opacity-60"></span>
            </span>
            
            {/* Button content */}
            <span className="absolute inset-[2px] rounded-[200px] bg-gradient-to-r from-[#FF5C98] to-[#FF2F70] flex items-center justify-center z-10">
              <span className="text-white font-rethink-sans">Start Your First Ritual</span>
            </span>
          </Link>

          {/* Hero Video */}
          <div className="mt-[30px] w-[90%] md:w-[40%] mx-auto">
            <div className="relative rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(255,122,170,0.35)]">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}