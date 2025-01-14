import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceArea = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/log");
  };

  return (
    <section className="service-area py-24 bg-gradient-to-t bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
      

        <div className="flex justify-center">
          {/* Card with Enhanced Animation */}
          <div className="relative w-full max-w-4xl group transition-all duration-500 hover:scale-105">
            <div
              className="bg-gradient-to-b from-green-700 to-green-900 rounded-3xl shadow-[0_10px_40px_rgba(0,255,128,0.3)] p-8 border border-white/10 hover:border-green-400 transition-transform duration-700 hover:rotate-[1deg] hover:skew-y-1"
            >
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-800 to-teal-900 opacity-20 rounded-3xl pointer-events-none animate-pulse-slow"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-4xl font-semibold text-white mb-6 animate-fade-in">
                  Thuqba Membership Status
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed animate-fade-in">
                  Ensure your loved ones in Riyadh are registered with KMCC and
                  enjoy exclusive benefits and services designed just for them.
                </p>

                {/* Centered Button */}
                <div className="flex justify-center">
                  <button
                    onClick={handleNavigation}
                    className="px-8 py-4 bg-gradient-to-r from-green-900 to-black text-white font-medium rounded-full shadow-lg hover:from-green-600 hover:to-green-800 hover:shadow-[0_4px_20px_rgba(72,255,72,0.6)] transition-transform duration-300 transform hover:scale-110 flex items-center justify-center gap-3 animate-bounce-slow"
                  >
                    <i className="fas fa-check-circle text-xl"></i>
                    Check Membership Status
                  </button>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 border-4 border-transparent rounded-3xl opacity-30 group-hover:border-green-400 transition-opacity duration-700 animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
