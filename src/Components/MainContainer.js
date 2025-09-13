import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import Live from "./Live";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`${
        isMenuOpen ? "ml-56 " : "ml-3"
      } transition-all duration-300 pt-[32px] mt-20`}
    >
      <ButtonList />

      <VideoContainer />
    </div>
  );
};

export default MainContainer;
