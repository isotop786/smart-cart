import React,{useState,useEffect} from 'react'
import clearance from '../asset/clearnace.jpg'


const Electronic = ()=>{

    return(
 
        <div className="row bg-warning p-2">
            <div className="col-md-3 bg-light m-2">
                    <p>Up to 70% off | Electronics clearance store</p>
                    <img className="cimg"   src={clearance} alt=""/> 
            </div>

            <div className="col-md-3 bg-light m-2">
               <p>Up to 70% off | Electronics clearance store</p>
               <img className="cimg" src={clearance} alt=""/> 
            </div>

            <div className="col-md-3 bg-light m-2">
               <p>Up to 70% off | Electronics clearance store</p>
               <img className="cimg"  src={clearance} alt=""/> 
            </div>

            <div className="col-md-3 bg-light m-2">
               <p>Up to 70% off | Electronics clearance store</p>
               <img className="cimg" src={clearance} alt=""/> 
            </div>




            <style  scoped jsx>{`
            .cimg{
                width:50px;
                height:80px;
            }
            
            `}</style>
        </div>
        
    )

}

export default Electronic;