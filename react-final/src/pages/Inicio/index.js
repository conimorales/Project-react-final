import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Carousel from "./Carousel";
import logo from './logo.jfif';

import LoadingSpinner from '../../components/LoadingSpinner';
import product1 from "../../assets/products/macbookpro.jpg";
function Inicio() {

  document.title = 'Eccomerce ConiMor';

  if(logo === undefined){
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
        <h2  className='text-center'>VENTA DE PRODUCTOS TECNOLÓGICOS</h2>

        <div class="media position-relative">
            <img src={product1} width="auto" height="200" alt="img1"/>
            <div class="media-body">
                <h5 class="mt-0">Media with stretched link</h5>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <Link to="/" className="btn btn-lg btn-light ">
                    Ver todos los productos
                </Link>
            </div>
        </div>
        <hr></hr> 

        <h5>
            PRÓXIMOS ENVÍOS
            <br></br>
            PORFAVOR LEER! 🧿
            <br></br>
            COMPRAS BLACK FRIDAY:
            <br></br>
            1. ENVIOS JUEVE 23 x STARKEN Y JUEVES 23 Y VIERNES MARZO PARTICULAR STGO.
            <br></br>
            2. TOMAREMOS PEDIDOS LIMITADOS CADA SEMANA.
        </h5> 
        <hr></hr>
            <h4 className='text-center mt-4'>PRODUCTO MÁS VENDIDO DE ESTE MES</h4>
            <Carousel />
            
            <div className="container ">
                <div className="col-md-12 text-center">
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