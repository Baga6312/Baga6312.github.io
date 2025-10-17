"use client";
import { useRef, useEffect, useState } from "react";
import { Home, Info, Briefcase, Code, Mail, Award, FolderGit2 } from "lucide-react";
import Hello from "./Hello";
import About from "./About";
import Certifications from "./Certifications";
import Technologies from "./Technologies";
import Experiences from "./Experiences";
import Contactme from "./Contactme";
import Projects from "./Projects";

export default function Sidebar() {
  const helloRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [activeSection, setActiveSection] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // IMPORTANT: This order must match the order of sections in the DOM below
  const navItems = [
    { icon: Home, label: "Home", ref: helloRef },
    { icon: Info, label: "About", ref: aboutRef },
    { icon: Code, label: "Technologies", ref: technologiesRef },
    { icon: Briefcase, label: "Experience", ref: experiencesRef },
    { icon: FolderGit2, label: "Projects", ref: projectsRef },
    { icon: Award, label: "Certifications", ref: certificationsRef },
    { icon: Mail, label: "Contact", ref: contactRef }
  ];

  // Delay sidebar appearance until after Hello animations complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setSidebarVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => item.ref.current).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target as HTMLDivElement);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed left-0 top-1/2 -translate-y-1/2 hidden h-auto w-16 flex-col items-center justify-center space-y-6 bg-gray-800 py-8 md:flex rounded-r-2xl shadow-lg z-40 transition-opacity duration-500 ${
          sidebarVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === index;
          return (
            <button
              key={index}
              onClick={() => scrollToSection(item.ref)}
              className="group relative flex items-center justify-center transition-all"
              title={item.label}
            >
              {isActive && (
                <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-20 blur-md" />
              )}
              <Icon
                className={`h-6 w-6 transition-all duration-300 relative z-10 ${
                  isActive
                    ? "text-blue-400 scale-125"
                    : "text-gray-400 hover:text-white"
                }`}
              />
              <span className="absolute left-16 ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div
        className="snap-y snap-mandatory overflow-y-scroll h-screen scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        <div ref={helloRef} className="snap-start">
          <Hello />
        </div>
        <div ref={aboutRef} className="snap-start">
          <About />
        </div>
        <div ref={technologiesRef} className="snap-start">
          <Technologies />
        </div>
        <div ref={experiencesRef} className="snap-start">
          <Experiences />
        </div>
        <div ref={projectsRef} className="snap-start">
          <Projects />
        </div>
        <div ref={certificationsRef} className="snap-start">
          <Certifications />
        </div>
        <div ref={contactRef} className="snap-start">
          <Contactme />
        </div>
      </div>
    </>
  );
}