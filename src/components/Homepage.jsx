import React, { useEffect, useRef } from 'react';
import profileImg from './images/profile1.png'; 
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'; 

const HomePage = () => {
  const loveFrontendRef = useRef(null);
  const loveFrontendText = "LOVE FRONT-END";
  let currentIndex = 0;

  useEffect(() => {
    const typeWriterEffect = () => {
      if (loveFrontendRef.current && currentIndex < loveFrontendText.length) {
        loveFrontendRef.current.textContent = loveFrontendText.substring(0, currentIndex + 1);
        currentIndex++;
        setTimeout(typeWriterEffect, 100); 
      } else if (loveFrontendRef.current) {
      }
    };

    typeWriterEffect();

    return () => {

      clearTimeout(typeWriterEffect);
    };
  }, []);

  return (
    <section className="bg-[#385143] text-[#f0ead2] flex items-center justify-center min-h-screen w-screen overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center h-full p-8">
        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-auto mb-8 lg:mb-0 lg:mr-12 transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden border-2 border-[#a8c3a5]">
            <img
              src={profileImg}
              alt="Jether Masidong"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="text-left">
            <div className="bg-[#a8c3a5] bg-opacity-80 rounded-md py-6 px-32 shadow-md">
              <h1 className="font-serif text-2xl lg:text-3xl font-bold text-[#385143] mb-3 animate-pulse slow-pulse">
                HI, I AM
              </h1>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#385143] mb-5">
                Jether Masidong
              </h2>
              <p ref={loveFrontendRef} className="font-serif text-lg text-[#385143] mb-5">
              </p>
            </div>
            <div className="flex justify-start space-x-6 mt-6">
              <a href="https://www.facebook.com/jetherjet.masidong/" target="_blank" rel="noopener noreferrer" className="text-[#f0ead2] hover:text-[#a8c3a5] transition-transform duration-300 hover:scale-110">
                <FaFacebook size={32} />
              </a>
              <a href="https://wa.me/your-whatsapp" target="_blank" rel="noopener noreferrer" className="text-[#f0ead2] hover:text-[#a8c3a5] transition-transform duration-300 hover:scale-110">
                <FaWhatsapp size={32} />
              </a>
              <a href="https://www.instagram.com/jetheeerr/" target="_blank" rel="noopener noreferrer" className="text-[#f0ead2] hover:text-[#a8c3a5] transition-transform duration-300 hover:scale-110">
                <FaInstagram size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-1/4 left-1/4 bg-[#a8c3a5] rounded-full w-40 h-40 opacity-15 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 bg-[#f0ead2] rounded-full w-32 h-32 opacity-20 blur-lg"></div>
      </div>
    </section>
  );
};

export default HomePage;