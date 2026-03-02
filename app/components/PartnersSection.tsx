"use client";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import Link from "next/link"; // ✅ Use Next.js Link
import Image from "next/image";
import { Button } from "../components/ui/button";



export default function PartnersSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              For Partners
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Stand Behind <span className="text-gradient">the Frontline</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Every war has soldiers in the field and partners behind the lines.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Soul winning is spiritual warfare—and our missionaries are risking comfort,
              safety, even their lives for the Gospel. They were never meant to fight alone.
              Your partnership sends the Gospel where you cannot go.
            </p>

            <Link href="/partner">
              <Button variant="hero" size="xl" className="group">
                Partner With Us
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 rounded-3xl blur-sm" />
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <Image
                src="/landing-partners.jpg"
                alt="Partners standing together in prayer"
                width={800}
                height={600}
                className="w-full h-full object-cover aspect-4/3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
