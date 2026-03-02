"use client";

import { motion } from "framer-motion";
import { Gift, Megaphone, BookOpen, Car, Home, Church, Check } from "lucide-react";

const supports = [
  { icon: Megaphone, text: "Evangelism outreaches" },
  { icon: BookOpen, text: "Discipleship training materials" },
  { icon: Car, text: "Transportation for mission work" },
  { icon: Home, text: "Support for missionary families" },
  { icon: Church, text: "Strategic church planting initiatives" },
];

export default function PartnershipSupports() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
            <Gift className="w-4 h-4 mr-2" />
            Your Giving
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Your Partnership <span className="text-gradient">Supports</span>
          </h2>
          <p className="text-lg text-muted-foreground">Your giving helps provide:</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {supports.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-8 hover:shadow-elevated transition-all duration-300 bg-green-200 border border-muted/50 hover:bg-green-400/30 rounded-2xl  "
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-primary font-semibold text-lg"
        >
          Every seed is directed toward advancing the Gospel.
        </motion.p>
      </div>
    </section>
  );
}
