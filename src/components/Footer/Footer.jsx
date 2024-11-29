import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/assets/youtube_icon.png'
import facebook_icon from '../../assets/assets/facebook_icon.png'
import twitter_icon from '../../assets/assets/twitter_icon.png'
import instagram_icon from '../../assets/assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help <center></center></li>
        <li>Gift Cards</li>
        <li>Media center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
      </ul>
      <div className="copyright-text">© 1997-2024 Netflex, Inc.</div>
    </div>
  )
}

export default Footer