import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/assets/hero_banner.jpg'
import hero_title from '../../assets/assets/hero_title.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
         <img src={hero_banner} alt='Hero_banner' className='banner-img'></img>
         <div className="hero-caption">
            <img src={hero_title} alt="Title" className='caption-img'/>
            <p>
              Discovering his ties to a scret ancient order , a young 
              man living in modern instanbul embarks on a quest to save
              the city from an immortal enermy
            </p>
         </div>
      </div>
    </div>
  )
}

export default Home