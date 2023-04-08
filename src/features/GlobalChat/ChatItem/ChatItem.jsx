import TimeTransform from '../TimeTransform/TimeTransform'
import './ChatItem.css'
import React from 'react'

export default function ChatItem({ self, typing, content, author,time }) {
  if (typing) {
    return (
      <div className={self ? 'typing-chat-item chat-item self' : 'typing-chat-item chat-item'}>
        <div className='chat-item-content'>
          <div className='chat-author-container'>{self ? 'You' : author}</div>
          
          <span className='typing'>
            {/* <span>Typing</span> */}
            <span className='circle c1'></span>
            <span className='circle c2'></span>
            <span className='circle c3'></span>
          </span>
        </div>
      </div>
    )
  } else {
    return (
      <div className={self ? 'chat-item self' : 'chat-item'}>
        <div className='chat-item-content'>
          <div className='chat-author-container'>{self ? 'You' : author}</div>
          <p>
            {content}
          </p>
          <div className='chat-time-container'>{<TimeTransform value={time} />}</div>
        </div>
      </div>
    )
  }

}
