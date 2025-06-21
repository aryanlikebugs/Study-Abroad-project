
//updated after backend integration
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const studyAbroadImages = [
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG10by1wYWdlfHx8fHx8&auto=format&fit=crop&w=1832&q=80",
];

function Auth() {
  const [activeTab, setActiveTab] = useState("signin");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === studyAbroadImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint = activeTab === "signin" ? "/auth/login" : "/auth/register";

    try {
      const response = await fetch(import.meta.env.VITE_API_URL + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");

      // Store authentication flag
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("token", data.token);

      navigate("/profile"); // Redirect to profile page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 p-12 bg-white shadow-lg">
        <h2 className="text-4xl font-bold text-gray-700 mb-8">
          {activeTab === "signin" ? "Sign In" : "Register"}
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border-b-2 border-blue-500 py-2"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label>
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full border-b-2 border-blue-500 py-2"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            {activeTab === "signin" ? "Sign In" : "Register"}
          </button>
        </form>
        <p className="mt-4 text-gray-500">
          {activeTab === "signin"
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            onClick={() =>
              setActiveTab(activeTab === "signin" ? "register" : "signin")
            }
            className="text-blue-500 underline ml-2"
          >
            {activeTab === "signin" ? "Register" : "Sign In"}
          </button>
        </p>
      </div>

      <div className="w-1/2 relative">
        {studyAbroadImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Auth;
