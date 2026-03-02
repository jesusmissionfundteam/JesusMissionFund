"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function MissionaryHero() {
  return (
    <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionFade}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Missionary Support Program
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Focus Fully on <span className="text-gradient">the Call</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We&apos;re Here to Help You Fulfill Help With the Rest.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl mx-auto">
            The call to missions is sacred. It requires faith, obedience, sacrifice,
            and unwavering commitment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
