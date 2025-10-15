"use client";
import { useState } from "react";
import Image from "next/image";

export default function Toolkit() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [activeCategory, setActiveCategory] = useState("SoftwareDev");
  const [activeSubTab, setActiveSubTab] = useState("Technologies");

  const categories = [
    { id: "SoftwareDev", name: "Software Development" },
    { id: "CyberSec", name: "Cybersecurity" },
  ];

  const softwareTabs = [
    { name: "Technologies" },
    { name: "Software" },
    { name: "Languages" },
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

  return (
    <section className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Toolkit</h1>

        {/* Main Category Selector */}
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveSubTab("Technologies");
              }}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* SOFTWARE DEVELOPMENT SECTION */}
        {activeCategory === "SoftwareDev" && (
          <div>
            {/* Sub-Tab Selector */}
            <div className="flex justify-center mb-8 space-x-3 flex-wrap gap-3">
              {softwareTabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveSubTab(tab.name)}
                  className={`px-4 py-2 rounded-full text-md font-semibold transition ${
                    activeSubTab === tab.name
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {activeSubTab === "Technologies" &&
                technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-gray-800 p-6 rounded-lg shadow hover:bg-gray-700 hover:shadow-xl transition transform hover:scale-105"
                  >
                    <div className="h-16 flex items-center justify-center">
                      <Image
                        src={tech.svg}
                        width={64}
                        height={64}
                        alt={`${tech.name} logo`}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-center">
                      {tech.name}
                    </h3>
                  </div>
                ))}

              {activeSubTab === "Software" &&
                software.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-gray-800 p-6 rounded-lg shadow hover:bg-gray-700 hover:shadow-xl transition transform hover:scale-105"
                  >
                    <div className="h-16 flex items-center justify-center">
                      <Image
                        src={tool.svg}
                        width={64}
                        height={64}
                        alt={`${tool.name} logo`}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-center">
                      {tool.name}
                    </h3>
                  </div>
                ))}

              {activeSubTab === "Languages" &&
                languages.map((language) => (
                  <div
                    key={language.name}
                    className="bg-gray-800 p-6 rounded-lg shadow hover:bg-gray-700 hover:shadow-xl transition transform hover:scale-105"
                  >
                    <div className="h-16 flex items-center justify-center">
                      <Image
                        src={language.svg}
                        width={64}
                        height={64}
                        alt={`${language.name} logo`}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-center">
                      {language.name}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* CYBERSECURITY SECTION */}
        {activeCategory === "CyberSec" && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-8 text-red-400">
              Security & Penetration Testing Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {cyberSecTools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-gray-800 p-6 rounded-lg shadow hover:bg-red-900 hover:shadow-xl transition transform hover:scale-105 border border-gray-700 hover:border-red-500"
                >
                  <div className="h-16 flex items-center justify-center">
                    <Image
                      src={tool.svg}
                      width={64}
                      height={64}
                      alt={`${tool.name} logo`}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-center">
                    {tool.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}