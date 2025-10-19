import React from "react";
import { Layers, FileText } from "lucide-react";

const ExperienceCard = ({ title, company, companyLink, offerLink, period, description, icon: Icon }) => {
  const descriptionLines = description
    .split("•")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 max-w-md w-full">
      {/* Glass morphism background */}
      <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

      {/* Animated gradient border */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

      <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
        {/* Floating icon */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
          <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
        </div>

        {/* Card content */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h3>

          {/* Company, offer link, and period */}
          <div className="flex justify-between items-center text-gray-300 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              {companyLink ? (
                <a
                  href={companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-400 hover:text-cyan-300 transition-colors duration-300 underline decoration-blue-400/50 hover:decoration-cyan-400/70"
                >
                  {company}
                </a>
              ) : (
                <span className="font-semibold text-blue-400">{company}</span>
              )}

              {/* Offer letter link beside company */}
              {offerLink && (
                <a
                  href={offerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-cyan-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <FileText className="w-4 h-4" />
                  <span className="underline decoration-cyan-400/50 hover:decoration-blue-400/70">Offer Letter</span>
                </a>
              )}
            </div>

            <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
              {period}
            </span>
          </div>

          {/* Description (line-by-line list) */}
          <ul className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed space-y-2">
            {descriptionLines.map((line, index) => (
              <li key={index} className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-4 right-4 w-20 h-20">
          <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
          <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
        </div>
        <div className="absolute bottom-4 left-4 w-20 h-20">
          <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
          <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Layers,
      title: "Web Development Tech Intern",
      company: "Codaphics",
      companyLink: "https://www.codaphics.com/en-GB/",
      offerLink:
        "https://drive.google.com/file/d/1lDOPryydAyy25-As81xEv7xuWSCNUO-D/view?usp=sharing",
      period: "2025 - Present",
      description: `
        • Assist in developing and maintaining web applications
        • Work with modern web technologies and frameworks
        • Collaborate with the development team on various projects
        • Participate in code reviews and follow best practices
        • Complete assigned tasks within specified timelines
        • Maintain professional communication and punctuality
      `,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b relative overflow-hidden py-20">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#04081A]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Section header */}
      <div className="relative text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
          Professional Journey
        </h2>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
        <p className="mt-6 text-lg md:text-xl text-gray-400 font-medium tracking-wide max-w-2xl mx-auto">
          "Transforming ideas into digital reality, one project at a time"
        </p>
      </div>

      {/* Centered Card */}
      <div className="relative z-10 flex justify-center items-center w-full px-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>

      {/* Glowing background effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default ExperienceSection;
