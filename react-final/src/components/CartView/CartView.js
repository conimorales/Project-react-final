import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';
import useCartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useState } from 'react';
import  './CartView.css';

function CartView({ greeting }) {
    const { cart, removeFromCart, clearCart, itemsTotal, precioTotal } = useCartContext();
    const [isActive, setActive] = useState(false);   
    
    const handleVaciar = () => {
      const Toast = Swal.mixin({
        toast: true,
        background: '#DFA822',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Carrito vaciado'
      })
      clearCart();
        } 

        const handleRemove = () => {
          cart.forEach(itemCart => {
          setActive(isActive);
          function pluralizeWord(singularWord, pluralWord) {
            return itemCart.cant > 1 ? pluralWord : singularWord;
          }
        const Toast = Swal.mixin({
    toast: true,
    background: '#a18dce',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: `${itemCart.cant} ${itemCart.name} ${pluralizeWord("eliminada", "eliminadas")} del carrito`
  })
          
          removeFromCart(itemCart.id)
        })
        
            } 

            useEffect(() => {
              function setTitle(title){
              document.title = title;  
              }
              setTitle("Carrito");
            }, []);

    
    if (cart.length === 0) {
      return <section id="Carrito" className="py-5 text-center container">
      <div className="row py-lg-5">
          <div className="col-12">
          <p>No hay items en su carrito</p>

          <Link to="/">Regresar al catálogo</Link>
        </div>
      </div>
    </section>
}
else { 
  return (
    <section id="carrito" className="py-2 text-center container slide-in-fwd-center">
      <div className="row py-lg-2">

        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cantidad total de items: {itemsTotal()}</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total: $ {precioTotal()} </h5>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        </div>

   <div className="album py-5">
     <div className="container">
       <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
        {cart.map( itemCart => {
          
        return (
              <Container id={itemCart.id} className={isActive ? 'bounce-out-top': null}  key={itemCart.id}>
                <Card className="shadow-lg p-3 mb-3 mr-2 ml-2 rounded text-center">
                  <Card.Title>{itemCart.name}</Card.Title>
                  <Card.Img variant="top" src={itemCart.picture} alt={itemCart.name}  height="150" />
                  <Card.Body> 
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cantidad: {itemCart.cant} </li>
                      <li className="list-group-item">Costo de {itemCart.name}: {itemCart.price * itemCart.cant}</li>
                    </ul>
                    <Button onClick={handleRemove} className="btn btn1">Eliminar</Button>
                  </Card.Body>
                </Card>
              </Container>
        )
      
      })}
      </div>
            </div>
            
          </div>
          <Link to="/"><Button className="btn btn-light">Volver al catálogo</Button></Link> 

          <div className="row mt-3">
            <div className="col-sm-2">
              
            </div>
            <div className="col-sm-4">
              <Button className="btn btn2 btn-lg" onClick={handleVaciar}> Vaciar carrito</Button>
            </div>
            <div className="col-sm-4">
              <Link to="/checkout"><Button className="btn btn3 btn-lg">Ir al pago</Button></Link> 
            </div>
          </div>
        </section>
    )
  }
}

export default CartView