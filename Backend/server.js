// server.js
import express from "express";
import fetch from "node-fetch"; // make sure node-fetch@3 is installed
import cors from "cors";

const app = express();
app.use(cors()); // allow requests from React

const PORT = 5000;
const GOOGLE_API_KEY = "AIzaSyAajHI__HM6JYvDEohGEUgNPPRhZh7DBUk";

// ✅ Get popular videos
app.get("/videos", async (req, res) => {
  try {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching YouTube API:", error);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
});

// ✅ NEW: Get YouTube search suggestions
app.get("/suggestions", async (req, res) => {
  try {
    const query = req.query.q;
    const url = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;

    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    res.status(500).json({ error: "Failed to fetch suggestions" });
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
