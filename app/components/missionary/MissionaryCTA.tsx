"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function MissionaryCTA() {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Take the <span className="text-gradient">Next Step?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            If you believe this support will help you fulfill your calling more
            effectively, we invite you to apply today.
          </p>

          <Button
            asChild
            variant="heroOutline"
            size="xl"
            className="group w-full sm:w-auto"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfxKaZfkIjl5EUZ-Jd8AemZjvPMSgmJXQYXBVXMV4Fti3L3cA/viewform?embedded=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-10 py-4 font-bold text-lg rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 group-hover:bg-green-700"
            >
              👉🏾 Help Me Do More for Christ
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
