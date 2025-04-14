import React from 'react';
import { FaReact, FaJsSquare, FaPython, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // Import icons
import { BiCodeAlt } from 'react-icons/bi'; // Example of another icon

const Skills = () => {
  const skillsData = [
    { name: 'React', percentage: 85, icon: <FaReact />, description: 'Component-based UI development.' },
    { name: 'JavaScript', percentage: 90, icon: <FaJsSquare />, description: 'Dynamic and interactive web applications.' },
    { name: 'Python', percentage: 70, icon: <FaPython />, description: 'Backend logic and scripting.' },
    { name: 'Node.js', percentage: 75, icon: <FaNodeJs />, description: 'Server-side JavaScript runtime.' },
    { name: 'HTML5', percentage: 95, icon: <FaHtml5 />, description: 'Semantic structure of web content.' },
    { name: 'CSS3', percentage: 90, icon: <FaCss3Alt />, description: 'Styling and layout of web pages.' },
    { name: 'Problem Solving', percentage: 92, icon: <BiCodeAlt />, description: 'Analytical and logical thinking.' },
    // Add more skills here
  ];

  return (
    <section className="bg-[#385143] text-[#f0ead2] flex items-center justify-center py-16 w-full h-screen"> {/* Added h-screen */}
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-wide uppercase  mb-8 text-center text-white">
          Skills
        </h2>
        <p className="font-serif text-lg leading-relaxed  mb-12 text-center text-black-300">
          Below are some of the technical skills I've developed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-[#a8c3a5] rounded-lg shadow-md p-6 flex items-center space-x-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-[#f0ead2] relative"
            >
              <div className="bg-[#385143] text-[#f0ead2] p-3 rounded-md text-2xl flex-shrink-0">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold  text-gray-800">{skill.name}</h3>
                <p className="text-gray-600 text-sm">
                  {skill.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 text-xl font-semibold text-[#385143] bg-[#d2e5d0]/80 px-2 py-1 rounded-md shadow-sm border border-[#a8c3a5]">
                {skill.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;