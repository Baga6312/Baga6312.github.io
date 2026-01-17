"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<{
    name: string;
    category: string;
    image: string;
    cert: string;
  } | null>(null);

  const certifications = [
    { name: "Java", category: "programming", image: "/tools/HackerRank.png", cert: "/certs/java-cert.png" },
    { name: "JavaScript", category: "programming", image: "/tools/HackerRank.png", cert: "/certs/js-cert.png" },
    { name: "Python", category: "programming", image: "/tools/HackerRank.png", cert: "/certs/python-cert.png" },
    { name: "Go", category: "programming", image: "/tools/HackerRank.png", cert: "/certs/go-cert.png" },
    { name: "SQL", category: "programming", image: "/tools/HackerRank.png", cert: "/certs/sql-cert.png" },
    { name: "React", category: "programming", image: "/tools/HackerRank.png", cert: "/certs/react-cert.png" },
    { name: "Node", category: "programming", image: "/tools/HackerRank.png", cert: "/certs/node-cert.png" },
    { name: "FCC-LFSD", category: "Web Development", image: "/tools/ffc.png", cert: "/certs/ffc-fullstack.png" },
    { name: "GCSP", category: "CyberSec", image: "/tools/google.png", cert: "/certs/google-cybersec.jpeg" },
    { name: "CAPT", category: "CyberSec", image: "/tools/hackviser.jpg", cert: "/certs/capt_hackviser.jpg" },
    { name: "CPPS", category: "CyberSec", image: "/tools/hackandfix.png", cert: "/certs/cpps.jpg" },
    { name: "eJPT", category: "CyberSec", image: "/certs/ine.png", cert: "/certs/ejpt.png" },
    { name: "eWPT", category: "CyberSec", image: "/certs/ine.png", cert: "/certs/ewpt.png" },
  ];

  const infiniteCerts = [...certifications, ...certifications, ...certifications];

  return (
      <section className="min-h-screen  text-white flex flex-col overflow-hidden p-6 pt-[100px] relative z-10">
      <div className="flex flex-col h-full gap-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">My Certifications</h1>
          <p className="text-gray-400">Professional certifications and achievements</p>
        </div>

        {/* Carousel */}
        <div className="flex-1 flex items-center justify-center overflow-hidden relative mt-auto">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 via-transparent to-transparent z-10 pointer-events-none" />

          <style>{`
            @keyframes infiniteScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-${certifications.length} * 280px)); }
            }
            .carousel-scroll {
              animation: infiniteScroll 50s linear infinite;
            }
            .carousel-scroll:hover {
              animation: infiniteScroll 50s linear infinite;
            }
          `}</style>

          <div className="carousel-scroll flex gap-8 w-max p-8">
            {infiniteCerts.map((cert, idx) => (
              <div
                key={`${cert.name}-${idx}`}
                onClick={() => setSelectedCert(cert)}
                className="flex-shrink-0 w-64 h-64 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl flex flex-col items-center justify-center gap-4 border border-gray-600 hover:border-gray-300 cursor-pointer"
              >
                <div className="w-32 h-32 rounded-lg flex items-center justify-center shadow-lg relative">
                  <Image 
                    src={cert.image} 
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-gray-300 text-center font-medium">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - Large Cert Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 p-4 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded-lg transition z-10"
            >
              <X size={24} className="text-gray-300 hover:text-white" />
            </button>

            <div className="flex flex-col items-center gap-6 mt-4">
              {/* Large Certificate Image */}
              <div className="w-full max-w-3xl relative h-96">
                <Image 
                  src={selectedCert.cert} 
                  alt={selectedCert.name}
                  fill
                  className="rounded-lg shadow-2xl border border-gray-600 object-contain"
                />
              </div>
              
              <h2 className="text-3xl font-bold text-center">{selectedCert.name}</h2>
              <p className="text-gray-300 text-center text-lg">
                Category: <span className="text-gray-200 font-semibold">{selectedCert.category}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
