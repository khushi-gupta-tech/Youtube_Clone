import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img
          className="h-6 cursor-pointer"
          src="https://tse2.mm.bing.net/th/id/OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa?pid=Api&P=0&h=180"
          alt="user"
        />
        <span className=' text-sm text-gray-600 px-4'>{name}</span>
        <span className='text-sm'>{message}</span>
        
    </div>
  )
}

export default ChatMessage