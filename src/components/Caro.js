import React,{useState} from 'react'

import banner1 from '../asset/banners/banner1.jpg'
import banner2 from '../asset/banners/banner2.jpg'
import banner3 from '../asset/banners/banner3.png'
import banner4 from '../asset/banners/banner4.jpg'

const Caro = ()=>{

  const [ban,setBan] = useState([
    {
      id:1,
      img: banner1
    },
    {
      id:2,
      img: banner2
    },
    {
      id:3,
      img: banner3
    },
    {
      id:4,
      img: banner4
    },
  ])

    return(
     
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">

    {ban.map(b=>{
      return(
        <div class="carousel-item">
        <img width="200px"height="300px" src={b.img} class="d-block w-100" alt="..."/>
      </div>
      )
    })}
   
    <div class="carousel-item active">
      <img width="200px"height="300px" src={banner1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width="200px"height="300px" src={banner2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width="200px"height="300px" src="https://picsum.photos/200/300.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    )
}

export default Caro;