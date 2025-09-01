import React from 'react'

const WatchCart = ({info}) => {
  if (!info || !info.snippet || !info.statistics) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex">
      <img className=" w-[100px] h-[70px]" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="text-[12px] pl-3">{title}</li>
        <li className='text-[10px] pl-3'>{channelTitle}</li>
        <li className='text-[10px] pl-3 mb-3'>{statistics.viewCount%100}K &nbsp;views</li>
    
      </ul>
    </div>
  );
}

export default WatchCart;