import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const backgrounds = [
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517504734587-2890819debab?auto=format&fit=crop&q=80",
];

export default function Hero() {
  const navigate = useNavigate();
  const [currentBg, setCurrentBg] = useState(0);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    const searchTimer = setTimeout(() => {
      setSearchVisible(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(searchTimer);
    };
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background Carousel */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 relative">
          <span
            className="absolute inset-0 blur-[50px] bg-gradient-to-r from-blue-500/50 
              via-purple-500/50 to-pink-500/50 animate-pulse"
            aria-hidden="true"
          ></span>
          <span className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
            Study Computer Science & Engineering Abroad
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          Discover world-class CSE programs at top universities worldwide
        </p>

        {/* Search Bar */}
        <div
          className={`transform transition-all duration-500 ease-out ${
            searchVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search universities, programs, or locations..."
              className="w-full md:w-[600px] px-6 py-4 rounded-full bg-black/50 
                backdrop-blur-md text-white placeholder-gray-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 
                hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>

          {/* Buttons Section */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {/* Start Journey Button - Purple to Blue */}
            <button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 
                rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Start Your CSE Journey
            </button>

            {/* Recommend Colleges Button - Pink to Purple */}
            <button
              onClick={() => navigate("/recommend")}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 
                rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Recommend Colleges
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
