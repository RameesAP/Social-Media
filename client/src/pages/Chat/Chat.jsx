

import './Chat.css'

import LogoSearch from '../../components/LogoSearch/LogoSearch'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { userChats } from '../../api/ChatRequest'
import Conversation from '../../components/Conversation/Conversation'

const Chat = () => {


    const { user } = useSelector((state) => state.authReducer.authData)

    const [chats, setChats] = useState([])

    useEffect(() => {
        const getChat = async () => {
            try {
                const { data } = await userChats(user._id)
                setChats(data)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getChat()
    }, [user])
    return (
        <div className='Chat'>
            {/* Left Side */}
            <div className='Left-side-chat'>
                <LogoSearch />

                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className='Chat-list'>
                        {chats.map((chat)=>(
                            <div>
                                <Conversation data={chat} currentUserId={user._id}/>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

            {/* Right Side */}
            <div className='Left-side-chat'>
                <h2>Right Side</h2>
            </div>


        </div>
    )
}

export default Chat