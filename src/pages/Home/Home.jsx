import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/assets/hero_banner.jpg'
import hero_title from '../../assets/assets/hero_title.png'
import Play_icon from '../../assets/assets/play_icon.png'
import info_icon from '../../assets/assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

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
            <div className="hero-btns">
                <button className='btn'><img src={Play_icon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards></TitleCards>
         </div>
      </div>
        <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"}></TitleCards>
          <TitleCards title={"Only on Netflex"}></TitleCards>
          <TitleCards title={"Upcoming"}></TitleCards>
          <TitleCards title={"Top pips for you"}></TitleCards>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Home