"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

export default function TwoRoles() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            United Purpose
          </div>

          <h2 className="text-4xl font-bold text-foreground mb-10">
            Two Roles. <span className="text-gradient">One Mission.</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 hover:shadow-elevated transition-all duration-300 bg-green-200 border border-muted/50 hover:bg-green-400/30 rounded-2xl  "
            >
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Those Who Go</h3>
              <p className="text-muted-foreground text-sm">
                Missionaries on the frontline, carrying the Gospel to the unreached.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 hover:shadow-elevated transition-all duration-300 bg-green-200 border border-muted/50 hover:bg-green-400/30 rounded-2xl  "
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Those Who Send</h3>
              <p className="text-muted-foreground text-sm">
                Partners behind the lines, fueling the mission through giving and prayer.
              </p>
            </motion.div>
          </div>

          <p className="text-lg text-foreground font-semibold mb-3">
            Both are necessary. Both are honored. Both are rewarded.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-3">
            Scripture reminds us that those who support the work share in its fruit. 
            When you partner with the mission, you participate in every soul saved, 
            every believer discipled, and every church planted.
          </p>
          <p className="text-primary font-semibold italic">
            Heaven records what the world may never see.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
