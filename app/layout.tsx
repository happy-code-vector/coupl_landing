import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope, Shadows_Into_Light } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// Google Fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const shadows = Shadows_Into_Light({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-shadows',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Coupl | Daily Questions & Relationship Games for Couples",
  description:
    "The #1 app for couples to reconnect. Daily questions, quizzes, and relationship advice backed by science. Download for free on iOS.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} ${shadows.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;500;600;700;800&family=Source+Serif+4:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <Script id="ld-software-app" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Coupl",
            operatingSystem: "iOS",
            applicationCategory: "LifestyleApplication",
            description:
              "The #1 app for couples to reconnect with daily questions, games, and guided reflections.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          })}
        </Script>
      </head>
      <body className="font-rethink-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}