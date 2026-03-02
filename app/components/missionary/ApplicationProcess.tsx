"use client";
import { motion } from "framer-motion";

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const steps = [
  "Complete the online application form",
  "Provide details of your ministry and vision",
  "Share your current needs and accountability structure",
  "Submit references where required",
];

export default function ApplicationProcess() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Get Started
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Application Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you are a missionary seeking support, follow these steps.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-lg shadow-lg">
                {index + 1}
              </div>
              <div className="glass-card p-5 flex-1 hover:shadow-elevated transition-all duration-300">
                <p className="text-foreground font-medium">{step}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-10 max-w-xl mx-auto">
          Our team will review your application prayerfully and contact you regarding next steps.
        </p>
      </div>
    </section>
  );
}
