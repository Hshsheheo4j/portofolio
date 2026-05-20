"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/site-data";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white tracking-tight">Get In Touch</h2>
            <p className="text-lg text-brand-textSecondary">
              Whether you have a question about my work or a startup idea that needs a technical co-founder, my inbox is always open.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-brand-textSecondary group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:text-brand-accent transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Email</div>
                  <div className="text-white font-medium">{SITE_DATA.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-brand-textSecondary group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:text-brand-accent transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Location</div>
                  <div className="text-white font-medium">{SITE_DATA.location}</div>
                </div>
              </div>
            </div>
          </div>

          <GlassPanel className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-brand-textSecondary pl-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-brand-textSecondary pl-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-brand-textSecondary pl-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={status !== "idle"}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent!"}
              </Button>
            </form>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
