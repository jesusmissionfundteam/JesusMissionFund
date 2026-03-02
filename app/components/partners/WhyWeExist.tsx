"use client";

import { motion } from "framer-motion";
import { Target, Check } from "lucide-react";

const commitments = [
  "Support active soul-winning missionaries",
  "Provide strategic and accountable funding",
  "Maintain integrity and transparency",
  "Prioritize Kingdom impact over visibility",
];

export default function WhyWeExist() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Our Purpose
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Jesus&apos; Mission Fund <span className="text-gradient">Exists</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We exist to ensure that those on the frontline can focus fully on their divine assignment 
            without being distracted by avoidable financial strain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Our commitment is to:</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {commitments.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground">This is not charity.</p>
            <p className="text-xl font-bold text-primary mt-1">This is spiritual strategy.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
