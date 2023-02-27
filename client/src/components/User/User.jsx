import React from 'react'

const User = ({person}) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="follower">
    <div>
        <img src={} alt="" 
        className='followerImage' />
        <div className='name'>
            <span>{person.name}</span>
            <span>@{person.username}</span>
        </div>
    </div>
    <button className='button fc-button'>follow</button>
</div>
)
  
}

export default User