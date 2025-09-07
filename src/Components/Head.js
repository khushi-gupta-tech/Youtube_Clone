import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { setFilteredVideos } from "../utils/cartSlice";
import DarkMode from "./DarkMode";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search?.cacheResults || {});

  const videos = useSelector((store) => store.cart.cart);
  console.log(videos);

  const dark = useSelector((store) => store.dark.dark);

  useEffect(() => {
    // API call
    // make an api call after every key press
    // but if the difference between 2 API calls is <200ms
    // decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(
      `http://localhost:5000/suggestions?q=${searchQuery}`
    );
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    // update it my cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleClick = (selectedSuggestion) => {
    const query = selectedSuggestion || searchQuery; // ✅ use clicked suggestion OR input
    setSearchQuery(query);

    const filtered = videos.filter((v) => {
      return v.snippet.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    console.log(filtered);
    dispatch(setFilteredVideos(filtered));
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div
        className="grid grid-cols-12 items-center p-2  fixed top-0 left-0 w-full bg-white z-50
          dark:bg-black"
      >
        {/* Left Section */}
        <div className="flex items-center col-span-2">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-8 cursor-pointer dark:hidden "
            src="https://tse2.mm.bing.net/th/id/OIP.K9-apaoP-DKq-8xpziKA_wHaHa?pid=Api&P=0&h=180"
            alt="menu"
          />
          <img
            onClick={() => toggleMenuHandler()}
            className="h-8 cursor-pointer hidden dark:block "
            src="https://media.istockphoto.com/id/1410270332/vector/hamburger-like-menu-dark-mode-glyph-ui-icon.jpg?s=612x612&w=0&k=20&c=vDdaYp1AVzlh-iXytYSQP_66cVRGH6NYDvUEHJZh7FQ="
            alt="menu"
          />
          <img
            className="h-10 ml-4 cursor-pointer dark:hidden"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="logo"
          />
          <img
            className="h-10 ml-4 cursor-pointer hidden dark:block"
            src="https://www.gadgety.co.il/wp-content/themes/main/thumbs/2020/02/youtube-logo_dark-812x541.jpg"
            alt="logo"
          />
        </div>

        {/* Search Section */}
        <div className="col-span-8 ">
          <div className="flex justify-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleClick()}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              placeholder="Search"
              className="w-1/2 border border-gray-400 p-2 h-8 rounded-l-full focus:outline-none"
            />
            <button
              className="border border-gray-400 px-5 py-2 h-8 bg-gray-100 rounded-r-full"
              onClick={() => handleClick()}
            >
              <Search size={18} />
            </button>
          </div>

          {showSuggestions && (
            <div className={dark?'dark':''}>
            <div className="fixed bg-white py-2 px-5 w-[28rem] ml-52 rounded-lg mt-1 shadow-lg border border-gray-100 dark:bg-black ">
              <ul className="">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    onMouseDown={() => handleClick(suggestion)}
                    className="flex py-2 hover:bg-gray-100"
                  >
                    <Search size={18} /> &nbsp;
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
            </div>
          )}
        </div>

        {/* User Section */}
        <div className="col-span-2 flex justify-end ">
          <DarkMode />
          <img
            className="h-7 cursor-pointer rounded-full"
            src="https://yt3.ggpht.com/yti/ANjgQV9ANAI6iC_AT3mVzjoB4HvsHrDT4bmzLuQYBltvegtTeaE=s108-c-k-c0x00ffffff-no-rj"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
