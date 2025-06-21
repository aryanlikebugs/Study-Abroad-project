// updates after backend integration
import React from "react";
import { Link } from "react-router-dom";
import { Star, Clock, MapPin, BookmarkPlus } from "lucide-react";

// Array of placeholder images
const imageUrls = [
  "https://images.unsplash.com/20/cambridge.JPG?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622397333309-3056849bc70b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1547653872-052e3539decc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531259736756-6caccf485f81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Function to get a random image
const getRandomImage = () =>
  imageUrls[Math.floor(Math.random() * imageUrls.length)];

export default function ProgramCard({
  collegeName,
  location,
  coursesOffered,
  rating = 4.5,
  reviews = 100,
  scholarshipsOffered,
  eligibilityCriteriaForInternationalStudents,
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Program Image */}
      <div className="relative">
        <img
          src={getRandomImage()}
          alt="Program"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 m-2">
          <button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors">
            <BookmarkPlus className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center text-white">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1">{rating}</span>
            <span className="mx-1">•</span>
            <span>{reviews} reviews</span>
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{collegeName}</h3>
        <p className="text-gray-600 mb-2">{coursesOffered}</p>

        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="mr-4">{location}</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>Duration: N/A</span>{" "}
          {/* Placeholder for future duration info */}
        </div>

        {/* Scholarship and Eligibility */}
        <div className="text-gray-700 mb-4">
          <p>🎓 Scholarships: {scholarshipsOffered || "N/A"}</p>
          <p>
            📌 Eligibility:{" "}
            {eligibilityCriteriaForInternationalStudents || "Check details"}
          </p>
        </div>

        {/* Pricing & Button */}
        <div className="flex justify-between items-center">
          {/* <span className="text-lg font-bold text-blue-600">Tuition: N/A</span> Placeholder for price */}
          <Link to="/process">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              View Program
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
