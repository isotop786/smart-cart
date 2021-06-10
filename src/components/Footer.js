import React from 'react'


const Footer =()=>{
    return(
        <div className="p-4 mt-4 d-flex justify-content-between" style={{background:'#333',color:'#eee'}} >
           <div className="d-flex justify-content-around">
                <div className="p-3">
                        <h5 className="ml-4 muted">ABOUT</h5>
                        <ul>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Career </li>
                            <li>Press</li>
                            <li>Flipkart Wholesale</li>
                        </ul>
                    </div>

                    <div className="p-3">
                        <h5 className="ml-4">HELP</h5>
                        <ul>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Career </li>
                            <li>Press</li>
                            <li>Flipkart Wholesale</li>
                        </ul>
                    </div>
                    <div className="p-3">
                        <h5 className="ml-4">POLICY</h5>
                        <ul>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Career </li>
                            <li>Press</li>
                            <li>Flipkart Wholesale</li>
                        </ul>
                    </div>
                    <div className="p-3">
                        <h5 className="ml-4">SOCIAL</h5>
                        <ul>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Career </li>
                            <li>Press</li>
                            <li>Flipkart Wholesale</li>
                        </ul>
                 </div>
           </div>
           
            <div style={{height: '100%',background:'#ccc'}}>

            </div>

            <div className="d-flex justify-content-between" >
                <div className="p-2">
                    <p>Mail Us</p>
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                </div>


                <div className="p-2">
                    <p>Registered Office Address</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            


            <style jsx>{`
            ul,li{
                list-style:none;
            }

            .alg{
                text-align:center
            }
            
            `}</style>
        </div>
    )
}

export default Footer;