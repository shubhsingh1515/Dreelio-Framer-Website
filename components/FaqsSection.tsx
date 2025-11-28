"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Most users begin seeing measurable improvements within 2–4 weeks depending on their workflow and consistency.",
  },
  {
    q: "What's included in the onboarding process?",
    a: "We provide personalized onboarding, setup guidance, system walkthroughs, and optimization suggestions tailored to your needs.",
  },
  {
    q: "Do you guarantee specific results?",
    a: "No tool can guarantee results, but our platform significantly increases efficiency and clarity for most users.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, you can switch plans at any time from your dashboard with no downtime or disruption.",
  },
  {
    q: "What makes Miraa different from other SEO agencies?",
    a: "We combine automation, human expertise, and transparent reporting to deliver better long-term outcomes.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 w-full flex flex-col items-center bg-[#e6ebf1]">
      <div className="max-w-3xl text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-lg mt-3"
        >
          Everything you need to know about our pricing and process
        </motion.p>
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-5">
        {faqs.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

// FAQ ITEM COMPONENT
function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white rounded-xl shadow-sm border border-gray-200 cursor-pointer"
    >
      {/* HEADER */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-5"
      >
        <p className="text-base md:text-lg font-medium text-foreground">
          {item.q}
        </p>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </button>

      {/* BODY */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-muted-foreground text-base leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
