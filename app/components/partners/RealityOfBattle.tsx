"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Search, Moon, Users, BookOpen } from "lucide-react";

const realities = [
  { icon: Search, text: "Souls are searching for hope" },
  { icon: Moon, text: "Families are trapped in spiritual darkness" },
  { icon: Users, text: "Communities lack Gospel witness" },
  { icon: BookOpen, text: "New believers need discipleship and covering" },
];

export default function RealityOfBattle() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Reality
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            The Reality of the <span className="text-gradient">Battle</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Great Commission is not a suggestion—it is a command. Across nations and communities:
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {realities.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center hover:shadow-elevated transition-all duration-300 rounded-2xl border border-muted/50 bg-green-200/30 hover:bg-green-400/30"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <p className="text-lg text-muted-foreground">The harvest is ready—but the laborers need support.</p>
          <p className="text-muted-foreground">When missionaries lack resources, <span className="font-semibold text-foreground">the mission slows.</span></p>
          <p className="text-muted-foreground">When missionaries are strengthened, <span className="font-semibold text-primary">the Gospel advances.</span></p>
        </motion.div>
      </div>
    </section>
  );
}
