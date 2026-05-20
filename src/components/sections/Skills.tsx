"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/site-data";
import { GlassPanel } from "@/components/ui/GlassPanel";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Technical Arsenal</h2>
          <p className="text-brand-textSecondary">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SITE_DATA.skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <GlassPanel className="p-6 h-32 flex flex-col items-center justify-center group transition-all duration-300 hover:border-brand-accent/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <span className="text-white font-medium group-hover:text-brand-accent transition-colors">
                  {skill}
                </span>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
