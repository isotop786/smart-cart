import React from 'react'

const Caro = ()=>{

    return(
     
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img width="200px"height="300px" src="https://picsum.photos/200/300?grayscale" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width="200px"height="300px" src="https://picsum.photos/200/300/?blur" class="d-block w-100" alt="..."/>
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