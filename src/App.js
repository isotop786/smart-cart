import React from 'react';

import Header from './components/Header'
import Menu from './components/Menu'
import Caro from './components/Caro'
import WholeSale from './components/wholesale'
import BigSel from './components/bigSel'
import Eletroinc from './components/Eletroinc';
import Footer from './components/Footer'

const App = ()=>{
  return(
    <div>
      <Header/>
      
      <Menu/>
<div className="container">
<Caro/>

<WholeSale/>

<BigSel/>
<Eletroinc/>
</div>
      
      <Footer/>

    </div>
  )
}

export default App;