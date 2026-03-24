"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    
    location: "Phagwara, Punjab",
    period: "Since August 2023",
    
  },
  {
    institution: "St. Ignatius High School",
    degree: "Intermediate",
    
    location: "Aurangabad, Bihar",
    period: "April 2022 - March 2023",
    
  },
  {
    institution: "St. Ignatius School",
    degree: "Matriculation",
    
    location: "Aurangabad, Bihar",
    period: "April 2020 - March 2021",
    
  },
];

export const AboutSection = () => {
  return (
    <>
      <section className="py-16">
        <div className="container">
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              {/* Explore More */}
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
            About Me
          </h2>
          <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
            {/* Know more about who I am, my skills, and what inspires me. */}
          </p>
          <div className="max-w-6xl mt-20 sm:mt-10 text-center">
            <div className="leading-10 font-light font-host-grotesk lg:text-2xl sm:text-lg md:text-xl tracking-wide">
              <TextAnimate animation="blurInUp" by="character" duration={3}>
                I'm Apoorva Katyayan — a Full-Stack developer and B.Tech student with a strong foundation in DBMS, operating systems, and object-oriented programming. I build web applications using React/Next.js for the frontend and Node.js/Express or PHP for the backend, and I regularly work with MySQL and MongoDB for data persistence.
                
                I focus on clean, accessible UI, pragmatic backend APIs, and measurable performance improvements. I enjoy solving algorithmic problems and delivering production-ready software that helps people.
              </TextAnimate>

            </div>

            {/* Education (map-like / timeline style) */}
            <div className="max-w-4xl mx-auto mt-12 text-left">
              {/* <h3 className="font-host-grotesk font-semibold text-2xl md:text-3xl text-white mb-4">
                Education
              </h3> */}

              <div className="relative pl-8">
                {/* vertical line */}
                <div className="absolute left-3 top-6 bottom-0 w-[2px] bg-white/6" />

                {educationData.map((edu, idx) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: idx * 0.12 }}
                    viewport={{ once: true }}
                    className="relative mb-8"
                  >
                    {/* animated marker */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.35, delay: idx * 0.12 }}
                      className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-emerald-400 border border-white/20"
                    />

                    <div className="pl-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div>
                          <div className="flex items-baseline gap-3">
                            <h4 className="text-lg md:text-xl font-semibold text-white">
                              {edu.institution}
                            </h4>
                            {/* {edu.metric && (
                              <span className="text-sm md:text-base text-white/60 italic">
                                • {edu.metric}
                              </span>
                            )} */}
                          </div>
                          <p className="text-emerald-300 font-medium mt-1">
                            {edu.degree}
                          </p>
                        </div>

                        <div className="flex-shrink-0 text-right">
                          <div>
                            <span className="inline-block px-3 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-sm font-medium">
                              {edu.period}
                            </span>
                          </div>
                          {edu.location && (
                            <div className="text-white/60 text-sm mt-2">{edu.location}</div>
                          )}
                        </div>
                      </div>

                      {/* <p className="text-white/60 mt-3 leading-relaxed">
                        {edu.details}
                      </p> */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
