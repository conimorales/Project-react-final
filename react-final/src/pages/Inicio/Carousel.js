import React from "react";
import { Carousel } from 'react-bootstrap';

import product1 from "../../assets/products/macbookpro.jpg";
import product2 from "../../assets/products/macbookpro2.jfif";
import product3 from "../../assets/products/macbookpro3.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
class BootstrapCarouselComponent extends React.Component {
render() {
return (

<div >

    <div class="container">
        <div class="row">
            <div class="col-sm">
            </div>
            <div class="col-sm">
                <Carousel>
                        <Carousel.Item>
                            <img src={product1} width="auto" height="600" alt="img1"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={product2}  width="auto" height="600" alt="img1"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={product3} width="auto" height="600" alt="img1"/>
                        </Carousel.Item>
                </Carousel>
            </div>
            <div class="col-sm">

            </div>
        </div>
    </div>


</div>

)
};
}
export default BootstrapCarouselComponent;