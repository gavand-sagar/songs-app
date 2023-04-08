import './GlobalChat.css'
import { Button, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import uuid from 'react-uuid'
import Header from '../../shared/components/Header/Header'
import ChatItem from './ChatItem/ChatItem'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, getAllChats, postChatMessage, postImTyping, removeMessage } from '../../data/messageSlice'
import { typingRefreshTime } from '../../data/constants'

export default function GlobalChat() {
    const { handleSubmit, register, formState: { errors },reset } = useForm();
    const messages = useSelector(store => store.messages.messages)
    const username = localStorage.getItem('username')
    const dispatch = useDispatch();
    function save(obj) {
        let mesageObj = {
            content: obj.message,
            tempMessageId: uuid(),
            time: new Date(),
            status: 'sending',
            author: username
        }
        dispatch(addMessage(mesageObj))
        dispatch(postChatMessage(mesageObj))
        reset()
    }

    const wssRef = useRef(null)

    useEffect(() => {
        if (wssRef.current == null) {
            wssRef.current = new WebSocket(process.env.REACT_APP_WS_URL);
            wssRef.current.onmessage = (webSocketMessage) => {
                const messageBody = JSON.parse(webSocketMessage.data);
                console.log(messageBody)
                dispatch(addMessage(messageBody))
                if (messageBody?.typing) {
                    setTimeout(() => {
                        dispatch(removeMessage(messageBody))
                    }, 3000)
                }
            };
        }

        dispatch(getAllChats())

    }, [])

    useEffect(() => {
        console.log('meseage added')
        var myElement = document.getElementById('scroll-guide');
        var topPos = myElement.offsetTop;
        document.getElementById('scroll-chat').scrollTop = topPos;
    }, [messages])

    const isTypingRef = useRef(null)

    function texBoxChanged(e) {
        if (isTypingRef.current == null) {
            const typingObj = {
                author: username,
                typing: true,
                tempMessageId: uuid()
            }
            dispatch(postImTyping(typingObj))
            isTypingRef.current = setTimeout(() => {
                clearTimeout(isTypingRef.current)
                isTypingRef.current = null
            }, typingRefreshTime)
        }
    }

    return (
        <>
            <Header />
            <div className='chat-container'>
                <div id='scroll-chat' className='chat-body'>
                    {
                        messages.map(x =>
                            <ChatItem status={x.status} time={x.time} key={x._id} typing={x.typing} content={x.content} self={username == x.author} author={x.author} />
                        )
                    }
                    <div id='scroll-guide'></div>
                </div>
                <form onSubmit={handleSubmit(save)} className='chat-footer'>
                    <TextField {...register('message', { onChange: texBoxChanged })} className="chat-input" />
                    <Button type='submit' className="chat-send" variant='contained'>Send</Button>
                </form>
            </div>
        </>
    )
}

