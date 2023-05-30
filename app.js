"use strict";

const result = document.querySelector("#mostrar-result");
const resultArea = document.querySelector("#resultArea");
const text = document.querySelector("#text");
const btn = document.querySelectorAll(".btn");
const resultado = document.querySelector(".result");

const copiarTexto = ()=>{
	
}

const mostrarTexto = (texto) =>{
	document.querySelector(".result-area > h3").style.display ="none";
	document.querySelector(".result").style.display ="none";
	document.querySelector(".btn.copiar").style.display = "block";
	if (innerWidth >= 992) {
		document.querySelector(".svg-woman").style.display = "none";
	}
	result.style.display = "inline-block";
	result.readOnly = true;
	result.textContent = "";
	result.textContent = texto;
	result.style.height = "15px";
	result.style.height = (result.scrollHeight + 4) + "px";

	copiarTexto();
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
		document.querySelector(".result-area > h3").style.display ="block";
		result.classList.replace("mostrar-result","result");
		result.textContent = "Ingresa el texto que desees encriptar o desencriptar";
		document.querySelector(".btn.copiar").style.display = "none";
		document.querySelector(".svg-woman").style.display = "none";
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
	}
}

btn.forEach(item => {
	item.addEventListener("click",(e)=>{
		
		if (e.target.value == "Encriptar") {
			encriptarTexto(text.value);
			
		}
		if(e.target.value == "Desencriptar") {
			desencriptarTexto(text.value);
			
		}
		if(e.target.value == "Copiar") {
			copiarTexto(text.value);
			
		}
	});
})