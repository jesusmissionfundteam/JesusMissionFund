"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const criteria = [
  "Are actively engaged in evangelism and discipleship",
  "Have a clear calling and ministry focus",
  "Demonstrate spiritual maturity and accountability",
  "Show measurable or consistent Kingdom impact",
  "Require support to sustain or expand their mission work",
];

export default function WhoWeSupport() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Eligibility
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Who We Support
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This program is designed for missionaries who meet the following criteria.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {criteria.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-5 flex items-start gap-4 hover:shadow-elevated transition-all duration-300"
            >
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
