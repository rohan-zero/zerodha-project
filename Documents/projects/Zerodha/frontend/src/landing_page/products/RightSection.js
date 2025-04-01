import React from 'react';

function RightSection({
    imageURL,
    productName,
    ProductDiscription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className='container p-3' >
            <div className='row mb-5 mt-5 ml-5'  >
                
                <div className='col-4  mt-5  p-5' >
                    <div className='mt-5' >
                        <h1 className=' mb-4 mt-5'>{productName}</h1>
                        <p className='text-muted mb-1' style={{fontSize:"19px"}}>{ProductDiscription}</p>

                    </div>

                    <div className='mt-3 mb-3'>
                        <h5><a href={tryDemo}  style={{textDecoration:"none"}}>
                        Learn more&nbsp;&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        
                        </h5>
                    </div>
                    

                </div>

                <div className='col-8 '>
                    <img src={imageURL}style={{width:'90%'}}/>
                    
                </div>
               
            </div>
        </div>
     );
}

export default RightSection;