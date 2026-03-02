"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function MissionaryIntro() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFade}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              You Were Never Meant to Carry the Burden Alone
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Many faithful missionaries face practical limitations—financial strain,
              lack of resources, and ministry constraints—that can slow down the very
              work God has called them to do.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe those who have answered the call should not carry the burden
              alone. Our Missionary Support Program exists to empower dedicated
              missionaries to focus exclusively on evangelism and discipleship while
              we come alongside them with practical support.
            </p>
            <p className="text-foreground font-semibold text-lg">
              We are committed to partnering with those who are serious about advancing the Gospel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/15 via-transparent to-primary/15 rounded-3xl blur-sm" />
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <Image
                src="/about-mission.jpg"
                alt="Missionary sharing the Gospel with a group of people"                
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
