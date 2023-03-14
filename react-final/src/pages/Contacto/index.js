import React from 'react'
import './Contacto.css';

function Contacto() {
    document.title = 'Eccomerce Contacto';
  return (
    <section className="slide-in-fwd-center">
      <div className="container  mt-5 mb-5 ">
        <div className="row m-0">
          <div className="col-md-3 bg-custom p-0 d-flex text-center  mx-auto justify-content-center flex-column">
            <h3 className="mb-2 text-white">Coni Proyectos</h3>
            <div className=" text-light ">
              Este es nuestro contacto
              <p>cmorales@usa.cl</p>
              <br></br>
              Ingresa tu información para que te contactemos
            </div>
          </div>
          <div className="col-md-8 p-0 bg-custom2 pt-4 pb-4">
            <form className="w-100 p-4" action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlInput2" placeholder="Mensaje" required rows={3} defaultValue={""} />
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-custom btn-lg btn-block mt-3">Enviar</button>
            </form>
          </div>
          <div className="col-md-1 bg-white d-none">
            <div className="social-icons">
              <i className="fa fa-facebook" />
              <i className="fa fa-twitter" />
              <i className="fa fa-pinterest" />
              <i className="fa fa-linkedin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto