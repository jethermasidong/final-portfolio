import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experienceData = [
  {
    id: 1,
    title: 'Freelance Web Developer',
    company: 'Various Clients',
    date: 'June 2023 - Present',
    description: [
      'Developed and maintained responsive websites using React.js and Tailwind CSS.',
      'Collaborated directly with clients to understand their needs and deliver tailored solutions.',
      'Utilized Git for version control and deployment.',
      'Implemented responsive designs for optimal viewing on all devices.',
    ],
  },
  {
    id: 2,
    title: 'Freelance Graphic Designer',
    company: 'Individual Projects',
    date: 'January 2022 - December 2022',
    description: [
      'Created logos, branding materials, and marketing collateral for small businesses.',
      'Utilized Adobe Photoshop and Illustrator to deliver high-quality visual assets.',
      'Managed client communication and feedback effectively.',
      'Developed design concepts based on client briefs.',
    ],
  },
  {
    id: 3,
    title: 'Freelance Content Writer',
    company: 'Online Platforms',
    date: 'August 2021 - May 2023',
    description: [
      'Wrote blog posts, articles, and website content on various topics.',
      'Ensured content was SEO-friendly and met client specifications.',
      'Conducted research to ensure accuracy and quality of content.',
      'Met deadlines consistently in a fast-paced environment.',
    ],
  },

];

const Experience = () => {
  const [expandedExperienceId, setExpandedExperienceId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedExperienceId(expandedExperienceId === id ? null : id);
  };

  return (
    <section className="min-h-screen w-full py-16 bg-[#385143] text-[#f0ead2] font-serif flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 uppercase text-inherit">
          Experience
        </h2>
        <p className="text-xl text-inherit mb-16">
          My professional journey and roles I've held. Click on an experience to see more details.
        </p>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#a8c3a5] h-full"></div>
          {experienceData.map((experience, index) => (
            <div
              key={experience.id}
              className={`flex w-full ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-8 items-center cursor-pointer`}
              onClick={() => toggleExpand(experience.id)}
            >
              <div className="bg-[#a8c3a5] w-6 h-6 rounded-full z-10 flex items-center justify-center">
                {expandedExperienceId === experience.id ? <FaChevronUp className="text-[#385143] text-sm" /> : <FaChevronDown className="text-[#385143] text-sm" />}
              </div>
              <div
                className={`bg-[#a8c3a5] rounded-lg shadow-md p-6 text-[#385143] w-5/12 transition-all duration-300 overflow-hidden ${
                  index % 2 === 0 ? 'mr-8 text-right' : 'ml-8 text-left'
                } ${expandedExperienceId === experience.id ? 'max-h-96' : 'max-h-24'}`}
              >
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-inherit mb-1">{experience.company}</p>
                <p className="text-sm text-gray-600 mb-2">{experience.date}</p>
                <ul className={`list-disc list-inside text-inherit mt-2 ${expandedExperienceId === experience.id ? 'opacity-100' : 'opacity-0'}`}>
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;