"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/site-data";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Cpu, Rocket, Target } from "lucide-react";

const VISION_POINTS = [
  {
    icon: <Cpu className="text-brand-accent" />,
    title: "AI-Powered Products",
    description: "Creating intelligent systems that automate complexity and unlock new human potentials."
  },
  {
    icon: <Rocket className="text-brand-secondaryAccent" />,
    title: "Startup Mindset",
    description: "Iterating fast, scaling efficiently, and focusing on solving real user pain points."
  },
  {
    icon: <Target className="text-brand-accent" />,
    title: "Global Impact",
    description: "Building scalable digital experiences that bridge the gap between technology and accessibility."
  }
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight mb-6">The Vision</h2>
          <p className="text-xl text-brand-textSecondary italic leading-relaxed">
            "{SITE_DATA.vision}"
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {VISION_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassPanel className="p-8 h-full space-y-4 group hover:border-brand-accent/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{point.title}</h3>
                <p className="text-sm text-brand-textSecondary leading-relaxed">
                  {point.description}
                </p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
