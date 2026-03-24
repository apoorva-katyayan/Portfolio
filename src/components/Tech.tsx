import { Fragment } from "react";

const techStack = [
  { name: "Python", icon: "python" },
  { name: "Flask", icon: "flask" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Pandas", icon: "pandas" },
  { name: "NumPy", icon: "numpy" },
  { name: "React.js", icon: "react" },
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Java", icon: "java" },
  { name: "C++", icon: "cpp" },
  { name: "C", icon: "c" },
  { name: "Kotlin", icon: "kotlin" },
  { name: "Git", icon: "git" },
  { name: "Github", icon: "github" },
  { name: "MySQL", icon: "mysql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Figma", icon: "figma" },
  { name: "Redux", icon: "redux" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "GSAP", icon: "gsap" },
  { name: "Framer Motion", icon: "framer" },
  { name: "Streamlit", icon: "streamlit" },
  { name: "Tableau", icon: "tableau" },
  { name: "Power BI", icon: "powerbi" },
  { name: "Excel", icon: "excel" },
  { name: "Hugging Face", icon: "huggingface" },
  { name: "LangChain", icon: "langchain" },
  { name: "ChatGPT API", icon: "openai" },
  { name: "Gemini API", icon: "gemini" },
  // Skills without direct skillicons.dev icon:
  { name: "EDA", icon: "https://img.icons8.com/ios-filled/50/data-configuration.png" },
  { name: "Data Wrangling", icon: "https://img.icons8.com/ios-filled/50/data-in-both-directions.png" },
  { name: "Data Visualization", icon: "https://img.icons8.com/ios-filled/50/combo-chart.png" },
  { name: "Machine Learning", icon: "🧠" },
  { name: "Deep Learning", icon: "🧠" },
  { name: "Generative AI", icon: "https://img.icons8.com/ios-filled/50/artificial-intelligence.png" },
  { name: "Prompt Engineering", icon: "📝" },
  { name: "SQL", icon: "mysql" }, // fallback to MySQL icon for SQL
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
];

export const TechSection = () => {
  return (
    <>
      <div className="mt-20 sm:mt-10">
        <h1 className="font-host-grotesk font-semibold text-3xl md:text-5xl text-center">
          My TechStack
        </h1>
        <div className="py-16 lg:py-24 overflow-x-clip">
          <div className="border-t-[1px] py-10 border-b-[1px] border-white/30 -mx-1">
            <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left">
                {[...new Array(2)].fill(0).map((_, index) => (
                  <Fragment key={index}>
                    {techStack.map((tech) => (
                      <div key={tech.name} className="inline-flex bg-gray-900 rounded-full px-4 py-2 items-center gap-4">
                        {tech.icon ? (
                          tech.icon.startsWith('http') ? (
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              width={32}
                              height={32}
                              style={{ background: "#222", borderRadius: 6 }}
                            />
                          ) : tech.icon.length === 1 ? (
                            <span style={{ fontSize: 28 }} role="img" aria-label={tech.name}>{tech.icon}</span>
                          ) : (
                            <img
                              src={`https://skillicons.dev/icons?i=${tech.icon}`}
                              alt={tech.name}
                              width={32}
                              height={32}
                              style={{ background: "#222", borderRadius: 6 }}
                            />
                          )
                        ) : null}
                        <span className="text-gray-300 font-host-grotesk font-medium tracking-widest">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
