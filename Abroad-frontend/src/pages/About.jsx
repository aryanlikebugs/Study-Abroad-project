import React from "react";
import { BrainCircuit, Code, Globe, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl w-full bg-black/50 backdrop-blur-md p-10 rounded-xl shadow-lg text-white">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          About Us
        </h1>

        {/* About Content */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Connecting aspiring{" "}
          <span className="text-purple-400 font-semibold">
            Computer Science & Engineering
          </span>{" "}
          students with world-class educational opportunities abroad. Our
          platform helps students find the best universities, programs, and
          locations tailored to their aspirations.
        </p>

        {/* Features Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4 p-4 bg-purple-500/20 rounded-lg transition-transform hover:scale-105">
            <Globe className="w-10 h-10 text-purple-400" />
            <div>
              <h3 className="text-xl font-semibold">Global Reach</h3>
              <p className="text-gray-300 text-sm">
                Explore top universities worldwide with AI-powered
                recommendations.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-4 p-4 bg-purple-500/20 rounded-lg transition-transform hover:scale-105">
            <BrainCircuit className="w-10 h-10 text-purple-400" />
            <div>
              <h3 className="text-xl font-semibold">AI-Powered System</h3>
              <p className="text-gray-300 text-sm">
                Our recommendation model uses AI & Heatmaps to find the best
                matches.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center space-x-4 p-4 bg-purple-500/20 rounded-lg transition-transform hover:scale-105">
            <Users className="w-10 h-10 text-purple-400" />
            <div>
              <h3 className="text-xl font-semibold">Student-Centric</h3>
              <p className="text-gray-300 text-sm">
                Built for students, by students, with a focus on accessibility &
                ease of use.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center space-x-4 p-4 bg-purple-500/20 rounded-lg transition-transform hover:scale-105">
            <Code className="w-10 h-10 text-purple-400" />
            <div>
              <h3 className="text-xl font-semibold">
                Built with Cutting-Edge Tech
              </h3>
              <p className="text-gray-300 text-sm">
                Developed using{" "}
                <span className="text-pink-400 font-medium">MERN Stack</span>,{" "}
                <span className="text-pink-400 font-medium">Vite</span>, and a{" "}
                <span className="text-pink-400 font-medium">
                  Python Scraper Spider
                </span>{" "}
                for fetching real-time university data.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-center mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-semibold shadow-md">
              MERN Stack
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-semibold shadow-md">
              Vite.js
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-semibold shadow-md">
              Python Scraper Spider
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-semibold shadow-md">
              AI-Powered Recommendation Model
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
