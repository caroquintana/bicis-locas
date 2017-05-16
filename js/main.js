function validateForm(){
	/* Escribe tú código aquí */
/*
1. traer la clase
2. crear
3. que se conozcan
4. crear un if
	var traerNombre = document.getElementsByClassName("input-box")[0];
	
	var crearSpan = document.createElement("span"); //crear un span
	name.appendChild(crearSpan); //relacionando

*/

	var name = document.getElementById("name").value; //traer valor del input
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password");
	var select = document.getElementsByTagName("select").value;

	var regexLetras = new RegExp("[^A-Za-z\d\s]");
	var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var regexMail = new RegExp("[^A-Za-z\+@\a-z\+\.\a-z\+/]"); //nofunciona!


	if(regexLetras.test(name)){
		alert("Ingresa un nombre válido");
	}if(regexLetras.test(lastname)){
		alert("Ingresa un apellido válido");
	}if(regexMail.test(email)){
		alert("Mail inválido");
	}if (password.value === "password"){
		alert("No se ha ingresado contraseña válida");
	}if (password.value.length <=5) {
		alert("Su contraseña debe tener al menos 6 caracteres.");
	};
}