"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Globe } from "lucide-react";
import { Button } from "./ui/button";


const stats = [
  { icon: Globe, value: "All", label: "Countries" },
  { icon: Users, value: "Willing", label: "Volunteers" },
  { icon: Heart, value: "₵40K", label: "Raised" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <div className="relative max-w-7xl mx-auto min-h-screen px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 py-24 lg:py-20">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center text-left z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center self-start px-4 py-2 glass-card text-secondary text-sm font-medium mb-6"
          >
            <Users className="w-4 h-4 mr-2" />
            Empowering Global Mission Support
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl  sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]"
          >
            Jesus&apos; <span className="text-gradient">Mission</span>
            <br />
            Fund <span className="text-gradient"></span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-lg"
          >
            Partner with us to raise funds and support missionaries and volunteers spreading hope and God’s love to communities everywhere. Every moment counts—your donations help those afar.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdjTRAzGdkyGEI7ZhxyajJeNorwfexE2f54JeQAvjsi78NMNQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Make An Impact
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
            </Button>

            <Button variant="heroOutline" size="xl" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdjTRAzGdkyGEI7ZhxyajJeNorwfexE2f54JeQAvjsi78NMNQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Serve With Us
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 relative w-full max-w-xl"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-[3rem] blur-sm" />

            <div
              className="relative overflow-hidden shadow-elevated"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                aspectRatio: "4/5",
              }}
            >
              <Image
                src="/missionaryimage.png"
                alt="Volunteers helping communities"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
