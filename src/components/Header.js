import React from 'react';

const Header = ()=>{

    return(
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand font-weight-bold" href="#">SmartCart</a>
  <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="what are you looking for or search by image..." aria-label="what are you looking for or seach by image..." aria-describedby="button-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-warning" type="button" id="button-addon2">
      <i className="fas fa-search"></i>
    </button>
  </div>
</div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
     
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>

  </div>
</nav>
    )



}

export default Header;