import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchCart from "./WatchCart";
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { historyCarts } from "../utils/cartSlice";
import LiveChat from "./LiveChat";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoinfo] = useState(null);

  const id = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    if (id) videoData();
  }, [id, dispatch]);

  const videoData = async () => {
    const GOOGLE_API_KEY = "AIzaSyBGBbCaqdbXOE5gnboh2yukrtIV7tr0HiA";
    const VIDEO_DETAILS_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${id}&key=${GOOGLE_API_KEY}`;
    const res = await fetch(VIDEO_DETAILS_API);
    const data = await res.json();
    setVideoinfo(data.items[0]);
  };
  const data = useSelector((store) => store.cart.cart);
  console.log(data);

  const videoClick = (v) =>{
         dispatch(historyCarts(v))
     }
     
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 mx-8 my-2 mt-2 pt-[64px] flex w-full">
        <div className="">
          <iframe
            className="rounded-lg"
            width="840"
            height="460"
            src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?&autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {videoInfo && (
            <div className="mt-4 ml-2">
              {/* Title */}
              <h1 className="text-lg font-bold">{videoInfo?.snippet?.title}</h1>

              {/* Channel + Buttons */}
              <div className="flex items-center justify-between mt-3">
                {/* Left: Channel Info */}
                <div className="flex items-center gap-3">
                  <img
                    className="h-7 rounded-full cursor-pointer"
                    src="https://yt3.ggpht.com/yti/ANjgQV9ANAI6iC_AT3mVzjoB4HvsHrDT4bmzLuQYBltvegtTeaE=s108-c-k-c0x00ffffff-no-rj"
                    alt="channel"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">
                      {videoInfo?.snippet?.channelTitle}
                    </h3>
                    <p className="text-xs text-gray-500">1.2M subscribers</p>{" "}
                    {/* static, or fetch from API if needed */}
                  </div>
                  <button className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-800">
                    Subscribe
                  </button>
                </div>

                {/* Right: Action Buttons */}
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300">
                    <ThumbsUp size={18} />
                    {Math.floor(videoInfo?.statistics?.likeCount / 1000)}K
                  </button>
                  <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                    <ThumbsDown size={18} />
                  </button>
                  <button className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300">
                    <Share2 size={18} /> Share
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-300">
                    Download
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-full text-lg hover:bg-gray-300">
                    ⋮
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-[390px] ml-6 ">
            <LiveChat/>
            <div className="mt-10 ml-2">
          {data.map((v) => (
            <Link key={v.id} to={"/watch?v="+ v.id} onClick={()=>videoClick(v)}>
                <WatchCart info={v} />
            </Link>
        
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
