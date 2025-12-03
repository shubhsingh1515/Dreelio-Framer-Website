"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Button } from "./ui/button";
import { FileText, Wallet, LineChart, Link2 } from "lucide-react";

export function FinancialManagementSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Chart data for the analytics graph
  const chartData = [
    { month: "Jan", used: 2000, forecast: 2400 },
    { month: "Feb", used: 3000, forecast: 3200 },
    { month: "Mar", used: 4500, forecast: 4100 },
    { month: "Apr", used: 6200, forecast: 6500 },
    { month: "May", used: 7800, forecast: 8200 },
    { month: "Jun", used: 8500, forecast: 9000 },
    { month: "Jul", used: 9200, forecast: 9800 },
  ];

  const features = [
    { label: "Invoicing", icon: FileText },
    { label: "Budgets", icon: Wallet },
    { label: "Forecasting", icon: LineChart },
    { label: "Integrations", icon: Link2 },
  ];

  return (
    <section ref={ref} className="py-10 md:py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-slate-500 font-semibold text-xs mb-6 uppercase tracking-widest">
            Financial Management
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Stay on top of your revenue with real-time activity tracking
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Your latest activity shows steady engagement across your ongoing
            leads. From SaaS marketing insights to community-driven tasks,
            everything you’re working on updates instantly—giving you a clear
            view of performance, progress, and earnings. With automated
            tracking, expense logging, and smart financial tools, you always
            know where your money is coming from and which tasks are performing
            best.
          </p>

          <a
            href="https://calendly.com/adarsh-ilu/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors mb-6"
            >
              Try Community Tracker free
            </motion.button>
          </a>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                className="p-4 border-2 border-gray-100 rounded-xl hover:border-blue-200 transition-all cursor-pointer bg-white"
              >
                <div className="flex items-center gap-2 text-2xl mb-2">
                  <feature.icon />
                  <p className="font-semibold text-foreground text-base">
                    {feature.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-br from-[#95c6f6] to-[#f8e3d0]  rounded-3xl p-6"
        >
          <img
            src="/images/project_budget.jpg"
            alt="Financial Management Dashboard"
            className=""
          />
          {/* <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Project budget
            </h3>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💰</span>
                  <span className="text-3xl font-bold text-foreground">
                    $18,090
                  </span>
                </div>
                <p className="text-sm text-slate-500">Billable total</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📊</span>
                  <span className="text-3xl font-bold text-foreground">
                    $22,090
                  </span>
                </div>
                <p className="text-sm text-slate-500">Expected profit</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💵</span>
                  <span className="text-3xl font-bold text-foreground">
                    $2,325
                  </span>
                </div>
                <p className="text-sm text-slate-500">Project costs</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">⏱️</span>
                  <span className="text-3xl font-bold text-foreground">
                    89.3
                  </span>
                </div>
                <p className="text-sm text-slate-500">Margin</p>
              </motion.div>
            </div>

            <hr className="my-6" />

           
            <h4 className="font-bold text-foreground mb-4">Analytics</h4>
            <div className="flex gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-1 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-600">Budget used</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-1 bg-green-400 rounded-full"
                  style={{ borderStyle: "dashed" }}
                ></div>
                <span className="text-sm text-slate-600">Forecast</span>
              </div>
            </div>

           
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorUsed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorForecast"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#86efac" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#86efac" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  stroke="#d1d5db"
                  style={{ fontSize: "12px" }}
                />
                <YAxis hide />
                <Area
                  type="monotone"
                  dataKey="used"
                  stroke="#22c55e"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorUsed)"
                />
                <Area
                  type="monotone"
                  dataKey="forecast"
                  stroke="#86efac"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  fillOpacity={1}
                  fill="url(#colorForecast)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
