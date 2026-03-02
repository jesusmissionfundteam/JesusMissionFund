"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, Heart } from "lucide-react";
import Link from "next/link";
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
    description:
      "Apply for support to sustain and expand your mission work.",
    link: "/missionary-support",
    cta: "Apply Now",
  },
  {
    icon: Globe,
    title: "Support a Missionary",
    description:
      "Browse and directly support missionaries in the field.",
    link: "/support-missionary",
    cta: "Find a Missionary",
  },
];

export default function JoinMissionSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join the <span className="text-primary">Mission</span> Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There are those who go and those who send. Both are necessary.
            Both are honored. Both are rewarded.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"
            >
              {/* Inner Glass Card */}
              <div className="relative h-full bg-background/80 backdrop-blur-xl border border-border rounded-3xl p-8 text-center transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">

                {/* Floating Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-500"
                >
                  <action.icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                </motion.div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {action.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {action.description}
                </p>

                <Link href={action.link}>
                  <Button
                    variant="outline"
                    size="default"
                    className="group/btn border-primary/30 hover:border-primary transition-all duration-300"
                  >
                    {action.cta}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}