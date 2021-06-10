import React,{useEffect,useState} from 'react';
import mena from '../asset/mena.jpg'
import price from '../asset/prince.jpg'
import spno from '../asset/spno.jpg'
import uni from '../asset/uni.jpg'
import whole from '../asset/whole.jpg'

const BigSel = ()=>{

        const [store,setStore] =useState([
            {
                id:1,
                name:'Sopno',
                img: spno
            },
            {
                id:2,
                name:'Mena',
                img: mena
            },
            {
                id:3,
                name:'prince',
                img:price
            },
            {
                id:4,
                name:'uni ',
                img:uni
            },
            {
                id:5,
                name:'uni ',
                img:whole
            },
            {
                id:6,
                name:'uni ',
                img:uni
            },
        
        ])

    return(
        
        <div className="p-2 mt-4">
            <div className="row">
                
                {store.length ? 

                   store.map(s=>{
                       return(
                 
                        <div className="col-md-2">

                        
                        <div class="card" >
                        
                        <div class="card-body">
                        <img src={s.img} class="card-img-top" alt="..."/>
                        </div>
                      </div>
                      </div>
                    
                       )
                   }) 
                 
                 : 

                 <div className="col">
                       <h3>Data Loading...</h3> 
                 </div>
                
            }
            </div>
       
            <style jsx>
            {`
              .dis{
                  display:flex;
              }  
            
            `}
            </style>
            </div>
        
    )

}

export default BigSel;