import React, { useState } from "react";
import { useTransition, animated } from '@react-spring/web';
import video from './static/video.mp4';

function InfoSection() {
  const [activeTab, setActiveTab] = useState('tab1');
  const tabContent = {
    tab1: "Upload your data in just a few clicks or set up automatic syncing. Track different versions effortlessly. Share data securely with your team and access it from anywhere.",
    tab2: "Automate data cleaning and filtering like a pro. Use no-code tools or go manual. Dig into your data's story and turn insights into real business wins.",
    tab3: "Show off your insights with our super easy, multi-dimensional graph generator. Make your findings pop and share them in a visually stunning way with your team!"
  };

  const transitions = useTransition(activeTab, {
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  });

  return (
    <div className="bg-background_color p-4 sm:p-8 lg:p-12 my-32">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:space-x-10">
        <div className="w-full lg:w-2/5 flex flex-col justify-between mb-8 lg:mb-0">
          <div className="font-mono mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3 text-white">
              See How it <span className="text-red-500">Works</span>
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 font-bold mb-8">
            {['Upload Data', 'Analyze Result', 'Present Findings'].map((text, index) => (
              <button
                key={`tab${index + 1}`}
                className={`text-sm py-3 px-4 sm:px-6 rounded-lg text-center
                  ${activeTab === `tab${index + 1}`
                    ? 'bg-white text-black'
                    : 'border-solid border-2 border-primary-800 text-white'}
                  focus:outline-none transform transition-transform duration-300 hover:-translate-y-1`}
                onClick={() => setActiveTab(`tab${index + 1}`)}
              >
                {text}
              </button>
            ))}
          </div>
          <div className="flex-grow relative h-32"> {/* Fixed height container */}
            {transitions((style, item) => (
              <animated.p style={style} className="text-md text-white mb-6 lg:mb-10 mt-4 lg:mt-6 leading-8 absolute">
                {tabContent[item]}
              </animated.p>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex justify-center items-center mb-10 lg:mb-0 lg:pl-10">
          <div className="relative w-full pt-[56.25%] max-w-[400px] lg:max-w-[600px]">
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

export default InfoSection;
