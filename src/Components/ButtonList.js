import React from 'react'
import Button from "./Button";
import { useSelector } from 'react-redux';

const list = ["All","Live","Gaming","Music","Reverberation","Jukebox","Mixes","Mithoon","Podcasts","Watched","Dramedy","APIs","Lectures","1990s","Tamil","Data","Recently","collection"];
const ButtonList = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const dark = useSelector((store) => store.dark.dark);

  return (
    <div className={dark?'dark':''}>
    <div className={`${isMenuOpen ? 'ml-52' : 'ml-0'} flex fixed top-14 left-0 bg-white  w-screen overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden scrollbar-hide  dark:bg-black text-white`}>
      {list.map((v,index)=> <Button name={v} key={index}/>)}
      
      
    </div>
    </div>
  )
}

export default ButtonList