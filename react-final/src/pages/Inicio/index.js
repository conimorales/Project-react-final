import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Carousel from "./Carousel";
import logo from './logo.jfif';
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner';

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
            <h1>Producto más vendido</h1>
            <Carousel />
            
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