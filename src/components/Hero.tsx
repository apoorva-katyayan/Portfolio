"use client";

import { getLenis } from "@/lib/lenis";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import type { SectionName } from "@/lib/types";

import Image from "next/image";
import memojiImgae from "../assets/images/memoji-boy-computer.png";
import ArrowDonw from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { TextAnimate } from "@/components/magicui/text-animate";

function RenderIcon(Icon: any, props: any) {
  if (!Icon) return null;
  if (typeof Icon === "function") {
    const Comp = Icon as any;
    return <Comp {...props} />;
  }
  const src = Icon.src ?? Icon;
  return <img src={src} {...props} />;
}

export const HeroSection = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const scrollToContact = () => {
    const target = document.getElementById("contact");

    if (target) {
      const lenis = getLenis();
      lenis.scrollTo(target);

      setActiveSection("Contact" as SectionName);
      setTimeOfLastClick(Date.now());
    }
  };

  return (
    <>
      <div className="py-32 md:pd-[100px] md:py-48 lg:py-40 relative overflow-x-clip">
        <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(black,transparent)]">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src ?? grainImage})` }}
          ></div>
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
          
          {/* React Icon */}
          <HeroOrbit size={800} rotation={-72}>
            <img
              src="https://skillicons.dev/icons?i=react"
              alt="React"
              width={64}
              height={64}
              style={{ background: "#222", borderRadius: 8 }}
            />
          </HeroOrbit>
          
          {/* Node.js Icon */}
          <HeroOrbit size={550} rotation={20}>
            <img
              src="https://skillicons.dev/icons?i=nodejs"
              alt="Node.js"
              width={48}
              height={48}
              style={{ background: "#222", borderRadius: 6 }}
            />
          </HeroOrbit>
          
          {/* JavaScript Icon */}
          <HeroOrbit size={430} rotation={-14}>
            <img
              src="https://skillicons.dev/icons?i=js"
              alt="JavaScript"
              width={40}
              height={40}
              style={{ background: "#222", borderRadius: 6 }}
            />
          </HeroOrbit>
          
          {/* TypeScript Icon */}
          <HeroOrbit size={440} rotation={79}>
            <img
              src="https://skillicons.dev/icons?i=ts"
              alt="TypeScript"
              width={36}
              height={36}
              style={{ background: "#222", borderRadius: 6 }}
            />
          </HeroOrbit>
          
          {/* MongoDB Icon */}
          <HeroOrbit size={530} rotation={178}>
            <img
              src="https://skillicons.dev/icons?i=mongodb"
              alt="MongoDB"
              width={44}
              height={44}
              style={{ background: "#222", borderRadius: 6 }}
            />
          </HeroOrbit>
          
          {/* Next.js Icon */}
          <HeroOrbit size={710} rotation={144}>
            <img
              src="https://skillicons.dev/icons?i=nextjs"
              alt="Next.js"
              width={52}
              height={52}
              style={{ background: "#222", borderRadius: 8 }}
            />
          </HeroOrbit>
        </div>
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="font-host-grotesk text-8xl font-bold mb-5 md:text-7xl sm:text-4xl">
              <TextAnimate
                animation="blurInUp"
                by="character"
                duration={1}
                once
              >
                Hey, I&apos;m Apoorva Katyayan
              </TextAnimate>
            </div>
            <Image
              className="size-[100px]"
              src={memojiImgae}
              alt="Person Peeking from behind laptop"
              priority
              width={100}
              height={100}
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-2 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping"></div>
              </div>
              <div className="text-sm font-semibold">Full-Stack Developer </div>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text5xl text-center mt-8 tracking-wide">
              <TextAnimate animate="blueInUp" once>
                Building scalable web systems and solving problems
              </TextAnimate>
            </h1>
            <div className="mt-4 text-center text-white/60 md:text-lg">
              <TextAnimate
                animation="blurInUp"
                by="character"
                duration={3}
                once
              >
                I build full-stack web applications with scalable architectures. My expertise includes DBMS, backend services (Node.js/Express, PHP), and frontend development with React/Next.js and Tailwind CSS. I focus on clean code, performance optimization, and user-friendly interfaces.
              </TextAnimate>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row justify-center mt-8 gap-4 ">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-full"
            >
              <span className="font-semibold">Contact Me</span>
              {typeof ArrowDonw === 'function' ? (
                <ArrowDonw className="size-4 -rotate-[130deg]" />
              ) : typeof (ArrowDonw && (ArrowDonw as any).src) === 'string' ? (
                <img src={(ArrowDonw as any).src} className="size-4 -rotate-[130deg]" />
              ) : typeof ArrowDonw === 'string' ? (
                <img src={ArrowDonw} className="size-4 -rotate-[130deg]" />
              ) : null}
            </button>
            <a
              href="https://github.com/apoorva-katyayan"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor:pointer inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-full"
            >
              <span className="font-semibold">View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
