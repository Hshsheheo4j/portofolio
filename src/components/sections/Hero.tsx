"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/site-data";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-medium border border-brand-accent/20 mb-6">
            Available for New Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tighter mb-6"
        >
          Building Modern <br />
          <span className="bg-gradient-to-r from-brand-accent via-brand-secondaryAccent to-brand-accent bg-clip-text text-transparent animate-gradient-x">
            Digital Experiences
          </span>
          <br /> & AI-Driven Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-brand-textSecondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {SITE_DATA.role}. Passionate about technology, startups, and the future of AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            View Projects
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center gap-6 mt-16"
        >
          <a href={SITE_DATA.socials.github} target="_blank" className="text-brand-textSecondary hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href={SITE_DATA.socials.linkedin} target="_blank" className="text-brand-textSecondary hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={SITE_DATA.socials.email} className="text-brand-textSecondary hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      {/* Visual Element: Abstract AI Core */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-brand-accent/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border-2 border-dashed border-brand-secondaryAccent/30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
