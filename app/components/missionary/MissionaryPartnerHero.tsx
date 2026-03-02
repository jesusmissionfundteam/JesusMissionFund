"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function MissionaryPartnerHero() {
  return (
    <section className="pt-32 pb-24 hero-gradient relative overflow-hidden bg-green-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Jesus&apos; Mission Fund
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Be Part Of Our Missionaries.{" "}
            <span className="text-gradient">Strengthen the Mission.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Serve With Us Today!          </p>
        </motion.div>
      </div>
    </section>
  );
}
