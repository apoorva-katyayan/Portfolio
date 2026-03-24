"use client";

import React from "react";
import { motion } from "framer-motion";

const certificationsData = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "JP Morgan Chase & Co",
    date: "November 2025",
    description: "Completed comprehensive job simulation on software engineering practices, system design, and development workflows.",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "April 2025",
    description: "Completed cloud computing fundamentals course covering infrastructure, deployment, and scalability.",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "September 2024",
    description: "Mastered networking fundamentals including protocols, OSI model, and practical network troubleshooting.",
  },
];

const Certifications = () => {
  return (
    <section className="w-full sm:py-2 lg:mt-20 py-10 px-4 sm:px-20">
      <h1 className="font-host-grotesk font-semibold text-3xl md:text-5xl text-center mb-4">
        Certifications
      </h1>
      <p className="text-center text-white/60 md:text-lg mb-12">
        Industry-recognized certifications and training programs I've completed.
      </p>
      
      <div className="max-w-4xl mx-auto grid gap-6 md:gap-8">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-xl p-6 md:p-8 hover:border-emerald-400/50 transition-colors duration-300
              bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm md:text-base text-emerald-400 font-semibold mb-2">
                  {cert.issuer}
                </p>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {cert.description}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="inline-block px-4 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-sm font-medium">
                  {cert.date}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add spacer at bottom */}
      <div className="mt-16" />
    </section>
  );
};

export default Certifications;
