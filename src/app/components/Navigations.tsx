"use client";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Blog from "./Blog";
import Writeups from "./writeups";
import Pentesting from "./pentestnotes";
import IOT from "./IOT";

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState<"home" | "blog" | "writeups" | "pentesting" | "iot">("home");
  const [showHomeButton, setShowHomeButton] = useState(false);
  
  // Read initial page from URL on mount
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/blog") setCurrentPage("blog");
    else if (path === "/htb-writeups") setCurrentPage("writeups");
    else if (path === "/pentesting-notes") setCurrentPage("pentesting");
    else if (path === "/iot-tool") setCurrentPage("iot");
    else setCurrentPage("home");
  }, []);

  // Show home button with delay on non-home pages
  useEffect(() => {
    if (currentPage !== "home") {
      // Reset visibility first
      setShowHomeButton(false);
      // Then show after delay (matching home page sidebar delay)
      const timer = setTimeout(() => {
        setShowHomeButton(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/blog") setCurrentPage("blog");
      else if (path === "/htb-writeups") setCurrentPage("writeups");
      else if (path === "/pentesting-notes") setCurrentPage("pentesting");
      else if (path === "/iot-tool") setCurrentPage("iot");
      else setCurrentPage("home");
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: typeof currentPage, path: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', path);
  };

  const HomeButton = () => (
    <nav
      className={`fixed left-0 top-1/2 -translate-y-1/2 h-auto w-16 flex-col items-center justify-center space-y-6 bg-secondary py-8 md:flex rounded-r-2xl shadow-lg z-40 transition-opacity duration-500 ${
        showHomeButton ? "opacity-100 ease-in 0.5s " : "opacity-0"
      }`}
    >
      <button
        onClick={() => navigateTo("home", "/")}
        className="group relative flex items-center justify-center transition-all"
        title="Home"
      >
        <svg className="h-6 w-6 text-gray-400 hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="absolute left-16 ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
          Home
        </span>
      </button>
    </nav>
  );

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes fadeInBlur {
          from {
            opacity: 0;
            filter: blur(10px);
          }
          to {
            opacity: 1;
            filter: blur(0px);
          }
        }
       
        .page-fade-in {
          animation: fadeInBlur 0.8s ease-out;
          overflow: hidden;
        }
      `}</style>
     
      {/* Page Content with Fade Animation */}
      <div className="pt-0 min-h-screen">
        {currentPage === "home" && (
          <div key="home" className="page-fade-in">
            <Sidebar 
              onNavigateToBlog={() => navigateTo("blog", "/blog")}
              currentPage="home"
            />
          </div>
        )}
        {currentPage === "blog" && (
          <div key="blog" className="page-fade-in">
            <HomeButton />
            <Blog 
              onNavigateToWriteups={() => navigateTo("writeups", "/htb-writeups")} 
              onNavigateToPentesting={() => navigateTo("pentesting", "/pentesting-notes")}
              onNavigateToIOT={() => navigateTo("iot", "/iot-tool")}
            />
          </div>
        )}
        {currentPage === "writeups" && (
          <div key="writeups" className="page-fade-in">
            <HomeButton />
            <Writeups />
          </div>
        )}
        {currentPage === "pentesting" && (
          <div key="pentesting" className="page-fade-in">
            <HomeButton />
            <Pentesting />
          </div>
        )}
        {currentPage === "iot" && (
          <div key="iot" className="page-fade-in">
            <HomeButton />
            <IOT/>
          </div>
        )}
      </div>
    </div>
  );
}