
import React from 'react';
import img1 from '../assets/product-1.png';
import img2 from '../assets/product-2.png';
import img3 from '../assets/product-3.png';
import { Link } from 'react-router-dom'
function Home() {
    return (

        <div class="container">
            <h1>Productos más vendidos</h1>

            
            <div class="row">
                <div class="col-sm-4" >
                    <div class="card" >
                        <img src={img1} width="auto" height="300" alt="img1"/>
                        <div class="card-body">
                            <h5 class="card-title">Vivamus vitae</h5>
                        </div>
                    </div> 
                </div>
                <div class="col-sm-4">
                    <div class="card" >
                        <img src={img2} width="auto" height="300" alt="img2"/>
                        <div class="card-body">
                            <h5 class="card-title">Vivamus vitae</h5>
                        </div>
                    </div> 
                </div>
                <div class="col-sm-4">
                    <div class="card" >
                        <img src={img3}  width="auto" height="300" alt="img3" />
                        <div class="card-body">
                            <h5 class="card-title">Vivamus vitae</h5>
                        </div>
                    </div> 
                </div>
            </div>
            <Link className="nav-link" to="/products" >Ver más productos</Link>
        </div>
        
    )
}

export default  Home;