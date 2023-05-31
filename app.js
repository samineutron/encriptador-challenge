"use strict";

const result = document.querySelector("#mostrar-result");
const resultArea = document.querySelector("#resultArea");
const text = document.querySelector("#text");
const btn = document.querySelectorAll(".btn");

const copiarTexto = ()=>{
	result.select();
  	document.execCommand("copy");
	alert("copiado!");
}

const mostrarTexto = (texto) =>{
	document.querySelector(".result-area > h3").style.display ="none";
	document.querySelector(".texto-descriptivo").style.display ="none";
	document.querySelector(".btn.copiar").style.display = "block";
	resultArea.style.justifyContent = "space-between";
	if (window.innerWidth >= 992) {
		document.querySelector(".svg-woman").style.display = "none";
	}
	result.style.display = "inline-block";
	result.readOnly = true;
	result.textContent = "";
	result.textContent = texto;
	result.style.height = "15px";
	result.style.height = (result.scrollHeight + 4) + "px";
}

const encriptarTexto = texto =>{
	if (texto.match(/[a-z0-9\s]+$/g)) {
		let nuevoTexto = texto.replace(/[aeiou]/g,vocal=>{
			switch(vocal){
				case "a":
					return "ai";
				case "e":
						return "enter";
				case "i":
					return "imes";
				case "o":
					return "ober";
				case "u":
					return "ufat";
			}
		});
		mostrarTexto(nuevoTexto);
		text.value ="";

	}else {
		alert("El texto ingresado sólo debe tener minusculas y ningun tilde");
		if (window.innerWidth <= 992) {
			document.querySelector(".svg-woman").style.display = "none";
		} else {

			document.querySelector(".svg-woman").style.display = "block";
		}
		document.querySelector(".result-area > h3").style.display ="block";
		result.style.display = "none";
		document.querySelector(".texto-descriptivo").style.display = "block";
		document.querySelector(".btn.copiar").style.display = "none";
		resultArea.style.justifyContent = "";
	}
};

const desencriptarTexto = texto =>{
	if (texto.match(/[a-z0-9\s]+$/g)) {
		let nuevoTexto = texto.replace(/ai/g,"a");
		nuevoTexto = nuevoTexto.replace(/enter/g,"e");
		nuevoTexto = nuevoTexto.replace(/imes/g,"i");
		nuevoTexto = nuevoTexto.replace(/ober/g,"o");
		nuevoTexto = nuevoTexto.replace(/ufat/g,"u");
		mostrarTexto(nuevoTexto);
		text.value ="";
	}else {
		
	
		alert("El texto a desencriptar debe ser texto ya encriptado");
		document.querySelector(".result-area > h3").style.display ="block";
		result.style.display = "none";
		document.querySelector(".texto-descriptivo").style.display = "block";
		document.querySelector(".btn.copiar").style.display = "none";
		if (window.innerWidth <= 992) {
			document.querySelector(".svg-woman").style.display = "none";
		} else {

			document.querySelector(".svg-woman").style.display = "block";
		}
		resultArea.style.justifyContent = "";
	}
}

window.addEventListener("resize", ()=>{
	if(window.innerWidth <= 992){
		document.querySelector(".svg-woman").style.display = "none";
	}
	if (window.innerWidth >= 993) {
		document.querySelector(".svg-woman").style.display = "block";
	}
});

btn.forEach(item => {
	item.addEventListener("click",(e)=>{
		
		if (e.target.value == "Encriptar") {
			encriptarTexto(text.value);
			
		}
		if(e.target.value == "Desencriptar") {
			desencriptarTexto(text.value);
			
		}
		if(e.target.value == "Copiar") {
			copiarTexto();
			
		}
	});
})