"use client";

import { motion } from "framer-motion";
import { Wheat } from "lucide-react";

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const beliefs = [
  "The harvest is plentiful 🌾",
  "Laborers should be strengthened",
  "Kingdom work deserves excellence",
  "Faithful servants should be supported",
];

export default function OurCommitment() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
            <Wheat className="w-4 h-4 mr-2" />
            Our Commitment
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            We Believe
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            When missionaries are properly resourced, the Gospel advances further.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-foreground font-semibold text-lg hover:shadow-elevated transition-all duration-300"
              >
                {belief}
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            When missionaries are properly resourced, they can reach more souls,
            disciple more believers, and expand the impact of the Gospel in their
            communities and nations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
