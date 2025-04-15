import React from 'react';
import profileImg from "./images/profile1.png";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi'; 

const AboutMe = () => {
  return (
    <section className="bg-[#385143] text-[#f0ead2] flex items-center justify-center h-screen w-screen">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center h-full p-0">

        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-8">

          <div className="w-full lg:w-auto flex justify-center items-center h-full mb-8 lg:mb-0 relative">
            <div className="relative w-48 h-48 lg:w-[30rem] lg:h-[30rem] rounded-2xl overflow-hidden border-2 border-[#f0ead2] shadow-xl">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-[-3rem] transform -translate-y-1/2 flex flex-col space-y-3">
              <a href="https://github.com/jethermasidong" target="_blank" rel="noopener noreferrer" className="text-[#f0ead2] hover:text-[#a8c3a5] transition">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jether-masidong-734181293/" target="_blank" rel="noopener noreferrer" className="text-[#f0ead2] hover:text-[#a8c3a5] transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/jetheeerr/" target="_blank" rel="noopener noreferrer" className="text-[#f0ead2] hover:text-[#a8c3a5] transition">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left flex flex-col justify-center h-full">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-wide uppercase text-inherit mb-2 lg:mb-4">
              ABOUT ME.
            </h2>
            <p className="font-serif text-lg leading-relaxed text-inherit mb-2 lg:mb-4">
              I am Jether Masidong an IT student from University of Cordilleras, Baguio City.
            </p>
            <p className="font-serif text-base leading-relaxed text-inherit mb-4 lg:mb-6">
              I'm driven by the ever-evolving world of IT, where innovation meets problem-solving. My passion lies in harnessing technology's potential to create impactful solutions.
              I'm genuinely enthusiastic about the potential of information technology to make positive changes in various aspects of life and work.
            <p/>

            <p className="font-serif text-base leading-relaxed text-inherit mb-4 lg:mb-6"></p>
                My main goal is to bridge the gap between complex tech and everyday understanding,
                helping people see its value and benefits clearly. Ultimately, I aim to be a successful advocate for the thoughtful and effective adoption of IT across different fields.
            </p>
            <div className="flex justify-start space-x-4">
              <a
                href="/path/to/your/cv.pdf" 
                download="JetherMasidong_CV.pdf"
                className="bg-transparent border border-[#f0ead2] text-[#f0ead2] px-4 py-2 rounded-md hover:bg-[#f0ead2] hover:text-[#385143] transition flex items-center whitespace-nowrap"
              >
                <FiDownload className="w-5 h-5 mr-2" />
                <span className="text-sm">Download CV</span>
              </a>
              <a
                href="https://github.com/jethermasidong" 
                target="_blank"
                className="bg-transparent border border-[#f0ead2] text-[#f0ead2] px-4 py-2 rounded-md hover:bg-[#f0ead2] hover:text-[#385143] transition flex items-center whitespace-nowrap"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                <span className="text-sm">View Github</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;