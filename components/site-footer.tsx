import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-pink-100/60 bg-gradient-to-b from-[#FFEFF7] via-[#FFE1F1] to-[#FFD3EB]">
      <div className="container max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Coupl App Logo" 
                width={120} 
                height={40}
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold text-pink-700 font-rethink-sans">Coupl App</span>
            </Link>
            <p className="text-sm text-pink-700/80 font-rethink-sans">
              A gentle space for couples to reflect, share, and grow closer together.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-pink-800 font-rethink-sans">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-pink-700/80 hover:text-pink-900 transition-colors font-rethink-sans">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-sm text-pink-700/80 hover:text-pink-900 transition-colors font-rethink-sans">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>


          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-pink-800 font-rethink-sans">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://sites.google.com/view/privacy-coupl/home" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-700/80 hover:text-pink-900 transition-colors font-rethink-sans">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="https://sites.google.com/view/coupl-terms/home" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-700/80 hover:text-pink-900 transition-colors font-rethink-sans">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-pink-100/60 pt-6 text-center">
          <p className="text-sm text-pink-700/70 font-rethink-sans">
            © {new Date().getFullYear()} Coupl App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}