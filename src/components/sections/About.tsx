"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/site-data";
import { GlassPanel } from "@/components/ui/GlassPanel";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent to-brand-secondaryAccent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-brand-secondary">
              <img
                src="https://images.unsplash.com/photo-1507003211169-b8b1ca168ca6?q=80&w=800&auto=format&fit=crop"
                alt={SITE_DATA.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white tracking-tight">About Me</h2>
            <p className="text-lg text-brand-textSecondary leading-relaxed">
              {SITE_DATA.about}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SITE_DATA.stats.map((stat, i) => (
                <GlassPanel key={i} className="p-4 text-center space-y-1">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-brand-textSecondary uppercase tracking-wider">{stat.label}</div>
                </GlassPanel>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
