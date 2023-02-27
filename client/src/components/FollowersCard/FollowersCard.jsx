import React from 'react'
import './FollowersCard.css'
import User from '../User/User'

import { Followers } from '../Data/FollowersData'
const FollowersCard = () => {
    return (
        <div className='FollowersCard'>
            <h3>People you may know</h3>
            {Followers.map((person, id) => {
                return (
                
                    <User person={person} key = {id}/>

            )})}
        </div>
    )
}

export default FollowersCard