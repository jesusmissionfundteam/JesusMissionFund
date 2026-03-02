"use client";

import { motion } from "framer-motion";
import { Heart, Users, Target, Globe, Handshake, Eye } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Breadcrumb } from "../components/BreadCrumb";

const values = [
  {
    icon: Heart,
    title: "Faith",
    description:
      "We are rooted in an unshakable faith in Jesus Christ as our Lord and Savior, and we seek to honor Him in every aspect of our mission and operations.",
  },
  {
    icon: Target,
    title: "Sacrificial Love",
    description:
      "We are committed to demonstrating the selfless love of Christ in all that we do, prioritizing the needs of missionaries and the communities they serve above our own.",
  },
  {
    icon: Handshake,
    title: "Enduring Hope",
    description:
      "We operate with a steadfast hope in the promises of God, trusting that He will fulfil His purposes through the work of this Fund and the missionaries we support.",
  },
  {
    icon: Globe,
    title: "Christ-Centered Leadership",
    description:
      "We are committed to leading with integrity, humility, and accountability, following the example of Jesus Christ.",
  },
];

const team = [
  {
    name: "Richard Densu",
    role: "Founder & Board Chair",
    image: "/mrrichard.jpeg",
  },
  {
    name: "Patience Densu",
    role: "Executive Director",
    image: "/madpat.jpeg",
  },
  {
    name: "Yaw Prempeh",
    role: "Finance Director",
    image: "/mryaw.jpeg",
  },
  {
    name: "Francis Ackon",
    role: "IT Director",
    image: "/mrkon1.jpeg",
  },
  {
    name: "Priscilla Bediako",
    role: "Regulatory & Compliance, Secretary",
    image: "/madpriscilla.jpeg",
  },
  {
    name: "Gyaba Gabriel",
    role: "Logistics Director",
    image: "/mrgabriel.jpeg",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden bg-green-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              About{" "}
              <span className="text-gradient">Jesus&apos; Mission Fund</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over a decade, we&apos;ve been connecting generous hearts with
              dedicated missionaries, creating lasting change in communities
              around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
                <Handshake className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are committed to providing financial, material, and
                logistical support to missionaries, enabling them to carry out
                their work efficiently and sustainably. JMF exists to bridge the
                gap between those who want to give and those who serve on the
                front lines of global missions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Soul-winning is spiritual warfare, and missionaries stand on the
                front lines for the Gospel. They were never meant to fight
                alone. Through Jesus&apos; Mission Fund, your giving goes where
                you cannot, speaking for Christ in lives and nations beyond your
                reach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-elevated"
            >
              <img
                src="/about-mission.jpg"
                alt="Missionaries gathered in prayer"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-muted/30 bg-green-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-elevated order-2 lg:order-1"
            >
              <img
                src="/about-vision.jpg"
                alt="Global vision for the Gospel"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
                <Eye className="w-4 h-4 mr-2" />
                Our Vision
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-6">
                A World Reached for Christ
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We envision a world where every missionary called to the harvest
                is fully equipped, sustainably supported, and never hindered by
                lack. A world where the Gospel reaches every corner through
                empowered laborers and faithful partners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kingdom impact is not limited by geography—it is multiplied
                through obedience. When you give, you send missionaries to
                unreached areas, fund evangelism and discipleship efforts, and
                strengthen families who have answered the call.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and every relationship we
              build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center shadow-elevated border-muted/50 rounded-2xl bg-green-200/30 hover:bg-green-400/30 transition-all duration-300 ease-in-out"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated individuals committed to serving missionaries and donors
              alike.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass-card overflow-hidden hover:shadow-elevated transition-all duration-300 border-none rounded-2xl bg-green-200/30 hover:bg-green-400/30"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden ">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
