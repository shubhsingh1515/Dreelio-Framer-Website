"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const heroRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const cloudLeftRef = useRef<HTMLImageElement>(null);
  const cloudRightRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const img = imageWrapperRef.current;
    const cloudLeft = cloudLeftRef.current;
    const cloudRight = cloudRightRef.current;

    if (!hero || !img || !cloudLeft || !cloudRight) return;

    /** 🔥 IMAGE PARALLAX + SCALE ANIMATION */
    gsap.fromTo(
      img,
      { scale: 1, y: 0, z: 0, transformPerspective: 800 },
      {
        scale: 1.12,
        y: -150,
        z: 60,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom+=300 top",
          scrub: 1.6,
        },
      }
    );

    /** ☁️ CLOUD PARALLAX — slow drifting movement */
    gsap.to(cloudLeft, {
      x: -60,
      y: 20,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1.4,
      },
    });

    gsap.to(cloudRight, {
      x: 60,
      y: 30,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1.4,
      },
    });

    /** Fade-in hero text */
    gsap.from(".hero-title, .hero-desc, .hero-buttons", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-32 px-4 relative flex flex-col justify-center items-center overflow-hidden bg-blue-50"
    >
      {/* ☁️ CLOUD LEFT */}
      <img
        ref={cloudLeftRef}
        src="/images/cloud1.png" // ← replace path
        alt="Cloud left"
        className="absolute left-0 top-40 w-[260px] opacity-90 z-10 pointer-events-none"
      />

      {/* ☁️ CLOUD RIGHT */}
      <img
        ref={cloudRightRef}
        src="/images/cloud2.png" // ← replace path
        alt="Cloud right"
        className="absolute right-0 top-52 w-[260px] opacity-90 z-10 pointer-events-none"
      />
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col justify-center items-center gap-8 max-w-3xl mx-auto text-center"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Ready to get started?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of freelancers and agencies already managing their
            business with Pointer. Start your free trial today—no credit card
            required.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/signup">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
              Try for Free
            </Button>
          </Link>
          <Link href="#features">
            <Button
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-8 py-6 text-lg rounded-full font-semibold bg-transparent"
            >
              See All Features
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
