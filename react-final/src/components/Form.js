
import React from 'react';
import Footer from './Footer';


function Form() {

	'use strict';
	window.addEventListener('load', function() {
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
		let forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		let validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
			}
			form.classList.add('was-validated');
			}, false);
		});
	}, false);
    return (
        <>
		<div className='container'> 
		<h1>Formulario de compra</h1>
		
			<form className="needs-validation mt-4" novalidate>
				<div className="form-row">
					<div className="col-md-6 mb-3">
						<label for="validationCustom01">Nombre</label>
						<input type="text" className="form-control" id="validationCustom01" required></input>
					</div>
					<div className="col-md-6 mb-3">
						<label for="validationCustom02">Apellido</label>
						<input type="text" className="form-control" id="validationCustom02" required></input>
					</div>
				</div>
				<div className="form-row">
					<div className="col-md-6 mb-3">
						<label for="validationCustom01">Correo</label>
						<input type="text" className="form-control" id="validationCustom01" required></input>
					</div>
					<div className="col-md-6 mb-3">
						<label for="validationCustom02">Confirmación de correo </label>
						<input type="text" className="form-control" id="validationCustom02" required></input>
					</div>
				</div>
				<div className="form-row">
					<div className="col-md-6 mb-3">
						<label for="validationCustom01">Teléfono</label>
						<input type="text" className="form-control" id="validationCustom01" required></input>
					</div>

				</div>

				
				<div class="container bg-light">
					<div class="col-md-12 text-center">
						<button className="btn btn-outline-dark" type="submit">Realizar la compra</button>

					</div>
				</div>
			</form>
		</div>
		<div className='mt-5'>
			<Footer/>
		</div>
        </>
    )
}

export default  Form;
