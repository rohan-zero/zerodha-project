import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row  mb-5'>
                <h1 className=' text-center'>People</h1>
            </div>
            <div className='row' style={{fontSize:"17px" , lineHeight:"1.8"}}>
                <div className='col-6' style={{ textAlign: "right" ,paddingRight: "60px" }}>
                    <img src='media/images/Rohan.jpg' 
                    style={{borderRadius: "100%", 
                    width: "300px", 
                    height: "300px", 
                    objectFit: "cover"
                    }}/>
                    <p style={{paddingRight: "60px" ,fontSize:"25px" }}>Rohan Kanagala </p>
                </div>


                <div className='col-6 fs-5 mt-3 mb-5' style={{ textAlign: "left" }}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>


                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href='' style={{ textDecoration: "none" }}>LinkedIn </a> / <a href='' style={{ textDecoration: "none" }}>GitHub </a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;