import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/assets/back_arrow_icon.png'

const Player = () => {
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="back arrow icon"/>
      <iframe width='90%' height='90' src='https://www.youtube.com/embed/HS43JC1L2zk' title='trailer' frameBorder='0' allowFullScreen className='player=info'>
        <p>Publish Date</p>
        <p>Name</p>
        <p>Type</p>
      </iframe>
    </div>
  )
}

export default Player