"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/site-data";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/Button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Featured Work</h2>
          <p className="text-brand-textSecondary">A selection of projects that showcase my technical capabilities.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_DATA.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <GlassPanel className="p-3 h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:border-brand-accent/30">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="px-3 pb-3 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-textSecondary line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-brand-textSecondary">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex items-center gap-2"
                      href={project.link}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2"
                      href={project.github}
                    >
                      <Github size={14} /> Code
                    </Button>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
