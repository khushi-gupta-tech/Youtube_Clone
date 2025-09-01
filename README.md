# 🎥 My YouTube Clone

A YouTube clone built with **React.js**, **Redux Toolkit**, and **Tailwind CSS**.  
This project demonstrates key frontend concepts like API integration, state management, infinite scroll, dark mode, and live chat simulation.

---

## 🚀 Features

- 📺 **Home Page** – Fetches and displays YouTube videos using API  
- 🔍 **Search Functionality** – Search and filter videos  
- 🎬 **Watch Page** – Video player with related video suggestions  
- 💬 **Live Chat** – Real-time chat simulation with Redux state updates  
- 🌓 **Dark Mode** – Toggle between light/dark themes  
- 📝 **Comments Section** – Nested comments with replies  
- ⚡ **Shimmer UI** – Loading placeholders for better UX  
- 🛒 **Cart Slice Example** – Redux slice demonstration  
- 📌 **History Page** – Tracks watched videos  

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS  
- **State Management**: Redux Store (Slices: `appSlice`, `cartSlice`, `chatSlice`, `darkSlice`, `searchSlice`)  
- **Routing**: React Router DOM  
- **API**: YouTube Data API v3  

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   git clone https://github.com/your-username/my-youtube.git
   cd my-youtube
   
2. Install dependencies
    npm install
   
3. Start development server
    npm start
   
5. Build for production
    npm run build


🔑 API Setup

1. Go to Google Cloud Console.

2. Enable YouTube Data API v3.

3. Generate an API key.

4. Create a .env file in the root folder and add:
    REACT_APP_YOUTUBE_API_KEY=your_api_key_here


🤝 Contributing
Contributions are welcome! Feel free to fork this repo and submit pull requests.


