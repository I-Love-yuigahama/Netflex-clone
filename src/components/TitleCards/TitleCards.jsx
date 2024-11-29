import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/assets/cards/Cards_data'

const TitleCards = ({title,category}) => {

  const cardsRef = useRef();

  const handleWheel = (e) =>
    {
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
//        cardsRef.current.scrollLeft: Adjusts the horizontal scroll position of the referenced DOM element.
//        e.deltaY: Represents the vertical scroll amount caused by the mouse wheel. This is converted into horizontal scroll:
//        A positive value means scrolling down (scrolls right horizontally).
//        A negative value means scrolling up (scrolls left horizontally).
    }

  useEffect(() => (
    cardsRef.current.addEventListener('wheel', handleWheel)
  ),{})

  return (
    <div className='title-cards'>
      <h2>{title? title : "Popular on Netflex"}</h2>
      <div className="card-list" ref={cardsRef}>
          {cards_data.map((card,index)=>{
               return  <div className="card" key={index}>
                  <img src={card.image}></img>
                  <p>{card.name}</p>
              </div>
          })}
      </div>
    </div>
  )
}

export default TitleCards