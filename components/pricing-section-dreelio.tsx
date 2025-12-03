"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

export function PricingSectionDreelio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingPlans = [
    {
      name: "Starter",
      price: "29",
      features: [
        "20 keywords",
        "5 communities",
        "Daily alerts",
        "Dashboard access",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "99",
      features: [
        "100 keywords",
        "Unlimited communities",
        "Real-time alerts",
        "Slack integration",
        "Auto-insights",
      ],
      popular: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Simple Pricing
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-gray-50 rounded-3xl p-10 border-2 transition-all ${
                plan.popular
                  ? "border-black shadow-xl"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {plan.name}
              </h3>

              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-gray-500 text-lg">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? "bg-black text-white hover:bg-gray-900"
                    : "border-gray-500 bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
