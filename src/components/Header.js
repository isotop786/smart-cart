import React from 'react';

const Header = ()=>{

    return(
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand font-weight-bold" href="#">SmartCart</a>
  <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>





  <div className="collapse navbar-collapse" id="navbarSupportedContent">

  <ul className="navbar-nav w-50">
      <li className="nav-item w-100">
      <div className="input-group mb-3 ">
  <input type="text" className="form-control w-50" placeholder="what are you looking for or search by image..." aria-label="what are you looking for or seach by image..." aria-describedby="button-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-warning" type="button" id="button-addon2">
      <i className="fas fa-search"></i>
    </button>
  </div>
</div>
      </li>
    </ul>

    <ul className="navbar-nav mr-auto">

      <li className="nav-item active">
        <a className="nav-link" href="#"><i className="fas fa-user"></i> Sign in  <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Apps</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i className="fas fa-shopping-cart"></i></a>
      </li>
     

    </ul>

  </div>
</nav>
    )



}

export default Header;