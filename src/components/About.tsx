import { TextAnimate } from "@/components/magicui/text-animate";

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
          </div>
        </div>
      </section>
    </>
  );
};
