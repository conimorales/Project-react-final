
import React from 'react';

import { Link } from 'react-router-dom'


import product1 from "../assets/products/1.png";
import product2 from "../assets/products/2.png";
import product3 from "../assets/products/3.png";



function Home() {
    return (

        <div className="container">
            <h1>Productos más vendidos</h1>

            
            <div className="row">
                <div className="col-sm-4" >
                    <div className="card" >
                        <img src={product1} width="auto" height="300" alt="img1"/>
                        <div className="card-body">
                            <h5 className="card-title">Iphone</h5>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-4">
                    <div className="card" >
                        <img src={product2} width="auto" height="300" alt="img2"/>
                        <div className="card-body">
                            <h5 className="card-title">Macbook Pro 2022 (M1)</h5>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-4">
                    <div className="card" >
                        <img src={product3}  width="auto" height="300" alt="img3" />
                        <div className="card-body">
                            <h5 className="card-title">Cannon M50 Camera</h5>
                        </div>
                    </div> 
                </div>
            </div>
            <Link className="nav-link" to="/products" >Ver más productos</Link>
        </div>
        
    )
}

export default  Home;