/* 
import React  from "react";

document.getElementsByTagName("button")[0].addEventListener("click",Calcular);
function Calcular() {

    
        // obtenemos todas las filas del tbody
        var filas=document.querySelectorAll("#miTabla tbody tr");
     
        var total=0;
     
        // recorremos cada una de las filas
        filas.forEach(function(e) {
     
            // obtenemos las columnas de cada fila
            var columnas=e.querySelectorAll("td");
     
            // obtenemos los valores de la cantidad y importe
            var cantidad=parseFloat(columnas[1].textContent);
            var importe=parseFloat(columnas[2].textContent);
     
            // mostramos el total por fila
            columnas[3].textContent=(cantidad*importe).toFixed(2);
     
            total+=cantidad*importe;
        });
     
        // mostramos la suma total
        var filas=document.querySelectorAll("#miTabla tfoot tr td");
        filas[1].textContent=total.toFixed(2);
    }
export default Calcular; */