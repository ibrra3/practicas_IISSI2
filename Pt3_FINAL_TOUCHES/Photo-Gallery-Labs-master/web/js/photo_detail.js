/**
 * photo_detail.js  Controlador de photo_detail.html
 * 
 */
"use strict"; // Control riguroso de errores

// import { galleryPhotos } from '/js/utils/data.js'; // JSON con datos de las fotos 
import { photosAPI_auto } from './api/_photos.js'; // Módulo API con métodos de consumo de API Rest con AJAX
import { messageRenderer } from './renderers/messages.js'; // Renderización de mensajes
import { photoRenderer } from '/js/renderers/photos.js'; // Renderizador de la galería


const urlParams = new URLSearchParams(window.location.search);          // busca la foto por su id  TKR
const photoId = urlParams.get("photoId");               // extrae el id de la foto obtenida     -106

console.log("the foto id to load is "+ photoId);

    let deleteBtn = document.querySelector("#button-delete");
    let editBtn = document.querySelector("#button-edit");

async function main() {
    
    deleteBtn.onclick = handleDelete;
    editBtn.onclick = handleEdit;
    
    // Acceso al endPoint todas las fotos con API Rest Silence, mediante Ajax
	try {  	let photo = await photosAPI_auto.getById(photoId); // Llamada al endpoint localhost.8081/api/v1/photos/<photoId>
        console.log (photo);
        let phtoContainer = document.getElementById("photo-details"); // Recuperar caja de la foto
        phtoContainer.appendChild (photoRenderer.asDetails (photo));	
    } catch (err) {
        messageRenderer.showErrorAsAlert(err); // Renderizar error
    }

    
}


function handleEdit() {
    window.location.href="edit_photo.html?photoId="+photoId; // Redirección
}

async function handleDelete(event) {
    if (confirm("Do you really want to delete this photo?")) {
        try {
            await photosAPI_auto.delete(photoId); // Borrar
            window.location.href="index.html"; // Redirección
        } catch (err) { messageRenderer.showErrorMessage(err);
        }
    }
}


document.addEventListener("DOMContentLoaded", main);