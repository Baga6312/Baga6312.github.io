"use client";
import { useRef, useEffect, useState } from "react";
import { Home, Info, Briefcase, Code, Mail, Award, FolderGit2, BookOpen } from "lucide-react";
import Hello from "./Hello";
import About from "./About";
import AnimatedBackground from './AnimatedBackground';
import Certifications from "./Certifications";
import Technologies from "./Technologies";
import Experiences from "./Experiences";
import Contactme from "./Contactme";
import Projects from "./Projects";

interface SidebarProps {
  onNavigateToBlog?: () => void;
}

export default function Sidebar({ onNavigateToBlog }: SidebarProps & { currentPage?: string }) {

  const helloRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [activeSection, setActiveSection] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  
  const navItems = [
    { icon: Home, label: "Home", ref: helloRef, hash: "hello" },
    { icon: Info, label: "About", ref: aboutRef, hash: "about" },
    { icon: Code, label: "Technologies", ref: technologiesRef, hash: "technologies" },
    { icon: Briefcase, label: "Experience", ref: experiencesRef, hash: "experience" },
    { icon: FolderGit2, label: "Projects", ref: projectsRef, hash: "projects" },
    { icon: Award, label: "Certifications", ref: certificationsRef, hash: "certifications" },
    { icon: Mail, label: "Contact", ref: contactRef, hash: "contact" }
  ];

  // Delay sidebar appearance until after Hello animations complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setSidebarVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the '#'
      const itemIndex = navItems.findIndex(item => item.hash === hash);
      
      if (itemIndex !== -1) {
        const item = navItems[itemIndex];
        item.ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(itemIndex);
      }
    };

    // Check hash on mount
    if (window.location.hash) {
      handleHashChange();
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => item.ref.current).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target as HTMLDivElement);
            setActiveSection(index);
            // Update URL hash without scrolling
            const hash = navItems[index].hash;
            if (window.location.hash !== `#${hash}`) {
              window.history.replaceState(null, '', `#${hash}`);
            }
          }
        });
      },
      { threshold: 0.5 }
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

  const scrollToSection = (hash: string) => {
    // Update URL hash
    window.location.hash = hash;
  };

  return (
    <>
      <nav
        className={`fixed left-0 top-1/2 -translate-y-1/2 hidden h-auto w-16 flex-col items-center justify-center space-y-6 bg-secondary py-8 md:flex rounded-r-2xl shadow-lg z-40 transition-opacity duration-500 ${
          sidebarVisible ? "opacity-100" : "opacity-0"
        }`}
      >  
      <button
          onClick={onNavigateToBlog}
          className="group relative flex items-center justify-center transition-all"
          title="Blog"
        >
          <BookOpen
            className="h-6 w-6 text-gray-400 hover:text-purple-400 transition-all duration-300"
          />
          <span className="absolute left-16 ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
            Blog
          </span>
        </button>
      

        <div className="w-8 h-px bg-gray-700"></div>




        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === index;
          return (
            <button
              key={index}
              onClick={() => scrollToSection(item.hash)}
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

        {/* Separator */}

        {/* Blog Button */}
      
      </nav>
      
      <AnimatedBackground />
      <div className="fixed inset-0 bg-black/20 pointer-events-none z-0"></div>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen scrollbar-hide" style={{ scrollBehavior: "smooth" }}>
        <div ref={helloRef} id="hello" className="snap-start">
          <Hello />
        </div>
        <div ref={aboutRef} id="about" className="snap-start">
          <About />
        </div>
        <div ref={technologiesRef} id="technologies" className="snap-start">
          <Technologies />
        </div>
        <div ref={experiencesRef} id="experience" className="snap-start">
          <Experiences />
        </div>
        <div ref={projectsRef} id="projects" className="snap-start">
          <Projects />
        </div>
        <div ref={certificationsRef} id="certifications" className="snap-start">
          <Certifications />
        </div>
        <div ref={contactRef} id="contact" className="snap-start">
          <Contactme />
        </div>
      </div>
    </>
  );
}