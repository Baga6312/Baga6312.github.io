"use client";

import { useRef } from "react";
import { Home, Info, Briefcase, Code, Mail } from "lucide-react";
import Hello from "./Hello";
import About from "./About";
import Technologies from "./Technologies";
import Experiences from "./Experiences";
import Contactme from "./Contactme";

export default function Sidebar() {
  const helloRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { icon: Home, label: "Home", ref: helloRef },
    { icon: Info, label: "About", ref: aboutRef },
    { icon: Code, label: "Technologies", ref: technologiesRef },
    { icon: Briefcase, label: "Experience", ref: experiencesRef },
    { icon: Mail, label: "Contact", ref: contactRef },
  ];

  return (
    <>
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 hidden h-auto w-16 flex-col items-center justify-center space-y-6 bg-gray-800 py-8 md:flex rounded-r-2xl shadow-lg z-40">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={() => scrollToSection(item.ref)}
              className="group relative flex items-center justify-center transition-all"
              title={item.label}
            >
              <Icon className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-200" />
              <span className="absolute left-16 ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Page Sections */}
      <div ref={helloRef}>
        <Hello />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={technologiesRef}>
        <Technologies />
      </div>
      <div ref={experiencesRef}>
        <Experiences />
      </div>
      <div ref={contactRef}>
        <Contactme />
      </div>
    </>
  );
}