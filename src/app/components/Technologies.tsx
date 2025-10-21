"use client";
import { useState , useRef } from "react";
import Image from "next/image";
import { useHoverGradient } from "@/hooks/useHoverGradient";

export default function Toolkit() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const [activeCategory, setActiveCategory] = useState("SoftwareDev");
  const containerRef = useRef<HTMLDivElement>(null);
  useHoverGradient(containerRef);

  const categories = [
    { id: "SoftwareDev", name: "Software Development" },
    { id: "CyberSec", name: "Cybersecurity" },
  ];



const technologies = [
  { name: "React", svg: `${basePath}/tools/software/react.svg` },
  { name: "Node.js", svg: `${basePath}/tools/software/node.svg` },
  { name: "Next.js", svg: `${basePath}/tools/software/next.svg` },
  { name: "TailwindCSS", svg: `${basePath}/tools/software/tailwindcss.svg` },
  { name: "Solidity", svg: `${basePath}/tools/software/solidity.svg` },
  { name: "Bootstrap", svg: `${basePath}/tools/software/bootstrap.svg` },
  { name: "Oracle", svg: `${basePath}/tools/software/oracle.svg` },
  { name: "MySQL", svg: `${basePath}/tools/software/mysql.svg` },
  { name: "Python", svg: `${basePath}/tools/software/python.svg` },
  { name: "Git", svg: `${basePath}/tools/software/git.svg` },
];

const software = [
  { name: "VSCode", svg: `${basePath}/tools/software/vscode.svg` },
  { name: "GitHub", svg: `${basePath}/tools/software/github.svg` },
  { name: "Postman", svg: `${basePath}/tools/software/postman.svg` },
  { name: "Ganache", svg: `${basePath}/tools/software/nvim.png` },
  { name: "Truffle", svg: `${basePath}/tools/software/obsidian.png` },
  { name: "Pentaho", svg: `${basePath}/tools/software/gitlab.png` },
  { name: "Microsoft Power BI", svg: `${basePath}/tools/software/arduino.png` },
];

const languages = [
  { name: "Python", svg: `${basePath}/tools/software/python.svg` },
  { name: "C", svg: `${basePath}/tools/software/c.svg` },
  { name: "HTML", svg: `${basePath}/tools/software/html.svg` },
  { name: "CSS", svg: `${basePath}/tools/software/css.svg` },
  { name: "JavaScript", svg: `${basePath}/tools/software/js.svg` },
  { name: "TypeScript", svg: `${basePath}/tools/software/ts.svg` },
  { name: "Solidity", svg: `${basePath}/tools/software/solidity.svg` },
  { name: "SQL", svg: `${basePath}/tools/software/sql.svg` },
  { name: "Java", svg: `${basePath}/tools/software/java.svg` },
  { name: "PHP", svg: `${basePath}/tools/software/php.svg` },
  { name: "JSP", svg: `${basePath}/tools/software/jsp.svg` }
];

const cyberSecTools = [
  { name: "Burp Suite", svg: `${basePath}/tools/cyber/burpsuite.svg` },
  { name: "Nuclei", svg: `${basePath}/tools/cyber/nuclei.svg` },
  { name: "BloodHound", svg: `${basePath}/tools/cyber/bloodhound.svg` },
  { name: "Metasploit", svg: `${basePath}/tools/cyber/metasploit.png` },
  { name: "Wireshark", svg: `${basePath}/tools/cyber/wireshark.png` },
  { name: "Nmap", svg: `${basePath}/tools/cyber/nmap.png` },
  { name: "Kali Linux", svg: `${basePath}/tools/cyber/kalilinux.png` },
  { name: "Hydra", svg: `${basePath}/tools/cyber/hydra.svg` },
  { name: "SQLMap", svg: `${basePath}/tools/cyber/sqlmap.png` },
  { name: "Hashcat", svg: `${basePath}/tools/cyber/hashcat.png` },
  { name: "John the Ripper", svg: `${basePath}/tools/cyber/john.jpeg` },
];

  interface CarouselRowProps {
    items: { name: string; svg: string }[];
    direction: 'left' | 'right';
  }

  const CarouselRow = ({ items, direction }: CarouselRowProps) => {
    // Duplicate items enough times for seamless looping
    const extendedItems = Array(4).fill(null).flatMap(() => items);
    
    return (
      <div className="relative w-full flex-1 flex items-center overflow-hidden">
        {/* Fade overlay left */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10 pointer-events-none" />
        {/* Fade overlay right */}
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-900 via-transparent to-transparent z-10 pointer-events-none" />

        <style>{`
          @keyframes scrollRight {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-${items.length} * 140px)); }
          }
          @keyframes scrollLeft {
            0% { transform: translateX(calc(-${items.length} * 140px)); }
            100% { transform: translateX(0); }
          }
          .scroll-${direction === 'right' ? 'right' : 'left'} {
            animation: scroll${direction === 'right' ? 'Right' : 'Left'} 40s linear infinite;
          }
        `}</style>
        
        <div className={`flex gap-4 scroll-${direction === 'right' ? 'right' : 'left'}`}>
          {extendedItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex-shrink-0 hover-card w-28 h-28 bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-2xl transition transform hover:scale-110 flex items-center justify-center border border-gray-600 hover:border-blue-500 cursor-pointer"
            >
              <div className="hover-card-content">
              <Image
                src={item.svg}
                width={64}
                height={64}
                alt={`${item.name} logo`}
                className="object-contain"
              />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
      <section className="h-screen  text-white flex flex-col overflow-hidden p-6 relative z-10">
      <div className="flex flex-col h-full gap-3">
        {/* Header */}
        <div className="text-center flex-shrink-0">
          <h1 className="text-3xl font-bold mb-3">My Toolkit</h1>
          <div className="flex justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Carousels - Fill remaining space */}
        <div ref={containerRef} className="flex flex-col flex-1 justify-center gap-2 min-h-0">
          {activeCategory === "SoftwareDev" && (
            <>
              <CarouselRow items={technologies} direction="right" />
              <CarouselRow items={software} direction="left" />
              <CarouselRow items={languages} direction="right" />
            </>
          )}

          {activeCategory === "CyberSec" && (
            <CarouselRow items={cyberSecTools} direction="left" />
          )}
        </div>
      </div>
    </section>
  );
}