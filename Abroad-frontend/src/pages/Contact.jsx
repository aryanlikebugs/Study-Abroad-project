import React from "react";
import { Mail, Phone, MapPin, Users } from "lucide-react";

export default function Contacts() {
  const teamMembers = [
    { name: "Aryan Gupta", roll: "CSE22052626" },
    { name: "Arya Tiwari", roll: "CSE20002" },
    { name: "Ayush Raj", roll: "CSE20003" },
    { name: "Sanya Kapoor", roll: "CSE20004" },
    { name: "Ishaan Raj", roll: "CSE20005" },
    { name: "Priya Singh", roll: "CSE20006" },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12 relative">
      {/* Background with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1524646342015-92b96329a49e?auto=format&fit=crop&q=80')`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl w-full bg-black/50 backdrop-blur-md p-8 rounded-xl shadow-lg text-white">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Contact Us
        </h1>

        {/* Contact Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
            <Mail className="w-6 h-6 text-purple-400" />
            <p className="text-lg">contact@xyzuniversity.com</p>
          </div>

          <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
            <Phone className="w-6 h-6 text-purple-400" />
            <p className="text-lg">+91 98765 43210</p>
          </div>

          <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
            <MapPin className="w-6 h-6 text-purple-400" />
            <p className="text-lg">XYZ University, Sector 10, New Delhi</p>
          </div>
        </div>

        {/* Developed By Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-center mb-4">
            Developed by
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-3 bg-purple-500/20 rounded-lg text-center hover:bg-purple-500/40 transition-all"
              >
                <Users className="w-6 h-6 mx-auto text-purple-300 mb-2" />
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-gray-400">{member.roll}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}




