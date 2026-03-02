"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, BookOpen, Package, Home, Handshake, Check } from "lucide-react";

const givingPoints = [
  { icon: MapPin, text: "Send missionaries to unreached areas" },
  { icon: BookOpen, text: "Fund evangelism and discipleship efforts" },
  { icon: Package, text: "Provide practical needs for those on the field" },
  { icon: Home, text: "Strengthen families who have answered the call" },
  { icon: Handshake, text: "Become a co-laborer in the harvest" },
];

export default function PowerOfPartnership() {
  return (
    <section className="py-24 bg-green-100 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Your Impact
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-6">
              The Power of <span className="text-gradient">Partnership</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4">
                You may never step onto a remote mission field—but your seed will.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4">
                You may never preach in distant lands—but your giving will speak for Christ.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4">
                You may never stand behind a pulpit in another nation—but your partnership will strengthen the one who does.
              </p>
            </div>

            <p className="text-foreground font-semibold text-lg">
              Kingdom impact is not limited to geography. It is multiplied through obedience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">When you give, you:</h3>
              <ul className="space-y-4">
                {givingPoints.map((point, i) => (
                  <motion.li
                    key={point.text}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground pt-2">{point.text}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground">You are not just donating.</p>
                <p className="text-xl font-bold text-primary mt-1">You are deploying.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
