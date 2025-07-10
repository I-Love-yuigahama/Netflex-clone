import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/assets/cards/Cards_data'

const TitleCards = ({title,category}) => {


  const [apiData, setApiData] = React.useState([]);

  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWRjZmJlODdlMmVhNDE2ZGFiNzAxMTY2M2U3OThjYSIsIm5iZiI6MTc1MjEyMTE4My4wMjU5OTk4LCJzdWIiOiI2ODZmM2Y1ZmExYWFiNDk0YmM3MDQwOTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6pOOWRLMw6uKNVD2Dc3_QF0Q5d96HhTDKzf57z8xfu0'
    }
  };


  const handleWheel = (e) =>
    {
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
//        cardsRef.current.scrollLeft: Adjusts the horizontal scroll position of the referenced DOM element.
//        e.deltaY: Represents the vertical scroll amount caused by the mouse wheel. This is converted into horizontal scroll:
//        A positive value means scrolling down (scrolls right horizontally).
//        A negative value means scrolling up (scrolls left horizontally).
    }

  useEffect(() =>{ 

    fetch(`https://api.themoviedb.org/3/movie/${category? category : "now_playing" }?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));



    cardsRef.current.addEventListener('wheel', handleWheel);
},{})

  return (
    <div className='title-cards'>
      <h2>{title? title : "Popular on Netflex"}</h2>
      <div className="card-list" ref={cardsRef}>
          {apiData.map((card,index)=>{
               return  <div className="card" key={index}>
                  <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}></img>
                  <p>{card.original_title}</p>
              </div>
          })}
      </div>
    </div>
  )
}

export default TitleCards