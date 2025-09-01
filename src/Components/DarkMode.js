import React from 'react'
import {Moon} from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { isDark } from '../utils/darkSlice';

const DarkMode = () => {  
   const dark = useSelector((store)=> store.dark.dark);

  const dispatch = useDispatch();

 const darkHandle = () =>{
    dispatch(isDark())
 }
  return (
    <div className={dark?'dark':''}> 
       <div className='mr-3 items-center cursor-pointer dark: bg-white'>
        <span onClick={()=> darkHandle()}><Moon/></span>
    </div>
    </div>
   
  )
}

export default DarkMode