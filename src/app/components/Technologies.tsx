"use client";
import { useState } from "react";
import Image from "next/image";

export default function Toolkit() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [activeCategory, setActiveCategory] = useState("SoftwareDev");

  const categories = [
    { id: "SoftwareDev", name: "Software Development" },
    { id: "CyberSec", name: "Cybersecurity" },
  ];

  // SOFTWARE DEVELOPMENT DATA
  const technologies = [
    { name: "React", svg: `${basePath}/react.svg` },
    { name: "Angular", svg: `${basePath}/angular.svg` },
    { name: "Node.js", svg: `${basePath}/node.svg` },
    { name: "Next.js", svg: `${basePath}/next.svg` },
    { name: "TailwindCSS", svg: `${basePath}/tailwindcss.svg` },
    { name: "Truffle", svg: `${basePath}/truffle.svg` },
    { name: "Pinata", svg: `${basePath}/pinata.svg` },
    { name: "Solidity", svg: `${basePath}/solidity.svg` },
    { name: "Bootstrap", svg: `${basePath}/bootstrap.svg` },
    { name: "Oracle", svg: `${basePath}/oracle.svg` },
    { name: "MySQL", svg: `${basePath}/mysql.svg` },
    { name: "Python", svg: `${basePath}/python.svg` },
    { name: "Git", svg: `${basePath}/git.svg` },
  ];

  const software = [
    { name: "VSCode", svg: `${basePath}/vscode.svg` },
    { name: "GitHub", svg: `${basePath}/github.svg` },
    { name: "Postman", svg: `${basePath}/postman.svg` },
    { name: "Ganache", svg: `${basePath}/ganache.svg` },
    { name: "Truffle", svg: `${basePath}/truffle.svg` },
    { name: "Pentaho", svg: `${basePath}/pentaho.svg` },
    { name: "Microsoft Power BI", svg: `${basePath}/powerbi.svg` },
  ];

  const languages = [
    { name: "Python", svg: `${basePath}/python.svg` },
    { name: "R", svg: `${basePath}/Rlogo.svg` },
    { name: "C", svg: `${basePath}/c.svg` },
    { name: "HTML", svg: `${basePath}/html.svg` },
    { name: "CSS", svg: `${basePath}/css.svg` },
    { name: "JavaScript", svg: `${basePath}/js.svg` },
    { name: "TypeScript", svg: `${basePath}/ts.svg` },
    { name: "Solidity", svg: `${basePath}/solidity.svg` },
    { name: "SQL", svg: `${basePath}/sql.svg` },
    { name: "Java", svg: `${basePath}/java.svg` },
    { name: "PHP", svg: `${basePath}/php.svg` },
    { name: "JSP", svg: `${basePath}/jsp.svg` },
    { name: "Dart", svg: `${basePath}/dart.svg` },
  ];

  // CYBERSECURITY DATA
  const cyberSecTools = [
    { name: "Burp Suite", svg: `${basePath}/burpsuite.svg` },
    { name: "Nuclei", svg: `${basePath}/nuclei.svg` },
    { name: "BloodHound", svg: `${basePath}/bloodhound.svg` },
    { name: "Metasploit", svg: `${basePath}/metasploit.svg` },
    { name: "Wireshark", svg: `${basePath}/wireshark.svg` },
    { name: "Nmap", svg: `${basePath}/nmap.svg` },
    { name: "Kali Linux", svg: `${basePath}/kalilinux.svg` },
    { name: "Hydra", svg: `${basePath}/hydra.svg` },
    { name: "SQLMap", svg: `${basePath}/sqlmap.svg` },
    { name: "ZAP", svg: `${basePath}/zap.svg` },
    { name: "Hashcat", svg: `${basePath}/hashcat.svg` },
    { name: "John the Ripper", svg: `${basePath}/john.svg` },
  ];

  const CarouselRow = ({ items, direction }) => {
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
              className="flex-shrink-0 w-28 h-28 bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-2xl transition transform hover:scale-110 flex items-center justify-center border border-gray-600 hover:border-blue-500 cursor-pointer"
            >
              <Image
                src={item.svg}
                width={64}
                height={64}
                alt={`${item.name} logo`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="h-screen bg-gray-900 text-white flex flex-col overflow-hidden p-6">
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
        <div className="flex flex-col flex-1 justify-center gap-2 min-h-0">
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