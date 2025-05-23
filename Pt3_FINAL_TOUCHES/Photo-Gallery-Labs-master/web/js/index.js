"use strict";
console.log("TEKKERA AT WAR");

import { galleryRenderer } from "/js/renderers/gallery.js";
import { photoswithusersAPI_auto } from "/js/api/_photoswithusers.js";  // FOTOS WITH USERS DEVUELVE MUCHA DATA 

import { photosAPI_auto } from '/js/api/_photos.js'; // Módulo API con métodos de consumo de API Rest con AJAX
import { messageRenderer } from '/js/renderers/messages.js'; // Renderización de mensajes
//alert("Hola. Entro en index.js");

console.log ("Hello , world !");	//Envío de mensajes a la consola. Activar herramientas para desarrolladores (F12)
async function main() {
	//alert("El DOM está totalmente cargado!");
	// Acceso al endPoint todas las fotos con API Rest Silence, mediante Ajax
	
	try {  	let galleryPhotos = await photosAPI_auto.getAll(); 
			console.log (galleryPhotos);
			let container = document.querySelector ("#divGallery");
			container.appendChild (galleryRenderer.asCardGallery (galleryPhotos));	
	} catch (err) {
			messageRenderer.showErrorAsAlert(err); // Renderizar error
	}
}



document.addEventListener("DOMContentLoaded", main); 

















