"use client";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";

export default function MissionarySection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image — left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/15 via-transparent to-primary/15 rounded-3xl blur-sm" />
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <Image
                src="/landing-missionary.jpg"
                alt="Missionary discipling believers"
                width={800}
                height={600}
                className="w-full h-full object-cover aspect-4/3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              For Missionaries
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Focus on <span className="text-gradient">the Call</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Are you winning souls and discipling believers for Christ?
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              If God has called you to the field but you need support to stay fully
              focused on the mission, we want to stand with you. Our Missionary Support
              Program exists to empower you to do more for the Kingdom.
            </p>

            <Link href="/missionary" passHref>
              <Button variant="hero" size="xl" className="group">
                Help Me Do More
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}