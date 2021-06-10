import React,{useEffect,useState} from 'react';
import Tomato from './img/tomato.jpg'
import Malta from './img/malta.jpg'
import Meat from './img/meat.jpg'
import Fish from './img/fish.jpg'
import Egg from './img/egg.jpg'
import Nugget from './img/nugget.jpg'

const WholeSale = ()=>{

    const [item,setItem] =useState([
        {
            id:1,
            cate:'Vegitable',
            price:10,
            name:'Tomato Round',
            img: Tomato
        },
        {
            id:2,
            cate:'Fruit',
            price:99,
            name:'Malta S.Africa',
            img: Malta
        },
        {
            id:3,
            cate:'Meat',
            price:499,
            name:'Beef Premium Cube',
            img:Meat
        },
        {
            id:4,
            cate:'Fish',
            price:499,
            name:'Rupchanda ',
            img:Fish
        },
        {
            id:5,
            cate:'Egg',
            price:5,
            name:'Egg Loose',
            img:Egg
        },
        {
            id:6,
            cate:'Frozen',
            price:115,
            name:'Chicken Nuggets',
            img:Nugget
        }
    ])

    return(
        
        <div className="p-2 mt-4">
            <div className="row">

          
     

                
                {item.length ? 

                   item.map(e=>{
                       return(
                        <div className="col-md">
                          
                        <div class="card align-items-stretch" >
                        <div className="d-flex justify-content-between">
                               <button className="btn btn-sm btn-info">{e.cate}</button>
                               <button className="btn btn-sm btn-danger">View all</button>
                            </div>
                        <img src={e.img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">{e.name}</h5>
                          <p>{e.price} Taka</p>
                          <a href="#" class="btn btn-primary btn-sm">Sign in add</a>
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

export default WholeSale;