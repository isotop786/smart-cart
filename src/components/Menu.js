import React from 'react'

const Menu = ()=>{

    return(
    <div>
      <nav className="navbar navbar-expand-lg m" style={{background:'#555',color:'#fff'}}>
   
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav">
       <li className="nav-item active">
         <a className="nav-link" href="#">Weekly Ad <span className="sr-only">(current)</span></a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Sell on Smartcart</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Investor</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Factory Direct</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Farmers Direct</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Export</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Travel/Ticket</a>
       </li>
   
     </ul>

     <ul className="navbar-nav ml-auto">
     <li className="nav-item">
       <a href="" className="btn btn-danger">TREASURE HUNT</a>
     </li>
     <li className="nav-item">
     Shop super deal
     </li>
     </ul>
     
   </div>

 </nav> 

 <nav className="navbar navbar-expand-lg m2 navbar-light" >
   
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center ml-4"  id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link" href="#">Grocery <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Beauty/Personal Care</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Toys</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Fashion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Electronics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Applicance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Home & Furniture</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pharmacy</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Flower</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Construction</a>
        </li>
    
      </ul>

      
    </div>
 
  </nav> 


    </div> 
  )
}

export default Menu;