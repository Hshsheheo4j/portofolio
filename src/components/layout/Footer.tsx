"use client";

import React from "react";
import { SITE_DATA } from "@/constants/site-data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-brand-bg/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-white font-bold tracking-tighter text-lg">
          {SITE_DATA.name.split(" ")[0]}.<span className="text-brand-accent">AK</span>
        </div>

        <div className="flex gap-6">
          <a href={SITE_DATA.socials.github} target="_blank" className="text-brand-textSecondary hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={SITE_DATA.socials.linkedin} target="_blank" className="text-brand-textSecondary hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={SITE_DATA.socials.email} className="text-brand-textSecondary hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-brand-textSecondary">
          © {new Date().getFullYear()} {SITE_DATA.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
