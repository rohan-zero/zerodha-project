import React from 'react';
import { Link } from "react-router-dom";
 
function Navbar() {
    return ( 

            <nav class="navbar navbar-expand-lg fixed-top border-bottom" style={{backgroundColor: "#fff"}}>
            <div class="container p-2">
                <div className='col'>
                <Link class="navbar-brand" to="/" className='mb-2'><img src='media/images/logo.svg' style={{width:"25%"}} /></Link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent" className='col' style={{fontSize:"17px"}}>

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link " to="/signup">Signup</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/products">Products</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/Pricing">Pricing</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/support">Support</Link>
                    </li>
                    
                    
                </ul>
                
                </div>
            </div>
            </nav>


     );
}

export default Navbar;