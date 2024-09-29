import React from "react";
import video from './static/video.mp4';

function Introduction({emailSignUpRef}) {
  const scrollToEmailSignUp = () => {
    emailSignUpRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-background_color p-8 sm:p-8 lg:p-24">
      {/* Central Container */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:space-x-10">
        {/* Left Part */}
        <div className="w-full lg:w-2/5 flex flex-col justify-between mb-8 lg:mb-0 my-32">
          {/* Top Section */}
          <div className="font-mono">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3 text-white">
              Transform Data Into <span className="text-red-500">Meaningful Stories</span>
            </h1>
            <p className="text-md text-gray-200 mb-6 lg:mb-10 mt-4 lg:mt-6 leading-6">
              Unlock the full potential of AI-powered Data Analysis: Generate insightful, easy-to-maintain, and visually engaging reports with just a few clicks.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 font-bold mb-20">
            <button
              onClick={scrollToEmailSignUp}
              className="bg-white text-sm text-black py-3 px-8 sm:px-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transform transition-transform duration-300 hover:-translate-y-1 text-center"
            >
              Join for Free
            </button>
          </div>
        </div>

        {/* Right Part - Video */}
        <div className="w-full lg:w-[50%] lg:mt-0">
          <div className="relative w-full pt-[56.25%] my-28"> {/* 16:9 aspect ratio */}
            <video
              className="absolute top-0 left-0 w-full h-full object-contain"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
