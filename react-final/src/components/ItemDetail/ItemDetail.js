import React, { useState } from 'react';
import { Badge, Container, Breadcrumb } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

import useCartContext from '../../store/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';





function ItemDetail({  detalle } ) {
  
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, estaEnCarrito } = useCartContext();
  const { getItemQuantity } = useCartContext();
  function onAdd(count) {    
    
    setIsInCart(true);
    addToCart(detalle, count);
    
}

const catPath = `/category/${detalle.category}`;

if(detalle.picture === undefined){
  return "No fue cargado"
  }

  document.title = `Eccomerce ${detalle.category}/${detalle.name}`;

  return (
    <><div><Container className="d-flex text-center justify-content-center p-5 slide-in-fwd-center"><Breadcrumb listProps={{ className: "justify-content-center" }} className="justify-content-center">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Catálogo</Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${catPath}` }}>
        {detalle.category}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{detalle.name}</Breadcrumb.Item>
    </Breadcrumb></Container></div><div className="container bootstrap snippets bootdey slide-in-fwd-center">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 ">
            <span className="position-absolute top-10 end-90 translate-middle badge rounded-pill bg-info">{isInCart && estaEnCarrito(detalle.id) ?
              <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="3x" color="black" /><div className="mostrar-cantidadItem">{getItemQuantity(detalle.id)}</div></div></>
              :
              <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="3x" color="black" /><div className="mostrar-cantidadItem">0</div></div></>}</span>
            <img src={detalle.picture} alt={detalle.name} className="img-fluid  " />
            {estaEnCarrito(detalle.id) ?
            <Link to="/cart">
<div className="card-img-overlay h-100 d-flex flex-row justify-content-end">
    <div className="card-text border-0 bg-semitransparent text-center">
        <Badge className="bg-secondary">Ir al carrito</Badge>
    </div>
</div>
</Link>
:
null
            }
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 push-bit text-center">
            <div className="clearfix py-3">
              <div className="pull-right">
                <h1><strong className="text-secondary">{detalle.name}</strong><br /></h1>
                <h3><strong className="text-secondary">{detalle.category}</strong><br /></h3>
                <span className="h2"><strong><Badge bg="secondary">Precio $ {detalle.price}</Badge></strong>
                {estaEnCarrito(detalle.id) ?
<Badge className="bg-secondary ms-2">x{getItemQuantity(detalle.id)} = {detalle.price * getItemQuantity(detalle.id)}$</Badge>
:
null}
                </span>
                <br />
              </div>
              <span className="h4">
              </span>
            </div>
            <hr />
            <span>
              {detalle.description}
            </span>
            <span>
              {detalle.details}
            </span>
            <hr />
            <ItemCount onAdd={onAdd} stock={detalle.stock} initial={1} itemName={detalle.name} />
          </div>
        </div>
      </div></>
  )
}

export default ItemDetail