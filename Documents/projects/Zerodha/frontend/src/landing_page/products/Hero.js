import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5 text-center mt-5 mb-5 border-bottom' style={{lineHeight:"2"}}>
                <h1 style={{fontSize:"53px"}}>Zerodha Products                </h1>
                <p style={{fontSize:"23px"}}>Sleek, modern, and intuitive trading platforms</p>
                <p style={{fontSize:"18px"}}>Check out our <a href='' style={{textDecoration:"none"}}>
                    investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        </p>
            </div>
        </div>
     );
}

export default Hero;