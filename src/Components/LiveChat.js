import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName,generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      console.log("API pooling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    // garbage collection
    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className=" w-full h-[410px] mt-2 ml-2 p-2 border border-black bg-slat-100 rounded lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c) => (
            <ChatMessage name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form className="w-full p-2 ml-2 border border-black "
      onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Khushi",
            message:liveMessage,
        }))
        setLiveMessage("");
      }}>
        <input
          className="w-72 border px-2"
          type="text"
          placeholder="Chat"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-300 hover:bg-green-400">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
