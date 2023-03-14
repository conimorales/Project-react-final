/* import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import { Shop } from "./pages/Shop/Shop.js";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/Cart/Cart";
import { ShopContextProvider } from "./context/Shop-context";
import Home from './components/Home';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path="/products" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Form />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

 */


import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartView from './components/CartView/CartView';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { HashRouter, Route, Routes }  from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';
import Footer from './components/Footer/Footer';
import CheckOut from './components/CheckOut/';
import Inicio from './pages/Inicio/Index';
import Contacto from './pages/Contacto';


function App() {
  
  return (
    <>
    <CartContextProvider>
    <HashRouter>
      <NavBar />
      <main>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/item/:itemid" element={<ItemDetailContainer greeting="Detalle de producto"/>} />  
        <Route path="/" element={<ItemListContainer greeting="Productos"/>} />
        <Route path="/cart" element={<CartView greeting="Este es su carrito"/>} / >
        <Route path="/coderhouse-react" exact component={<ItemListContainer greeting="Bienvenido a Habemus Papa!"/>} />
        <Route path="/category/:categoryid" element={<ItemListContainer greeting="Categoría"/>} />
      </Routes>

      <div className="back1">
        <div className="back1 back2">
        <div className="back1 back3">
			</div>
          </div>
      </div>
      </main>
      <Footer />
      </HashRouter>
      </CartContextProvider>
    </>
  );
}

export default App;