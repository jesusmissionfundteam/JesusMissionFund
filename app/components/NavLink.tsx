"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";

const actions = [
  {
    icon: Heart,
    title: "Partner With Us",
    description: "Stand behind the frontline with your generous support.",
    link: "/partner",
    cta: "Become a Partner",
  },
  {
    icon: Users,
    title: "Missionary Support",
    description: "Apply for support to sustain and expand your mission work.",
    link: "/missionary-support",
    cta: "Apply Now",
  },
  {
    icon: Globe,
    title: "Support a Missionary",
    description: "Browse and directly support missionaries in the field.",
    link: "/support-missionary",
    cta: "Find a Missionary",
  },
];

export default function JoinMissionSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join the <span className="text-gradient">Mission</span> Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There are those who go and those who send. Both are necessary. Both are honored. Both are rewarded.
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-card p-8 text-center group hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <action.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{action.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{action.description}</p>
              
              {/* Updated Next.js Link */}
              <Link href={action.link} passHref>
                <Button variant="outline" size="default" className="group/btn">
                  {action.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}