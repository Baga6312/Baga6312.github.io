"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Blog from "./Blog";
import Writeups from "./writeups";

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState<"home" | "blog" | "writeups">("home");
 
  return (
      <div className="min-h-screen bg-background">
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
     
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-[400px] right-0 bg-transparent z-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-4" style={{ marginLeft: currentPage === "writeups" ? "320px" : "0" }}>
          <div className="flex items-center justify-between">
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <button
                onClick={() => setCurrentPage("home")}
                className={`text-lg font-semibold transition-all duration-300 ${
                  currentPage === "home"
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Home
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setCurrentPage("blog")}
                className={`text-lg font-semibold transition-all duration-300 ${
                  currentPage === "blog"
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Blog
              </button>            
            </div>
          </div>
        </div>
      </nav>
     
      {/* Page Content with Fade Animation */}
      <div className="pt-16 min-h-screen">
        {currentPage === "home" && (
          <div key="home" className="page-fade-in">
            <Sidebar />
          </div>
        )}
        {currentPage === "blog" && (
          <div key="blog" className="page-fade-in">
            <Blog onNavigateToWriteups={() => setCurrentPage("writeups")} />
          </div>
        )}
        {currentPage === "writeups" && (
          <div key="writeups" className="page-fade-in">
            <Writeups />
          </div>
        )}
      </div>
    </div>
  );
}