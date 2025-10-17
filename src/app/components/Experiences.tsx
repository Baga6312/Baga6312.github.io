import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const Experiences = () => {
  const education = [
    {
      degree: "Software Engineering",
      years: "2025 - 2026",
      institution: "Tek-Up University"
    },
    {
      degree: "Cyber Physical Security",
      years: "2024 - 2025",
      institution: "Higher Institution of Applied Sciences and Technology of Mater"
    },
    {
      degree: "Computer Systems and Networking",
      years: "2021 - 2024",
      institution: "Higher Institution of Applied Sciences and Technology of Mateur"
    },
    {
      degree: "Baccalaureate – Computer Science",
      years: "2017 - 2021",
      institution: "Secondary School"
    }
  ];

  const experiences = [
    {
      role: "Penetration Tester",
      company: "Innothink-IT",
      period: "May - July 2024",
      description: "Tested the security of clients website"
    },
    {
      role: "Final Year Project Internship",
      company: "Innothink-IT",
      period: "February - May 2024",
      description: "Developed a self hosting VPN platform as an open source project based on WireGuard architecture to prevent identity theft using robust web technologies like React, NextJs and MongoDB."
    },
    {
      role: "Freelancer",
      company: "Upwork",
      period: "March 2024",
      description: "Developed an automation script for a Linux system to update a Github repo under a condition on an NGINX server."
    },
    {
      role: "Summer Internship",
      company: "Sanofi",
      period: "July - August 2023",
      bullets: [
        "Set up a new network architecture for the administration departments",
        "Worked as IT support and monitored the network infrastructure"
      ]
    },
    {
      role: "Summer Internship",
      company: "SEA Group",
      period: "June - July 2022",
      description: "Developed a fully automated door to manage employee entry using Electron.js, ReactJS, NestJs, ExpressJS, PostgreSQL, Arduino and RFID card reader."
    }
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center snap-start p-8 pl-[100px]">
      <div className="container max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-blue-500" />
              <h2 className="text-4xl font-bold text-white">Education</h2>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="group border-l-2 border-gray-700 pl-6 hover:border-blue-500 transition-colors">
                  <h3 className="text-blue-400 font-semibold text-lg mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{edu.years}</p>
                  <p className="text-gray-300">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-blue-500" />
              <h2 className="text-4xl font-bold text-white">Experience</h2>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="group border-l-2 border-gray-700 pl-6 hover:border-blue-500 transition-colors">
                  <h3 className="text-blue-400 font-semibold text-lg mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">{exp.period}</p>
                  <p className="text-white font-medium mb-3">{exp.company}</p>
                  
                  {exp.description && (
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                  
                  {exp.bullets && (
                    <ul className="space-y-2 mt-2">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;