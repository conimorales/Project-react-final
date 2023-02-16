
import React from 'react';

function Form() {
    return (
        <>
                            <form>
								<div className="form-group row">
									<label for="inputEmail3" className="col-sm-3 col-form-label">Ingresa tu nombre</label>
									<div className="col-sm-8">
									<input type="email" className="form-control" id="inputEmail3"/>
									</div>
								</div>
								<div className="form-group row">
									<label for="inputEmail3" className="col-sm-3 col-form-label">Ingresa tu apellido</label>
									<div className="col-sm-8">
									<input type="email" className="form-control" id="inputEmail3"/>
									</div>
								</div>
								<div className="form-group row">
									<label for="inputEmail3" className="col-sm-3 col-form-label">Ingresa tu teléfono</label>
									<div className="col-sm-8">
									<input type="email" className="form-control" id="inputEmail3"/>
									</div>
								</div>
								<div className="form-group row">
									<label for="inputEmail3" className="col-sm-3 col-form-label">Email</label>
									<div className="col-sm-8">
									<input type="email" className="form-control" id="inputEmail3"/>
									</div>
								</div>
								<div className="form-group row">
									<label for="inputEmail3" className="col-sm-3 col-form-label">Confirmación de Email</label>
									<div className="col-sm-8">
									<input type="email" className="form-control" id="inputEmail3"/>
									</div>
								</div>
							

								<div className="form-group row">
									<div className="col-sm-10">
									<button type="submit" className="btn btn-light" id="export">Realizar compra</button>
									</div>
								</div>
							</form>
        </>
    )
}

export default  Form;
