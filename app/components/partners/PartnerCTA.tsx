"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function PartnerCTA() {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stand With the <span className="text-gradient">Frontline</span>
          </h2>

          <div className="space-y-2 mb-10">
            <p className="text-lg text-muted-foreground">This is your opportunity to take your place behind the lines.</p>
            <p className="text-foreground font-semibold">The soldiers are in the field.</p>
            <p className="text-foreground font-semibold">The harvest is ready.</p>
            <p className="text-foreground font-semibold">The mission is urgent.</p>
            <p className="text-xl text-primary font-bold mt-4">Will you stand with them?</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="group w-full sm:w-auto">
              Partner With Jesus&apos; Mission Fund
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group w-full sm:w-auto">
              Send the Gospel Further
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-muted-foreground">Together, we will <span className="font-semibold text-foreground">advance the Kingdom.</span></p>
            <p className="text-muted-foreground">Together, we will <span className="font-semibold text-foreground">fund the fight.</span></p>
            <p className="text-muted-foreground">Together, we will <span className="font-semibold text-primary">see souls won for Christ.</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
