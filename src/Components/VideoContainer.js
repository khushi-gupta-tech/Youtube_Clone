import React, { useEffect, useState } from "react";
import VideoCart, { AdVideoCard } from "./VideoCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { historyCarts, videoCarts } from "../utils/cartSlice";
import Shimmer from "./Shimmer";
import Live from "./Live";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  const filteredVideos = useSelector((store) => store.cart.filtered);
  console.log(filteredVideos);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch("http://localhost:5000/videos");
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
    dispatch(videoCarts(json.items));
  };

  const videosToShow = filteredVideos.length > 0 ? filteredVideos : videos;

  const videoClick = (video) => {
    dispatch(historyCarts(video));
  };

  if (videos.length === 0) {
    return <Shimmer />;
  }
  debugger;
  return (
    <div className="flex flex-wrap justify-evenly">
      {videosToShow.length === 0 && videos[0] && (
        <AdVideoCard info={videos[0]} />
      )}

      {filteredVideos.length > 0 ? (
        <Link className="hidden" to="/live?v=Di8HXzm1CZ4">
          <Live />
        </Link>
      ) : (
        <Link className="block" to="/live?v=Di8HXzm1CZ4">
          <Live />
        </Link>
      )}

      {videosToShow.map((video) => (
        <Link
          key={video.id}
          to={"/watch?v=" + video.id}
          onClick={() => videoClick(video)}
        >
          <VideoCart info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
