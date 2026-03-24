import React from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  { name: "GitHub", url: "https://github.com/apoorva-katyayan" },
  { name: "LinkedIn", url: "https://linkedin.com/apoorvakatyayan1" },
];

export const Footer = () => {
  return (
    <>
      <footer className="relative overflow-x-clip">
        <div className="absolute -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
        <div className="container">
          <div className="border-t border-white/15 py-6 gap-8 text-sm md:flex-row md:justify-between flex flex-col items-center">
            <div className="text-white/40">
              &copy; 2026. All rights reserved.
            </div>

            <nav className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:flex md:flex-row items-center md:gap-6">
              {footerLinks.map((link) => (
                <a
                  href={link.url}
                  key={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex relative items-center justify-center border-2 px-3 py-2 group overflow-hidden rounded-full border-white/50 hover:border-gray-100 gap-2"
                >
                  <span className="absolute inset-0 bg-gray-100 translate-x-[-100%] group-hover:translate-x-0 duration-300"></span>
                  <span className="font-semibold relative z-10 group-hover:text-black transition-colors duration-300">
                    {link.name}
                  </span>
                  {typeof ArrowUpRightIcon === 'function' ? (
                    <ArrowUpRightIcon className="size-4 relative z-10 group-hover:text-black transition-colors duration-300" />
                  ) : typeof (ArrowUpRightIcon && (ArrowUpRightIcon as any).src) === 'string' ? (
                    <img src={(ArrowUpRightIcon as any).src} className="size-4 relative z-10 group-hover:text-black transition-colors duration-300" />
                  ) : typeof ArrowUpRightIcon === 'string' ? (
                    <img src={ArrowUpRightIcon} className="size-4 relative z-10 group-hover:text-black transition-colors duration-300" />
                  ) : null}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
