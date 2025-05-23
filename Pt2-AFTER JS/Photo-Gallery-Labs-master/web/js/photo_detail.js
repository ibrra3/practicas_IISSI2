/**
 * photo_detail.js  Controlador de photo_detail.html
 * 
 */
"use strict"; // Control riguroso de errores
// import { galleryPhotos } from '/js/utils/data.js'; // JSON con datos de las fotos 
import { photosAPI_auto } from './api/_photos.js'; // Módulo API con métodos de consumo de API Rest con AJAX
import { messageRenderer } from './renderers/messages.js'; // Renderización de mensajes

import { photoRenderer } from '/js/renderers/photos.js'; // Renderizador de la galería
const urlParams = new URLSearchParams(window.location.search);
const photoId = urlParams.get("photoId");
console.log(photoId);
console.log("TKR");
async function main() {
    // Acceso al endPoint todas las fotos con API Rest Silence, mediante Ajax
	try {  	let photo = await photosAPI_auto.getById(photoId); 
        console.log (photo);
        let photoContainer = document.getElementById("photo-details"); // Recuperar caja de la foto
        photoContainer.appendChild (photoRenderer.asDetails (photo));	
    } catch (err) {
        messageRenderer.showErrorAsAlert(err); // Renderizar error
    }
}

document.addEventListener("DOMContentLoaded", main);