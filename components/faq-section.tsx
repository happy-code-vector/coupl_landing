"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is Coupl App?",
      answer: "Coupl App is a gentle relationship companion that gives you daily prompts, check-ins, and space to save memories together. It’s designed to help you talk more openly, understand each other better, and celebrate the little moments that make your relationship special."
    },
    {
      question: "Who is Coupl App for?",
      answer: "Coupl App is for any kind of couple—newly dating, long‑distance, engaged, married, or years in. If you want to stay curious about each other and build healthier habits around communication, Coupl is made for you."
    },
    {
      question: "How much time does it take each day?",
      answer: "Most couples spend just a few minutes with Coupl each day. You can answer a handful of questions, add a photo or memory, or simply check your widgets. It’s intentionally light so it fits into real life, not just perfect days."
    },
    {
      question: "Is Coupl App available on iPhone and Android?",
      answer: "Coupl App is currently available on iPhone. Android support is on our roadmap—inside the app and on our site you can join the waitlist to be notified the moment it launches."
    },
    {
      question: "Is Coupl App free to use?",
      answer: "You can start Coupl App for free and explore daily prompts and core features. We also offer optional paid upgrades that unlock more templates, deeper insights, and extra ways to personalize your shared space together."
    }
  ]

  return (
    <section id="faq" className="w-full max-w-[1200px] mx-auto px-4 mt-[100px] mb-[100px]">
      <div className="bg-[#FFEAF4] rounded-[24px] border border-[#FFC1DE] p-8 md:p-12 shadow-[0_18px_40px_rgba(255,122,170,0.18)]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="mb-6">
            <span className="text-[16px] text-[#FF3E82] font-rethink-sans border border-[#FFB3D7] px-4 py-2 rounded-[999px] bg-white inline-block">
              Questions
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-medium text-pink-900 font-inter tracking-[-0.06em] leading-[120%]">
            Frequently Asked <span className="font-source-serif-4 italic font-semibold tracking-[-0.07em]">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[#FFC1DE]/60 rounded-[16px] bg-white data-[state=open]:bg-[#FFF2F8] overflow-hidden"
              >
                <AccordionTrigger className="text-left text-[16px] md:text-[18px] font-medium text-pink-900 hover:text-pink-900/80 font-rethink-sans hover:no-underline px-6 py-5">
                  {faq.question}
              </AccordionTrigger>
                <AccordionContent className="text-pink-900/80 font-rethink-sans text-[14px] md:text-[16px] leading-relaxed px-6 pb-5">
                  {faq.answer}
              </AccordionContent>
            </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Quote Icon */}
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-16 rounded-[20px] bg-[#FF3E82] flex items-center justify-center rotate-90 shadow-[0_12px_24px_rgba(255,122,170,0.4)]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5.5V26.5C15 26.6326 14.9473 26.7598 14.8536 26.8536C14.7598 26.9473 14.6326 27 14.5 27H7C6.46957 27 5.96086 26.7893 5.58579 26.4142C5.21071 26.0391 5 25.5304 5 25V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H14.5C14.6326 5 14.7598 5.05268 14.8536 5.14645C14.9473 5.24021 15 5.36739 15 5.5ZM25 5H17.5C17.3674 5 17.2402 5.05268 17.1464 5.14645C17.0527 5.24021 17 5.36739 17 5.5V26.5C17 26.6326 17.0527 26.7598 17.1464 26.8536C17.2402 26.9473 17.3674 27 17.5 27H25C25.5304 27 26.0391 26.7893 26.4142 26.4142C26.7893 26.0391 27 25.5304 27 25V7C27 6.46957 26.7893 5.96086 26.4142 5.58579C26.0391 5.21071 25.5304 5 25 5Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
} 