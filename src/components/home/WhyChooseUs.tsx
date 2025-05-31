
import React from 'react';
import { Lightbulb, Truck, Settings, Leaf, DollarSign } from 'lucide-react';
const features = [
  {
    text: "Stable Product Quality",
    desc: "The company strictly implements procedures such as screening and auditing of raw material suppliers, and incoming material testing.",
    icon: <Lightbulb className="w-16 h-16 text-[#1689CA] group-hover:text-white transition-all duration-500" />
  },
  {
    text: "Reliable Product Supply",
    desc: "The company has sufficient production capacity and high control over raw material prices, quality, and stable supply, laying the foundation for sustained production.",
    icon: <Truck className="w-16 h-16 text-[#1689CA] group-hover:text-white transition-all duration-500" />
  },
  {
    text: "Customization",
    desc: "We have a strong R&D team that can develop and produce products based on customer needs.",
    icon: <Settings className="w-16 h-16 text-[#1689CA] group-hover:text-white transition-all duration-500" />
  },
  {
    text: "Sustainable Commitment",
    desc: "Adopting environmentally friendly materials and production processes, strictly adhering to laws and regulations.",
    icon: <Leaf className="w-16 h-16 text-[#1689CA] group-hover:text-white transition-all duration-500" />
  },
  {
    text: "Cost",
    desc: "We have our own highly automated and modern production base, which has a significant cost advantage.",
    icon: <DollarSign className="w-16 h-16 text-[#1689CA] group-hover:text-white transition-all duration-500" />
  }
];

export default function WhyChooseUs() {

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Image Section */}
        <div className="lg:w-1/2 relative">
          <div className="h-80 lg:h-full bg-gray-800 relative overflow-hidden">
            {/* Manufacturing machinery background with overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
            <div className="absolute inset-0 opacity-30">
              {/* Simulated machinery/industrial elements */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-20 left-12 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-32 left-6 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-700"></div>
              <div className="absolute bottom-20 left-10 w-4 h-4 bg-green-400 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-32 left-16 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-500"></div>

              {/* Simulated machinery lines */}
              <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-500 opacity-50"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-500 opacity-50"></div>
              <div className="absolute top-3/4 left-0 right-0 h-px bg-gray-500 opacity-50"></div>
            </div>
          </div>
          {/* Blue Section */}
          <div className="lg:w-1/2 h-full absolute top-0 right-0 bg-[#1689CA] text-white p-8 lg:p-12">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                OUR STRENGTH<br />
                ADVANTAGE
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-2">STABLE PRODUCT QUALITY</h3>

                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-2">RELIABLE PRODUCT SUPPLY</h3>

                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-2">CUSTOMIZATION</h3>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-2">SUSTAINABLE COMMITMENT</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Blue Section */}


        {/* Right Content Section */}
        <div className="lg:w-1/2 px-4 mt-6 lg:p-12">
          <div className="mb-6">
            <p className="text-xl text-gray-700 uppercase tracking-wide mb-2">
              PREMIUM QUALITY SINCE 2012
            </p>
            <h1 className="text-3xl leading-relaxed  lg:text-5xl font-bold text-[#1689CA] mb-8">
              Why Choose Hongshun As Your Partner?
            </h1>
          </div>

          <div className="">
            {
              features.map((feature, index) => <div key={index} className="flex group items-start px-4 cursor-pointer py-6 hover:bg-white space-x-4 hover:shadow-lg transition-all duration-500 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 group-hover:bg-[#1689CA] transition-colors duration-300  rounded-lg flex items-center justify-center">
                    {feature?.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature?.text}</h3>
                  <p className="text-sm text-gray-700">
                    {feature?.desc}
                  </p>
                </div>
              </div>)
            }

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button className="bg-[#1689CA] text-white border border-[#1689CA] hover:bg-transparent cursor-pointer hover:text-[#1689CA] px-6 py-2 rounded transition-colors duration-500">
              View More →
            </button>
            <button className="bg-[#1689CA] text-white border border-[#1689CA] hover:bg-transparent cursor-pointer hover:text-[#1689CA] px-6 py-2 rounded transition-colors duration-500">
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
