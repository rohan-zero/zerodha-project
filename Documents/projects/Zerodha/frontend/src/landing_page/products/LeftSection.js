import React from 'react';

function LeftSection({
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
            <div className='row mb-5 ml-5'  >
            <div className='col-8 p-5'>
                    <img src={ imageURL} style={{width:'80%'}}/>
                    
                </div>
                <div className='col-4  mb-5' >
                    <div className='mt-5' >
                        <h1 className=' mb-4 mt-5'>{productName}</h1>
                        <p className='text-muted fs-5 mb-1' style={{fontSize:"19px"}}>{ProductDiscription}</p>

                        
                    </div>

                    <div className='mt-3 mb-3'>
                        <h5><a href={tryDemo}  style={{textDecoration:"none"}}>
                        Try demo&nbsp;&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href={learnMore} className='mx-5' style={{textDecoration:"none"}}>
                        Learn more&nbsp;&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>

                        </a>
                        </h5>
                    </div>
                    <div>

                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'style={{width:'35%'}}/></a>
                         <a href={appStore}> <img  className='mx-4' src='media/images/appstoreBadge.svg'style={{width:'35%'}}/></a>
                        
                    </div>

                </div>
               
            </div>
        </div>
     );
}

export default LeftSection;