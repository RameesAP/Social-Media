import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/UserRequest'

const Conversation = ({ data, currentUserId }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)

        const getUserData = async () => {
            const { data } = await getUser(userId)
            setUserData(data)
            console.log(data, "datA");
        }
        getUserData();
    }, [])
    return (
        <div>Conversation</div>
    )
}

export default Conversation