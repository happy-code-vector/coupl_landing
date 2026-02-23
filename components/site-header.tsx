"use client"

import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-pink-100/60 bg-white/70 backdrop-blur-xl">
      <div className="container max-w-[1200px] mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Coupl App Logo" 
            width={120} 
            height={40}
            className="h-8 w-auto"
          />
          <span className="font-bold text-xl text-pink-600 font-rethink-sans">Coupl App</span>
          </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-pink-700/80 hover:text-pink-800 transition-colors font-rethink-sans">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-pink-700/80 hover:text-pink-800 transition-colors font-rethink-sans">
            How It Works
          </Link>
          <Link href="#faq" className="text-sm font-medium text-pink-700/80 hover:text-pink-800 transition-colors font-rethink-sans">
            FAQ
          </Link>
        </nav>

        {/* Download Button (sticky CTA) */}
        <Link 
          href="https://apps.apple.com/us/app/quizliai/id6751740981"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gradient-to-r from-[#FF4B8C] to-[#FF2F70] hover:from-[#FF357E] hover:to-[#FF155E] text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.03] shadow-[0_8px_24px_rgba(255,75,140,0.55)] font-rethink-sans"
        >
          Get the App
          </Link>
      </div>
    </header>
  )
}