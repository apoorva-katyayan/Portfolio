"use client";

import React from "react";
import { motion } from "framer-motion";

const achievementsData = [
  {
    title: "Solved 450+ Coding Problems",
    description: "Solved 450+ coding problems across CodeChef, GFG & HackerRank to sharpen coding skills.",
    date: "February 2025",
    icon: "💻",
  },
  {
    title: "Top Badges on CodeChef",
    description: "Earned top badges on CodeChef, including a 5-star in C++ for consistent performance.",
    date: "August 2024",
    icon: "⭐",
  },
  {
    title: "Peak CodeForces Rating",
    description: "Reached a peak CodeForces contest rating of 1452, showcasing competitive programming strength.",
    date: "May 2024",
    icon: "🏆",
  },
];

const Achievements = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-host-grotesk font-semibold text-3xl md:text-5xl text-center mb-4">
          My Achievements
        </h1>
        <p className="text-center text-white/60 md:text-lg mb-16">
          Key accomplishments and skills that define my journey as a developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-xl p-6 md:p-8 hover:border-blue-400/50 transition-colors duration-300
                bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {achievement.title}
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                {achievement.description}
              </p>
              <p className="text-blue-400 text-sm font-semibold">
                {achievement.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
