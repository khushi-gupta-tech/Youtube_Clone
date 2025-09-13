import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  Clapperboard,
  PlaySquare,
  History,
  ListVideo,
  Video,
  Clock,
  ThumbsUp,
  Download,
  ShoppingBag,
  Music,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  BookOpen,
  Shirt,
  Mic2,
  Settings,
  Flag,
  HelpCircle,
  MessageSquare,
  Flame,
  Users
} from "lucide-react";
import { useEffect } from "react";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dark = useSelector((store) => store.dark.dark);
  const navigate = useNavigate()
  if (!isMenuOpen) return null;

  const liClass =
    "flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800";

    const refresh = () =>{
        navigate("/")
        window.location.reload();
    }
  
  return (
    <div className={dark ? "dark" : ""}>
      <div className="p-5 w-52 fixed top-14 left-0 h-screen overflow-y-auto bg-white z-50 whitespace-nowrap [&::-webkit-scrollbar]:hidden scrollbar-hide hover:[&::-webkit-scrollbar]:block hover:[scrollbar-width:thin] hover:[&::-webkit-scrollbar-thumb]:bg-gray-700 hover:[&::-webkit-scrollbar-thumb]:rounded-md dark:bg-black dark:text-white">
        
        {/* Home Section */}
        <ul>
          <Link to="/">
            <li className={liClass} onClick={refresh}>
              <Home /> Home
            </li>
          </Link>
          <li className={liClass}>
            <Clapperboard /> Shorts
          </li>
          <li className={liClass}>
            <PlaySquare /> Subscriptions
          </li>
        </ul>
        <hr className="my-3" />

        {/* You Section */}
        <h1 className="font-bold pt-2 pb-1">You</h1>
        <ul>
          <Link to="/history">
             <li className={liClass}>
            <History /> History
          </li>
          </Link>
         
          <li className={liClass}>
            <ListVideo /> Playlists
          </li>
          <li className={liClass}>
            <Video /> Your videos
          </li>
          <li className={liClass}>
            <Clock /> Watch later
          </li>
          <li className={liClass}>
            <ThumbsUp /> Liked videos
          </li>
          <li className={liClass}>
            <Download /> Downloads
          </li>
        </ul>
        <hr className="my-3" />

        {/* Explore Section */}
        <h1 className="font-bold pt-2 pb-1">Explore</h1>
        <ul>
          <li className={liClass}>
            <ShoppingBag /> Shopping
          </li>
          <li className={liClass}>
            <Music /> Music
          </li>
          <li className={liClass}>
            <Film /> Movies
          </li>
          <li className={liClass}>
            <Radio /> Live
          </li>
          <li className={liClass}>
            <Gamepad2 /> Gaming
          </li>
          <li className={liClass}>
            <Newspaper /> News
          </li>
          <li className={liClass}>
            <Trophy /> Sports
          </li>
          <li className={liClass}>
            <BookOpen /> Courses
          </li>
          <li className={liClass}>
            <Shirt /> Fashion & Beauty
          </li>
          <li className={liClass}>
            <Mic2 /> Podcasts
          </li>
        </ul>
        <hr className="my-3" />

        {/* Bottom Section */}
        <ul>
          <li className={liClass}>
            <Settings /> Settings
          </li>
          <li className={liClass}>
            <Flag /> Report history
          </li>
          <li className={liClass}>
            <HelpCircle /> Help
          </li>
          <li className={liClass}>
            <MessageSquare /> Send feedback
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
