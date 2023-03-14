import React from 'react'
import { Button, Card } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import useCartContext from '../../store/CartContext';
import  './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function Item({ item, stock, name, price, details, picture } ) {
  const { getItemQuantity, isInCart } = useCartContext();


  return (
    <Card key={item.id} className="bg-light h-100 shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
    <Card.Title>{name} </Card.Title>
    <span className="position-absolute top-4 end-4  badge rounded-pill shopcolor">{isInCart(item) ?
    <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="1x" color="black" /><div className="mostrar-cantidadItem">{getItemQuantity(item)}</div></div></>
    :
    <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="1x" color="black" /><div className="mostrar-cantidadItem">0</div></div></>
}</span>
  <LinkContainer to={`/item/${item}`}><Card.Img className="picHover" variant="top" src={picture} alt={name} height="200"/></LinkContainer>
    <Card.Body>
    
    <Card.Text>
      Detalle: {details}
    </Card.Text>
    </Card.Body>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">$ {price}</li>
        <li class="list-group-item">Stock: {stock}</li>
      </ul>
      <br></br>

    <LinkContainer to={`/item/${item}`}><Button className="btn bg-secondary">Ver detalle</Button></LinkContainer>
  </Card>
    
  )
}

export default Item