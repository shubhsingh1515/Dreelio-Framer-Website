"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!scrollRef.current) return;

      const totalWidth = scrollRef.current.scrollWidth - window.innerWidth;

      // GSAP Horizontal Scroll
      gsap.to(scrollRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalWidth}`, // length of scroll
          scrub: 1.2, // smooth + slow
          pin: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      id: 1,
      title: "Nurture leads with automation",
      description:
        "Build lasting relationships through intelligent email sequences and personalized touchpoints",
      image: "/images/scroll1.jpg",
      link: "#nurture-leads",
    },
    {
      id: 2,
      title: "LinkedIn ads that convert",
      description:
        "Target decision-makers with precision and drive qualified B2B leads",
      image: "/images/scroll2.jpg",
      link: "#linkedin-ads",
    },
    {
      id: 3,
      title: "Whitepaper & gated content",
      description:
        "Capture high-intent prospects with valuable industry insights",
      image: "/images/scroll3.jpg",
      link: "#whitepaper",
    },
    {
      id: 4,
      title: "Sales strategy & optimization",
      description:
        "Transform your sales process with data-driven strategies that close deals",
      image: "/product/Screenshot4.png",
      link: "#sales-strategy",
    },
    {
      id: 5,
      title: "LinkedIn ads campaign",
      description:
        "Reach your ideal customers where they make business decisions",
      image: "/product/Screenshot5.png",
      link: "#linkedin-campaign",
    },
    {
      id: 6,
      title: "Whitepaper marketing",
      description: "Establish thought leadership and generate qualified leads",
      image: "/product/Screenshot6.png",
      link: "#whitepaper-marketing",
    },
    {
      id: 7,
      title: "Nurture leads effectively",
      description:
        "Automated workflows that guide prospects through your funnel",
      image: "/product/Screenshot7.png",
      link: "#nurture-effectively",
    },
    {
      id: 8,
      title: "LinkedIn advertising",
      description:
        "Maximize ROI with targeted campaigns on the world's largest professional network",
      image: "/product/Screenshot8.png",
      link: "#linkedin-advertising",
    },
    {
      id: 9,

      title: "Sales funnel optimization",
      description:
        "Identify bottlenecks and accelerate conversions with proven techniques",
      image: "/product/Screenshot9.png",
      link: "#sales-funnel",
    },
    {
      id: 10,
      title: "Comprehensive lead generation",
      description:
        "End-to-end solutions that fill your pipeline with high-quality prospects",
      image: "/product/Screenshot10.png",
      link: "#lead-generation",
    },
  ];

  const handleCardClick = (link: string) => {
    console.log("Navigating to:", link);
    // You can implement actual navigation here
    // router.push(link) or window.location.href = link
  };

  return (
    <section ref={containerRef} className="relative w-full bg-white py-10">
      {/* Text Section */}
      <div className="px-4 md:px-12 mb-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We have <span className="italic font-serif">build</span>
          </h2>
          <p className="text-lg text-gray-600">
            We go beyond traditional marketing with data-driven strategies.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div className="h-[70vh] overflow-hidden relative">
        <div
          ref={scrollRef}
          className="flex gap-6 px-4 md:px-12 absolute top-1/2 -translate-y-1/2"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[600px] lg:w-[700px] cursor-pointer group"
              onClick={() => handleCardClick(card.link)}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className=" inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="px-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
