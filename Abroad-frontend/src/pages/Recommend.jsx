
import React, { useState, useEffect } from "react";


const backgrounds = [
  "https://images.unsplash.com/photo-1604808621558-b09365436e51?q=80&w=2080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547743052-3a5fec50cadf?q=80&w=2070&auto=format&fit=crop"
];

export default function Recommend() {
  const [currentBg, setCurrentBg] = useState(0);
  const [degree, setDegree] = useState("");
  const [course, setCourse] = useState("");
  const [country, setCountry] = useState("");
  const [budget, setBudget] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = async () => {
    if (!degree || !course || !country || !budget) {
      alert("Please select all fields before searching.");
      return;
    }

    setLoading(true);
    setError("");
    setRecommendation(""); // Reset previous response

    try {
      const apiUrl = `https://arrayarya-college-recommendation.hf.space/recommend?degree=${degree}&course=${course}&country=${country}&budget=${budget}`;
      console.log("Fetching from API:", apiUrl);

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations.");
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data.recommendation) {
        let formattedRecommendation = data.recommendation;

        // **Remove unwanted introductory text**
        const unwantedPatterns = [
          /I am looking for universities offering.*?\./is,
          /Please note that this is just a starting point.*?\./is,
          /Provide a list of top universities.*?\./is,
          /Include details about.*?\./is,
          /My preferred country is.*?\./is,
          /My budget preference is.*?\./is,
          /Please note that I am open to other universities.*?\./is
        ];

        unwantedPatterns.forEach(pattern => {
          formattedRecommendation = formattedRecommendation.replace(pattern, "").trim();
        });

        // **Remove extra newlines & spaces**
        formattedRecommendation = formattedRecommendation
          .replace(/\n\s*\n/g, "\n") // Remove consecutive empty lines
          .replace(/^\s+|\s+$/g, "") // Trim leading & trailing spaces
          .replace(/\n/g, "<br/>") // Convert remaining newlines to HTML
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Convert markdown bold

        setRecommendation(formattedRecommendation);
      } else {
        setRecommendation("<p>No recommendations found.</p>");
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setError("Failed to fetch recommendations. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Image with Smooth Transition */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      ))}

      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream University</h1>

        <div className="bg-black/50 p-6 md:p-8 rounded-xl backdrop-blur-md shadow-lg w-full max-w-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="p-3 rounded-lg bg-gray-800 text-white w-full" value={degree} onChange={(e) => setDegree(e.target.value)}>
              <option value="">Select Degree</option>
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
            </select>

            <select className="p-3 rounded-lg bg-gray-800 text-white w-full" value={course} onChange={(e) => setCourse(e.target.value)}>
              <option value="">Select Course</option>
              <option value="computer-science">Computer Science</option>
              <option value="engineering">Engineering</option>
            </select>

            <select className="p-3 rounded-lg bg-gray-800 text-white w-full" value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="">Select Country</option>
              <option value="germany">Germany</option>
              <option value="usa">USA</option>
              <option value="australia">Australia</option>
            </select>

            <select className="p-3 rounded-lg bg-gray-800 text-white w-full" value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">Select Budget</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {loading ? "Searching..." : "SEARCH"}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Display Recommendations */}
        <div className="mt-6 text-left bg-black/60 p-6 rounded-xl backdrop-blur-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Recommended Universities:</h2>
          {loading ? (
            <p className="text-gray-300">Fetching recommendations...</p>
          ) : (
            <div
              className="text-gray-300"
              dangerouslySetInnerHTML={{ __html: recommendation }} // Properly display formatted text
            />
          )}
        </div>
      </div>
    </div>
  );
}
