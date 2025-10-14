"use client";

import { useState } from "react";
import Image from "next/image";

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("Technologies");

  const tabs = [
    { name: "Technologies" },
    { name: "Software" },
    { name: "Fields" },
    { name: "Languages" }, // Added Languages tab
  ];

  const technologies = [
    { name: "React", svg: "/react.svg" },
    { name: "Angular", svg: "/angular.svg" },
    { name: "Node.js", svg: "/node.svg" },
    { name: "Next.js", svg: "/next.svg" },
    { name: "TailwindCSS", svg: "/tailwindcss.svg" },
    { name: "Truffle", svg: "/truffle.svg" },
    { name: "Pinata", svg: "/pinata.svg" },
    { name: "Solidity", svg: "/solidity.svg" },
    { name: "Bootstrap", svg: "/bootstrap.svg" },
    { name: "Oracle", svg: "/oracle.svg" },
    { name: "MySQL", svg: "/mysql.svg" },
    { name: "Python", svg: "/python.svg" },{name:"git" , svg:"/git.svg"}
  ];

  const software = [
    { name: "VSCode", svg: "/vscode.svg" },
    { name: "GitHub", svg: "/github.svg" },
    { name: "Postman", svg: "/postman.svg" },
    { name: "Ganache", svg: "/ganache.svg" },
    { name: "Truffle", svg: "/truffle.svg" },
    { name: "Pentaho", svg: "/pentaho.svg" },
    { name: "Microsoft Power BI", svg: "/powerbi.svg" },
  ];
  

  const fields = [
    { name: "Web Development" },
    { name: "Machine Learning" },
    { name: "Data Science" },
    { name: "Blockchain Development" },
    { name: "Smart Contracts" },
    { name: "Decentralized Applications (DApps)" },
    { name: "Artificial Intelligence" },
    { name: "Database Management" },
    { name: "Agile Methodologies"
     },
    { name: "Software Engineering"
     },
  ];
  

  const languages = [ // New Languages section
    { name: "Python" , svg:"/python.svg" },
    { name: "R" ,svg: "/Rlogo.svg"},
    { name: "C" ,svg : "c.svg"},
    { name: "HTML",svg : "html.svg" },
    { name: "CSS" ,svg : "css.svg"},
    { name: "JavaScript",svg : "js.svg" },
    { name: "TypeScript",svg:"ts.svg" },
    { name: "Solidity",svg : "solidity.svg" },
    { name: "SQL" ,svg:"sql.svg"},
    { name: "Java",svg:"java.svg" },
    { name: "PHP",svg:"php.svg" },
    { name: "JSP",svg:"jsp.svg" },{name:"dart" , svg:"dart.svg"}
  ];

  return (
    <section className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">My Toolkit</h1>

        {/* Tab Selector */}
        <div className="flex justify-center mb-6 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-2 rounded-full text-lg font-semibold ${
                activeTab === tab.name
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {activeTab === "Technologies" &&
            technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
              >
                <Image
                  src={tech.svg}
                  width={64} // Adjust size as necessary
                  height={64}
                  alt={`${tech.name} logo`}
                  className="mx-auto"
                />
                <h3 className="mt-2 text-lg font-semibold text-center">{tech.name}</h3>
              </div>
            ))}

          {activeTab === "Software" &&
            software.map((tool) => (
              <div
                key={tool.name}
                className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
              >
                <Image
                  src={tool.svg}
                  width={64} // Adjust size as necessary
                  height={64}
                  alt={`${tool.name} logo`}
                  className="mx-auto"
                />
                <h3 className="mt-2 text-lg font-semibold text-center">{tool.name}</h3>
              </div>
            ))}

          {activeTab === "Fields" &&
            fields.map((field) => (
              <div
                key={field.name}
                className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
              >
               
                <h3 className="mt-2 text-lg font-semibold text-center">{field.name}</h3>
              </div>
            ))}

          {activeTab === "Languages" && // Languages tab content
            languages.map((language) => (
              <div
                key={language.name}
                className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
              >
                <Image
                  src={language.svg}
                  width={64} // Adjust size as necessary
                  height={64}
                  alt={`${language.name} logo`}
                  className="mx-auto"
                />
                <h3 className="mt-2 text-lg font-semibold text-center">{language.name}</h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
