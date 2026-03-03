import Link from "next/link"

export function SampleQuestionSection() {
  const sampleQuestion =
    "What is one small memory of us that you cherish but rarely talk about?";

  const shareText = encodeURIComponent(
    `Here’s a Coupl-style question for us:\n\n"${sampleQuestion}"`
  );

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="max-w-[560px] mx-auto rounded-[24px] border border-[#FFC1DE] bg-[#FFEAF4] p-6 md:p-8 shadow-[0_18px_40px_rgba(255,122,170,0.18)]">
          <p className="text-center text-[14px] md:text-[16px] font-rethink-sans text-[#FF3E82] mb-2">
            Try a Coupl-style moment
          </p>
          <h2 className="text-center text-[20px] md:text-[22px] font-semibold text-pink-900 font-rethink-sans mb-4">
            Sample today&apos;s question
          </h2>
          <div className="rounded-[18px] bg-white px-5 py-4 mb-6 border border-[#FFD3E6] text-left">
            <p className="text-[15px] md:text-[16px] text-pink-900 font-medium font-rethink-sans leading-relaxed">
              {sampleQuestion}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            <p className="text-[13px] md:text-[14px] text-pink-900/70 font-rethink-sans">
              Send this question to your partner and see what they say tonight.
            </p>
            <Link
              href={`https://wa.me/?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#FF3E82] text-white text-sm font-medium font-rethink-sans hover:bg-[#FF155E] transition-colors"
            >
              Send this to my partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

