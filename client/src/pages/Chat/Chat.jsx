

import './Chat.css'

import LogoSearch from '../../components/LogoSearch/LogoSearch'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"

const Chat = () => {


    const { user } = useSelector((state) => state.authReducer.authData)

    const [chats, setChats] = useState([])

    useEffect(() => {
        const getChat = async () => {
            try {
                const { data } = await userChats(user._id)
            } catch (error) {
                console.log(error);
            }
        }
    }, [])
    return (
        <div className='Chat'>
            {/* Left Side */}
            <div className='Left-side-chat'>
                <LogoSearch />

                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className='Chat-list'>Conversations</div>
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