import DashboardImage from "@/assets/images/DashboardImage.png";
import secureFileImage from "@/assets/images/secureFileImage.png";
import MemojiComputer from "@/assets/images/memoji-computer.png";
import MemojiBoyComputer from "@/assets/images/memoji-boy-computer.png";
import Image from "next/image";
import GrainImage from "@/assets/images/grain.jpg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

// Template projects (non-personal). These replace personal project entries so
// the Projects section shows neutral/sample items. Replace images or links
// later if you want specific template assets.
const templateProjects = [
  {
    company: "EchoRead",
    year: "2023",
    title: "EchoRead — RSS & Article Reader",
    results: [
      { title: "Unified RSS reader with tagging and offline reading support." },
      { title: "Clean, responsive UI with keyboard navigation and dark mode." },
      { title: "Export and import reading lists for portability." },
    ],
    link: "#",
    image: MemojiComputer,
  },
  {
    company: "AirIndex",
    year: "2022",
    title: "AirIndex — Air Quality Dashboard",
    results: [
      { title: "Visualized AQI data across regions with historical trends." },
      { title: "Provided health guidance and automated alerts for sensitive users." },
      { title: "Lightweight, mobile-first implementation for fast access." },
    ],
    link: "#",
    image: DashboardImage,
  },
  {
    company: "TrafficAI",
    year: "2024",
    title: "TrafficAI — Traffic Prediction Demo",
    results: [
      { title: "Demonstrated short-term traffic forecasting using simple ML models." },
      { title: "Interactive visualizations to compare predicted vs real traffic." },
      { title: "Designed with performance and small dataset constraints in mind." },
    ],
    link: "#",
    image: secureFileImage,
  },
  {
    company: "CrimeMap",
    year: "2021",
    title: "CrimeMap — Incident Heatmap",
    results: [
      { title: "Mapped anonymized incident reports and allowed region filters." },
      { title: "Exportable reports for community stakeholders." },
      { title: "Accessible color palette and clear legends for readability." },
    ],
    link: "#",
    image: MemojiBoyComputer,
  },
];

export const Projects = () => {
  return (
    <>
      <section className="pb-16 lg:py-24">
        <div className="container">
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r bg-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              Real-World Results
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
            Featured Projects
          </h2>
          <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
            See how I transformed concepts to engaging digital experiences.
          </p>
          <div className="flex flex-col gap-20 md:mt-20 mt-10">
            {templateProjects.map((project, index) => (
              <div
                key={`${project.title}-${project.year}`}
                style={{
                  top: `calc(64px + ${index * 40}px)`,
                }}
                className="bg-gray-800 rounded-3xl z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none after:outline-white/20 md:pt-12 md:px-10 px-8 pt-8 lg:pt-16 lg:px-20 sticky"
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${GrainImage})`,
                  }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest gap-2 text-[12px] text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>—</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-2 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          {typeof CheckCircleIcon === 'function' ? (
                            <CheckCircleIcon className="size-5 md:size-6" />
                          ) : typeof (CheckCircleIcon && (CheckCircleIcon as any).src) === 'string' ? (
                            <img src={(CheckCircleIcon as any).src} className="size-5 md:size-6" />
                          ) : typeof CheckCircleIcon === 'string' ? (
                            <img src={CheckCircleIcon} className="size-5 md:size-6" />
                          ) : null}
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl inline-flex items-center justify-center gap-2 md:w-auto px-6 font-semibold mt-8">
                        <span>Visit Live Site</span>
                        {typeof ArrowUpRightIcon === 'function' ? (
                          <ArrowUpRightIcon className=" size-5 ml-2" />
                        ) : typeof (ArrowUpRightIcon && (ArrowUpRightIcon as any).src) === 'string' ? (
                          <img src={(ArrowUpRightIcon as any).src} className=" size-5 ml-2" />
                        ) : typeof ArrowUpRightIcon === 'string' ? (
                          <img src={ArrowUpRightIcon} className=" size-5 ml-2" />
                        ) : null}
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 rounded-3xl border-2 border-white/50 top-3 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:w-auto lg:max-w-none lg:absolute"
                      width={700}
                      height={420}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
