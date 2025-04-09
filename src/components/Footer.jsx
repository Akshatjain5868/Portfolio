import { github, linkedin } from "../assets";
import React from "react";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <div className="w-full p-6 rounded-3xl flex flex-col items-center gap-6 shadow-lg">
      <p className="text-white text-lg font-medium">Connect with me</p>

      <div className="flex space-x-10">
        {/* GitHub */}
        <div className="group flex flex-col items-center gap-1 transition-transform duration-300">
          <div
            onClick={() => window.open("https://github.com/Akshatjain5868", "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer group-hover:scale-110 transition-transform duration-300"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <span className="text-white text-sm group-hover:scale-110 transition-transform duration-300">
            GitHub
          </span>
        </div>

        {/* LinkedIn */}
        <div className="group flex flex-col items-center gap-1 transition-transform duration-300">
          <div
            onClick={() => window.open("https://linkedin.com/in/Akshat2402", "_blank")}
            className="white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer group-hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-white rounded-full w-6 h-6 flex justify-center items-center">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-4 h-4 object-contain rounded-sm"
              />
            </div>
          </div>
          <span className="text-white text-sm group-hover:scale-110 transition-transform duration-300">
            LinkedIn
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "");
