"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Shield, Star } from "lucide-react";

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const items = [
  { icon: Heart, text: "Financial assistance for ministry activities" },
  { icon: BookOpen, text: "Outreach and evangelism resources" },
  { icon: Users, text: "Discipleship materials" },
  { icon: Shield, text: "Strategic guidance and accountability partnership" },
  { icon: Star, text: "Prayer covering and ministry encouragement" },
];

export default function SupportIncludes() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Depending on need, availability & alignment
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Support May Include
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our goal is not just to fund activity—but to <strong className="text-foreground">strengthen calling</strong>.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto ">
          {items.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 px-7 text-center group hover:shadow-elevated transition-all duration-300 border-2 border-muted/50 rounded-2xl  bg-green-200/30 hover:bg-green-400/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-foreground font-medium leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
