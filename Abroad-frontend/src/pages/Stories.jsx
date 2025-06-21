import { useEffect, useState } from "react";

export default function Stories() {
  const [heatmapUrl, setHeatmapUrl] = useState(null);

  useEffect(() => {
    const API_URL = "/external-api"; // Using Vite proxy

    fetch(API_URL)
      .then(async (res) => {
        console.log("Status Code:", res.status); // Log status code

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await res.text();
          console.error("Unexpected Response (Not JSON):", text);

          // Extract heatmap URL from HTML response
          const match = text.match(/href="(\/heatmap)"/);
          if (match) {
            const extractedUrl = `https://heatmap-api-pakj.onrender.com${match[1]}`;
            console.log("Extracted Heatmap URL:", extractedUrl);
            setHeatmapUrl(extractedUrl);
          }

          throw new Error("API returned an unexpected format.");
        }

        return res.json();
      })
      .catch((err) => console.error("Fetch Error:", err));
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 bg-white text-black">
        <h1 className="text-3xl font-bold text-center mb-4">Student Stories</h1>
        <p className="text-center mb-6 text-gray-600">
          View the interactive heatmap to find out how many students and/or
          alumni are in or from a particular country
        </p>

        {/* Embedded Heatmap */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-center">Interactive Heatmap</h2>
          {heatmapUrl ? (
            <iframe
              src={heatmapUrl}
              width="100%"
              height="600px"
              style={{ border: "none", marginTop: "16px" }}
              title="Heatmap"
            ></iframe>
          ) : (
            <p className="text-center text-gray-500">Loading heatmap...</p>
          )}
        </div>

        {/* Facts Section */}
        <div className="mt-4 pt-4 text-center bg-white text-black">
          <h2 className="text-lg font-semibold">Facts</h2>
          <div className="mt-2 space-y-2">
            <p>
              🎓 Many top universities offer scholarships for international
              students.
            </p>
            <p>
              🌍 Countries like the USA, UK, and Canada have a high intake of
              foreign students.
            </p>
            <p>🚀 Studying abroad can improve career opportunities globally.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
