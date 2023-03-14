import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import combo3 from '../../assets/images/combo3.webp';
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner';

import product1 from "../../assets/products/1.png";
import product2 from "../../assets/products/1.png";
import product3 from "../../assets/products/1.png";


function Inicio() {
  
  document.title = 'Venta ConiMor';


  if(combo3 === undefined){
    return <section id="menu" className="py-5 text-center container">
    <div className="album bg-degrade py-5">
    <div className="container">
      <div className="">
      <LoadingSpinner />
      </div></div></div>
  </section>
  }
  return (
<div>

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

            <div class="container mt-4">
                <div class="col-md-12 text-center">
                  <Link to="/" className="btn btn-lg btn-light ">
                    Ver todos los productos
                  </Link>
                </div>
            </div>
            
        </div>
</div>
  )
}

export default Inicio; 