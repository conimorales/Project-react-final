
import React from 'react';
import img1 from '../assets/product-1.png';
import img2 from '../assets/product-2.png';
import img3 from '../assets/product-3.png';
import { Link } from 'react-router-dom'
function Home() {
    return (

        <div className="container">
            <h1>Productos más vendidos</h1>

            
            <div className="row">
                <div className="col-sm-4" >
                    <div className="card" >
                        <img src={img1} width="auto" height="300" alt="img1"/>
                        <div className="card-body">
                            <h5 className="card-title">Vivamus vitae</h5>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-4">
                    <div className="card" >
                        <img src={img2} width="auto" height="300" alt="img2"/>
                        <div className="card-body">
                            <h5 className="card-title">Vivamus vitae</h5>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-4">
                    <div className="card" >
                        <img src={img3}  width="auto" height="300" alt="img3" />
                        <div className="card-body">
                            <h5 className="card-title">Vivamus vitae</h5>
                        </div>
                    </div> 
                </div>
            </div>
            <Link className="nav-link" to="/products" >Ver más productos</Link>
        </div>
        
    )
}

export default  Home;