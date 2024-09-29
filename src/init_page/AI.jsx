import React from 'react'
import tricky from './static/tricky.gif'
import video from './static/AI.mp4';


function AIIntroduction() {
    return (
        <>
      <div className="bg-background_color flex items-center justify-center">
        {/* Central Container */}
        <div className="font-mono text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3 text-white">
            But There is <span className="text-red-500">More</span>
          </h1>
        </div>
      </div>
      <div className="bg-background_color p-8 sm:p-8 lg:p-16">
      {/* Central Container */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:space-x-10">
        {/* Left Part */}
        <div className="w-full lg:w-2/5 flex flex-col justify-between mb-8 lg:mb-0  my-16">
          {/* Top Section */}
          <div className="font-mono">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3 text-white">
                Unleash the power of AI
            </h1>
            <p className="text-md text-gray-200 mb-6 lg:mb-10 mt-4 lg:mt-6">
                <ul className="list-disc pl-5 space-y-6">
                <li> <span className="text-md sm:text-md mb-3 text-white font-bold">Describe the data:</span> Use natural language to describe the data, and our system will automatically reformat and clean it to meet your requirements.</li>
                <li> <span className="text-md sm:text-md mb-3 text-white font-bold">Request insights:</span> Use AI to generate insights from the data and uncover the meaning behind complex structures.</li>
                <li> <span className="text-md sm:text-md mb-3 text-white font-bold">Automatically Generate Graphs:</span> Describe the representation you need, and our advanced model will create it for you.</li>

                </ul>
            </p>
            </div>

        </div>

        <div className="w-full lg:w-2/5 flex justify-center items-center mb-10 lg:mb-0 lg:pl-10">
        <div className="relative w-full pt-[100%] max-w-[400px] lg:max-w-[600px]">
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
      </>
    );
  }


export default AIIntroduction;
