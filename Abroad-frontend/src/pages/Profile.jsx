//backend integrated
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Globe,
  Flag,
  BookOpen,
  GraduationCap,
  Edit3,
  Save,
} from "lucide-react";

export default function Profile() {
  const dummyUser = {
    avatar: "",
    name: "User Name",
    email: "user@example.com",
    website: "www.example.com",
    wishlist: {
      country: "N/A",
      fieldOfStudy: "N/A",
      programType: "N/A",
    },
  };

  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(dummyUser);

  const generateAvatar = (name) => {
    return `https://api.dicebear.com/7.x/bottts/svg?seed=${name
      .replace(/\s+/g, "")
      .toLowerCase()}`;
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await fetch("http://localhost:5000/api/auth/get_user", {
          headers: { Authorization: token },
        });

        const data = await res.json();
        if (res.ok) {
          setUser(data);
          setFormData({
            ...data,
            avatar: generateAvatar(data.name),
            wishlist: {
              country: data.wishlist?.country || "N/A",
              fieldOfStudy: data.wishlist?.fieldOfStudy || "N/A",
              programType: data.wishlist?.programType || "N/A",
            },
          });
        } else {
          setUser(dummyUser);
          setFormData({ ...dummyUser, avatar: generateAvatar(dummyUser.name) });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(dummyUser);
        setFormData({ ...dummyUser, avatar: generateAvatar(dummyUser.name) });
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setFormData((prev) => ({
        ...prev,
        name: value,
        avatar: generateAvatar(value),
      }));
    } else if (name === "website") {
      setFormData((prev) => ({
        ...prev,
        website: value,
      }));
    } else {
      // Handle nested wishlist fields
      setFormData((prev) => ({
        ...prev,
        wishlist: {
          ...prev.wishlist,
          [name]: value, // Allow empty values during editing
        },
      }));
    }
  };

  const handleEdit = async () => {
    if (isEditing) {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found in localStorage");
          return;
        }

        // Prepare the data to send to the backend
        const updateData = {
          name: formData.name,
          website: formData.website,
          wishlist: {
            country: formData.wishlist?.country || "N/A", // Set to "N/A" if empty
            fieldOfStudy: formData.wishlist?.fieldOfStudy || "N/A", // Set to "N/A" if empty
            programType: formData.wishlist?.programType || "N/A", // Set to "N/A" if empty
          },
        };

        console.log("Sending update request with data:", updateData); // Log the data being sent

        const res = await fetch(
          "http://localhost:5000/api/auth/update-profile",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
            body: JSON.stringify(updateData),
          }
        );

        console.log("Response status:", res.status); // Log the response status

        if (!res.ok) {
          const errorData = await res.json();
          console.error(
            "Error updating profile:",
            errorData.message || "Unknown error"
          );
          return;
        }

        const data = await res.json();
        console.log("Profile updated successfully:", data); // Log the successful response

        // Update the user state with the new data
        setUser(data.user);
        setFormData({
          ...data.user,
          avatar: generateAvatar(data.user.name),
          wishlist: {
            country: data.user.wishlist?.country || "N/A",
            fieldOfStudy: data.user.wishlist?.fieldOfStudy || "N/A",
            programType: data.user.wishlist?.programType || "N/A",
          },
        });
      } catch (error) {
        console.error("Update failed:", error); // Log any network or other errors
      }
    }

    setIsEditing(!isEditing); // Toggle edit mode
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16">
      <motion.div
        className="bg-gray-900 p-8 rounded-2xl shadow-lg text-center w-[90%] md:w-2/3 lg:w-1/2 xl:w-1/3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {!user ? (
          <p className="text-gray-400 text-lg">Loading profile...</p>
        ) : (
          <>
            <motion.img
              src={formData.avatar}
              alt="User Avatar"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-500"
              whileHover={{ scale: 1.1 }}
            />

            {/* Name Field */}
            <div className="flex items-center justify-center gap-3 text-2xl">
              <User size={28} />
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg w-3/4 text-center text-xl"
                />
              ) : (
                <h2 className="text-2xl font-semibold">{formData.name}</h2>
              )}
            </div>

            <p className="text-gray-400 text-lg mt-1 ">STUDENT</p>

            <div className="flex flex-col items-center mt-6 space-y-3 text-lg">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={24} />
                {isEditing ? (
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    disabled
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full text-lg"
                  />
                ) : (
                  <p>{formData.email}</p>
                )}
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Globe size={24} />
                {isEditing ? (
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full text-lg"
                  />
                ) : (
                  <p>{formData.website}</p>
                )}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl mt-8 w-full text-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                Wishlist
              </h3>

              <div className="flex items-center gap-3 text-gray-300">
                <Flag size={24} />
                <span>Country:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="country"
                    value={formData.wishlist?.country || ""} // Allow empty values during editing
                    onChange={handleChange}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full text-lg"
                  />
                ) : (
                  <p>{formData.wishlist?.country || "N/A"}</p> // Fallback for display
                )}
              </div>

              <div className="flex items-center gap-3 text-gray-300 mt-2">
                <BookOpen size={24} />
                <span>Field of Study:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="fieldOfStudy"
                    value={formData.wishlist?.fieldOfStudy || ""} // Allow empty values during editing
                    onChange={handleChange}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full text-lg"
                  />
                ) : (
                  <p>{formData.wishlist?.fieldOfStudy || "N/A"}</p> // Fallback for display
                )}
              </div>

              <div className="flex items-center gap-3 text-gray-300 mt-2">
                <GraduationCap size={24} />
                <span>Type of Program:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="programType"
                    value={formData.wishlist?.programType || ""} // Allow empty values during editing
                    onChange={handleChange}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full text-lg"
                  />
                ) : (
                  <p>{formData.wishlist?.programType || "N/A"}</p> // Fallback for display
                )}
              </div>
            </div>

            <motion.button
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-xl flex items-center gap-3"
              onClick={handleEdit}
              whileHover={{ scale: 1.05 }}
            >
              {isEditing ? <Save size={24} /> : <Edit3 size={24} />}
              {isEditing ? "Save Changes" : "Edit Profile"}
            </motion.button>
          </>
        )}
      </motion.div>
    </div>
  );
}
