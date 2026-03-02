"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
//import { use } from "react";

export default function LandingHero() {
  return (
    <section className="relative pt-24 pb-0 hero-gradient overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-12 pb-10"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
            Jesus&apos; <span className="text-gradient">Mission Fund</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Fueling the Gospel. Strengthening the Frontline.
          </p>
        </motion.div>

        {/* Video Placeholder */}
       <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-elevated bg-foreground/5 border border-border"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />

      {/* Video */}
      <video
        src="/JesusMissionFund_Intro.mp4"
        autoPlay
        loop
        className="w-full h-full object-cover rounded-3xl"
        controls
      />

      {/* Optional Play Button Overlay if you want to keep click effect */}
      {/* Comment this out if using native controls */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-glow cursor-pointer hover:scale-110 transition-transform duration-300">
          <Play className="w-8 h-8 text-primary-foreground ml-1" />
        </div>
      </div> */}

      {/* Optional caption or overlay text */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <span className="text-sm text-muted-foreground bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full">
          Watch our mission in action
        </span>
      </div>
    </motion.div>
      </div>
    </section>
  );
}
