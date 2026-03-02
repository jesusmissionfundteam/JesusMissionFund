"use client";

import { motion } from "framer-motion";
import { Swords } from "lucide-react";

export default function SpiritualWarfare() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-8">
            <Swords className="w-4 h-4 mr-2" />
            The Call
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Soul winning is <span className="text-gradient">spiritual warfare.</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Our missionaries are on the frontlines—entering difficult regions, discipling new believers, 
            planting churches, confronting darkness, and proclaiming the Gospel where Christ is not yet known.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
            {["They risk comfort.", "They risk security.", "Sometimes, they even risk their lives."].map(
              (text, i) => (
                <motion.p
                  key={text}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="text-lg font-semibold text-foreground"
                >
                  {text}
                </motion.p>
              )
            )}
          </div>

          <p className="text-xl font-bold text-primary">
            But they were never meant to fight alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
