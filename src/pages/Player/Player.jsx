import React, { useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/assets/back_arrow_icon.png'
import { use } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

const Player = () => {

  const [apiData, setapiData] = React.useState({
      name: ``,
      key: ``,
      published_at:` `,
      typeof:``,
    });

    const{id} = useParams();

    const nav = useNavigate();

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWRjZmJlODdlMmVhNDE2ZGFiNzAxMTY2M2U3OThjYSIsIm5iZiI6MTc1MjEyMTE4My4wMjU5OTk4LCJzdWIiOiI2ODZmM2Y1ZmExYWFiNDk0YmM3MDQwOTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6pOOWRLMw6uKNVD2Dc3_QF0Q5d96HhTDKzf57z8xfu0'
      }
    };

    useEffect(() => {

      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setapiData(res.results[0]))
      .then(res => console.log(res))
      .catch(err => console.error(err));


    }, []);

    
    
    return (
    <div className='player'>
          <img className="player-img" src={back_arrow_icon} alt="back arrow icon" onClick={ ()=>{nav(-2)}}/>
          <div className='player-info'>
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
          </div>
          <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
  
    </div>

      
        // {/* <iframe width="100%" height="100%" src='https://www.youtube.com/embed/gq0C6-Qu1eQ' title='trailer' frameBorder='0' allowFullScreen ></iframe> */}
        // {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/gq0C6-Qu1eQ?si=JLLLBsjav4h7wRYt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}


  )
}

export default Player