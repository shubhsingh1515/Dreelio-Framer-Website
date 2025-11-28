"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialsAnimated() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote:
        "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
      author: "Leah Daniel",
      role: "Design Ops Lead, Teamwork",
      initials: "LD",
    },
    {
      quote:
        "We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro.",
      author: "Jane Jay Jay",
      role: "Project Manager, Google",
      initials: "JJ",
    },
    {
      quote:
        "Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed.",
      author: "Amos Chen",
      role: "Art Director, Pentagram",
      initials: "AC",
    },
    {
      quote:
        "From proposal to payment, this tool has transformed our entire process. Our clients love the smooth experience.",
      author: "Sofia Martinez",
      role: "Founder, Creative Minds",
      initials: "SM",
    },
    {
      quote:
        "This platform has revolutionized our workflow and helped us scale quickly.",
      author: "Liam O'Connor",
      role: "CEO, Bright Ideas Agency",
      initials: "LO",
    },
  ];

  // ⭐ GSAP infinite marquee effect
  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-4 max-w-7xl mx-auto relative"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          “Dreelio is by far the best agency tool I have ever used”
        </h2>
        <div className="flex justify-center">
          <Avatar className="mr-3">
            <AvatarFallback className="bg-gray-300">MP</AvatarFallback>
          </Avatar>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Martha Punla · VP Marketing, Meta
        </p>
      </motion.div>

      {/* Fade Mask (Left & Right) */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>

      {/* Marquee Track */}
      <div className="overflow-hidden w-full">
        <div ref={trackRef} className="flex gap-6 w-max">
          {/* Duplicate for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white w-[350px] shrink-0 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-blue-200 font-semibold">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
