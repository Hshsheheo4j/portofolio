"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/site-data";
import { GlassPanel } from "@/components/ui/GlassPanel";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Journey</h2>
          <p className="text-brand-textSecondary">The path toward mastering the craft and shaping the future.</p>
        </div>

        <div className="relative space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent via-brand-secondaryAccent to-transparent -translate-x-1/2" />

          {SITE_DATA.experience.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 md:w-1/2 px-6 text-center md:text-left md:px-12">
                <GlassPanel className={`p-6 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{exp.title}</h3>
                  <p className="text-sm text-brand-textSecondary font-medium mb-3">{exp.organization}</p>
                  <p className="text-sm text-brand-textSecondary leading-relaxed">
                    {exp.description}
                  </p>
                </GlassPanel>
              </div>

              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-brand-bg border-2 border-brand-accent rounded-full -translate-x-1/2 z-10" />

              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
