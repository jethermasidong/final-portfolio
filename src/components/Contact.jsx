import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import social icons

const Contact = () => {
  return (
    <section className="min-h-screen w-full py-16 bg-[#385143] text-[#f0ead2] font-serif flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 uppercase text-center text-inherit">
          Contact Me
        </h2>
        <p className="text-xl text-inherit mb-8 text-center">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>
        <div className="md:flex md:justify-center max-w-2xl mx-auto">
          {/* Contact Form (Left Side) */}
          <div className="md:w-1/2 bg-[#a8c3a5] rounded-lg shadow-md p-10 mb-8 md:mb-0">
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-[#385143] text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-[#385143] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#385143] text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-[#385143] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#385143] text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-[#385143] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#385143] hover:bg-[#2c4036] text-[#f0ead2] font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Gap in the middle */}
          <div className="md:w-8" /> {/* Adjust the width (e.g., md:w-12 for a larger gap) */}

          {/* Social Media Links (Right Side) */}
          <div className="md:w-1/2 bg-[#a8c3a5] rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4 text-[#385143]">Socials</h3>
            <div className="flex flex-col space-y-3"> {/* Reduced space between items */}
              <div className="flex items-center justify-start text-[#385143]">
                <FaFacebook className="text-3xl mr-4" />
                <span className="text-base">Jether Masidong</span> {/* Changed text-lg to text-base */}
              </div>
              <div className="flex items-center justify-start text-[#385143]">
                <FaInstagram className="text-3xl mr-4" />
                <span className="text-base">Jetherr</span> {/* Changed text-lg to text-base */}
              </div>
              <div className="flex items-center justify-start text-[#385143]">
                <FaEnvelope className="text-3xl mr-4" />
                <span className="text-base">jethermasidong05@gmail.com</span> {/* Changed text-lg to text-base */}
              </div>
              <div className="flex items-center justify-start text-[#385143]">
                <FaTwitter className="text-3xl mr-4" />
                <span className="text-base">Jetheerr</span> {/* Changed text-lg to text-base */}
              </div>
              <div className="flex items-center justify-start text-[#385143]">
                <FaGithub className="text-3xl mr-4" />
                <span className="text-base">jethermasidong.github.com</span> {/* Changed text-lg to text-base */}
              </div>
              <div className="flex items-center justify-start text-[#385143]">
                <FaLinkedin className="text-3xl mr-4" />
                <span className="text-base">Jether Masidong</span> {/* Changed text-lg to text-base */}
              </div>
              {/* Add more social media links as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;