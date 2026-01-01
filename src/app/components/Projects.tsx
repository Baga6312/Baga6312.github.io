import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useHoverGradient } from "@/hooks/useHoverGradient";

interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
  commits: number;
  bgImage?: string;
}

const mockProjects: Project[] = [
  {
    name: "Tuniway",
    description: "Application web Spring Boot pour explorer les destinations touristiques et les points d'intérêt en Tunisie, avec navigation, recherche et informations détaillées sur les lieux.",
    url: "https://github.com/Baga6312/projet-springboot-tuniway",
    language: "Java",
    commits: 7,
    bgImage: "/projects/tuniway.png",
  },
  {
    name: "CodeNest",
    description: "Collaborative coding platform",
    url: "https://github.com/Baga6312/CodeNest",
    language: "JavaScript",
    commits: 51,
    bgImage: "/projects/codenest-bg.png",
  },
  {
    name: "dotfiles",
    description: "My Linux dotfiles configuration",
    url: "https://github.com/Baga6312/dotfiles",
    language: "Shell",
    commits: 67,
    bgImage: "/projects/dotfiles-bg.png",
  },
  {
    name: "WifiVisualizer",
    description: "Visualize WiFi networks in real-time",
    url: "https://github.com/Baga6312/WifiVisualizer",
    language: "Python",
    commits: 45,
    bgImage: "/projects/wifivis-bg.png",
  },
  {
    name: "Dark-scarping",
    description: "Scrape data from darkweb",
    url: "https://github.com/Baga6312/Dark-scarping",
    language: "Python",
    commits: 28,
    bgImage: "/projects/darkscraping-bg.png",
  },
  {
    name: "Gmail_Checker",
    description: "Check Gmail with Python automation",
    url: "https://github.com/Baga6312/Gmail_Checker",
    language: "Python",
    commits: 15,
    bgImage: "/projects/gmail-bg.png",
  },
  {
    name: "airthreader",
    description: "Thread management for air protocols",
    url: "https://github.com/Baga6312/airthreader",
    language: "Go",
    commits: 22,
    bgImage: "/projects/airthreader-bg.png",
  },
  {
    name: "revproxy-go",
    description: "Reverse proxy written in Go",
    url: "https://github.com/Baga6312/revproxy-go",
    language: "Go",
    commits: 38,
    bgImage: "/projects/revproxy-bg.png",
  },
  
  {
    name: "c-server",
    description: "High-performance C web server",
    url: "https://github.com/Baga6312/c-server",
    language: "C",
    commits: 32,
    bgImage: "/projects/cserver-bg.png",
  }
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProjects(mockProjects);
    setLoading(false);
  }, []);
  useHoverGradient(containerRef);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
      <section className="min-h-screen  text-white flex flex-col items-center justify-center snap-start p-8 ml-11 relative z-10">
      <div className="w-full">
        <h1 className="text-5xl font-bold mb-4 text-center">My Projects</h1>
        <p className="text-gray-400 text-center mb-12">
          Scroll to explore all my projects
        </p>

        {loading ? (
          <div className="flex items-center justify-center h-96">
            <p className="text-gray-400">Loading projects...</p>
          </div>
        ) : (
          <div ref={containerRef} className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 z-20 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

                 {/* Gradient fade left */}
<div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-background via-transparent to-transparent z-10 pointer-events-none" />
{/* Gradient fade right */}
<div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-background via-transparent to-transparent z-10 pointer-events-none" />
                 {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide"
              style={{
                scrollBehavior: "smooth",
              }}
            >
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>

              <div className="flex gap-6 pb-4 min-w-max px-8">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="group hover-card flex-shrink-0 w-72 h-96 rounded-xl border border-gray-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden flex flex-col relative"
                    style={{
                      backgroundImage: project.bgImage ? `url(${project.bgImage})` : "linear-gradient(135deg, rgb(37, 99, 235), rgb(168, 85, 247))",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Transparent Dark Overlay */}
<div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-50 transition-all" />

{/* Content */}
<div className="hover-card-content p-6 flex-1 flex flex-col relative z-10 justify-between">
                    
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-semibold text-blue-400 group-hover:text-blue-300 transition line-clamp-1">
                          {project.name}
                        </h3>
                        <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition flex-shrink-0 ml-2" />
                      </div>

                      <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                            {project.language}
                          </span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300 flex items-center gap-1">
                            🔗 {project.commits}
                          </span>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition flex-shrink-0" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 z-20 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
