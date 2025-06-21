//updated after backend data integration
import { useState, useEffect } from "react";
import axios from "axios";
import ProgramCard from "../components/ProgramCard";
import { motion } from "framer-motion";

export default function Programs() {
  const [allPrograms, setAllPrograms] = useState([]); // Full list of programs
  const [visiblePrograms, setVisiblePrograms] = useState([]); // Paginated display
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const programsPerPage = 6; // Number of programs to show initially and load per click

  // Fetch programs from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/universities")
      .then((response) => {
        console.log("API Full Response:", response.data); // Debugging log

        let universityList = response.data.universities;

        // Ensure `universities` is always an array
        if (!Array.isArray(universityList)) {
          universityList = [universityList]; // Convert object to array
        }

        setAllPrograms(universityList);
        setVisiblePrograms(universityList.slice(0, programsPerPage)); // Load initial programs
      })
      .catch((error) => console.error("Error fetching programs:", error));
  }, []);

  // Load more programs when button is clicked
  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const newVisiblePrograms = allPrograms.slice(
        0,
        nextPage * programsPerPage
      );
      setVisiblePrograms(newVisiblePrograms);
      setPage(nextPage);
      setLoading(false);
    }, 500); // Smooth transition delay
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">CSE Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePrograms.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProgramCard {...program} />
          </motion.div>
        ))}
      </div>
      {visiblePrograms.length < allPrograms.length && (
        <div className="text-center mt-6">
          <motion.button
            onClick={loadMore}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
            disabled={loading}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                Loading...
              </motion.span>
            ) : (
              "Load More"
            )}
          </motion.button>
        </div>
      )}
    </div>
  );
}
