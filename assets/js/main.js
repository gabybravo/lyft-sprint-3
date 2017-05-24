//Validando que el teléfono ingresado esté en el formato correcto:
document.getElementById("boton-inscripcion").addEventListener("click",function(){
	var telefono = document.getElementById("fono");
	event.preventDefault();
	
	if (validarTelefono(telefono)){
		alert("Gracias por confiar en nosotros. Lo contactaremos a la brevedad.");
	}
});

function validarTelefono(telefono){
	var validacion = /^[0-9]{9,11}$/;
	if (telefono.value.match(validacion)){
		telefono.value = "";
		return true;
	} else {
		telefono.value = "";
		alert("Ingrese un número con 9 dígitos, por favor.");  
		telefono.focus();  
		return false; 
	}
}

