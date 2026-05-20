"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-brand-bg">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-accent/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-secondaryAccent/20 blur-[120px]"
      />

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg/50 to-brand-bg" />
    </div>
  );
}
