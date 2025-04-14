import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    institution: 'University of the Cordilleras',
    degree: 'Bachelor of Science in Information Technology',
    date: '2023 - Present',
    details: [
      'Majoring in Web Development.',
      'Relevant coursework includes Data Structures and Algorithms, Network Security, and Database Management.',
    ],
  },
  {
    id: 2,
    institution: 'AMA Computer College Baguio',
    degree: 'Senior High School',
    strand: 'STEM (Science, Technology, Engineering, and Mathematics)',
    date: '2021 - 2023',
    details: [
      'Focused on advanced mathematics, physics, and computer science.',
      'Developed foundational knowledge in scientific research and analysis.',
      'Participated in science clubs and projects.',
    ],
  },
  {
    id: 3,
    institution: 'Baguio City National High School',
    degree: 'Junior High School',
    date: '2016 - 2021',
    details: [
      'Completed core subjects in mathematics, science, English, and social studies.',
      'Participated in extracurricular activities and clubs.',
      'Developed teamwork and communication skills.',
    ],
  },
  {
    id: 4,
    institution: 'Quezon Elementary School',
    degree: 'Primary Education',
    date: '2010 - 2016',
    details: [
      'Completed elementary education curriculum.',
      'Developed basic literacy and numeracy skills.',
      'Participated in school events and activities.',
    ],
  },
];

const Education = () => {
  const [expandedEducationId, setExpandedEducationId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedEducationId(expandedEducationId === id ? null : id);
  };

  return (
    <section className="min-h-screen w-full py-16 bg-[#385143] text-[#f0ead2] font-serif flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 uppercase text-inherit">
          Education
        </h2>
        <p className="text-xl text-inherit mb-16">
          My academic journey and qualifications. Click on a degree to see more details.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto relative">
          {educationData.map((education) => (
            <div
              key={education.id}
              className={`bg-[#a8c3a5] rounded-lg shadow-md p-8 text-[#385143] cursor-pointer transition-all duration-300 ${
                expandedEducationId === education.id ? 'scale-105 z-10' : ''
              }`}
              onClick={() => toggleExpand(education.id)}
              style={{ position: 'relative' }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold">{education.institution}</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(education.id);
                  }}
                  className="focus:outline-none transition-transform duration-300"
                >
                  {expandedEducationId === education.id ? (
                    <FaMinus className="text-lg" />
                  ) : (
                    <FaPlus className="text-lg" />
                  )}
                </button>
              </div>
              <p className="text-inherit mb-2">{education.degree}</p>
              {education.strand && <p className="text-inherit mb-2">{education.strand}</p>}
              <p className="text-sm text-gray-600 mb-2">{education.date}</p>
              {expandedEducationId === education.id && education.details && (
                <div
                  className="absolute top-0 left-0 w-full bg-[#a8c3a5] rounded-lg p-8 z-20 transition-opacity duration-300"
                  style={{ opacity: 1 }}
                >
                  <button
                    onClick={() => toggleExpand(education.id)}
                    className="absolute top-2 right-2 focus:outline-none text-lg"
                  >
                    <FaMinus />
                  </button>
                  <h3 className="text-xl font-semibold mb-3">{education.institution}</h3>
                  <p className="text-inherit mb-2">{education.degree}</p>
                  {education.strand && <p className="text-inherit mb-2">{education.strand}</p>}
                  <p className="text-sm text-gray-600 mb-2">{education.date}</p>
                  <ul className="list-disc list-inside text-inherit mt-4">
                    {education.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
              {expandedEducationId !== education.id && (
                <div
                  className="absolute top-0 left-0 w-full h-full bg-transparent z-10 transition-opacity duration-300"
                  style={{ opacity: 0, pointerEvents: 'none' }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;