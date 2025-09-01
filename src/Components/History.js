import React from "react";
import { useSelector } from "react-redux";
import VideoCart from "./VideoCart";
const History = () => {
  const history = useSelector((store) => store.cart.history);
  console.log(history);

  if(history.length===0){
    return <p className="mt-20 ml-80 font-bold text-3xl">No videos in history yet!</p>
  }
  return (
    <div className="mt-20 ml-80">
      <h1 className="text-3xl font-bold">Watch History</h1>
      <button className="bg-black text-white rounded-lg p-1 mt-2 w-10  ">
        All
      </button>
      <button className="bg-gray-100 rounded-lg p-1 mt-2 w-14 ml-3">
        Videos
      </button>
      <button className="bg-gray-100 rounded-lg p-1 mt-2 w-14 ml-3 ">
        Shorts
      </button>
      <button className="bg-gray-100 rounded-lg p-1 mt-2 w-18 ml-3">
        Podacasts
      </button>
      <button className="bg-gray-100 rounded-lg p-1 mt-2 w-14 ml-3 ">
        Music
      </button>
      <h1 className="mt-4 font-bold text-xl">Today</h1>

      <div className="flex flex-wrap flex-col">
        {history.length>0 && history.map((video) => (
          <VideoCart key={video.id.videoId || video.id} info={video} />
        ))}
      </div>
    </div>
  );
};

export default History;
