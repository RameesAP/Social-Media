import React, { useEffect, useState } from 'react'
import './FollowersCard.css'
import User from '../User/User'

import { Followers } from '../Data/FollowersData'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../api/UserRequest'


const FollowersCard = () => {
    const [persons, setPersons] = useState([])
    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchPersons = async () => {
            const { data } = await getAllUser();
            setPersons(data)
            console.log(data);
        };
        fetchPersons()
    },[]);
    return (
        <div className='FollowersCard'>
            <h3>People you may know</h3>
            {Followers.map((person, id) => {
                return (

                    <User person={person} key={id} />

                )
            })}
        </div>
    )
}

export default FollowersCard