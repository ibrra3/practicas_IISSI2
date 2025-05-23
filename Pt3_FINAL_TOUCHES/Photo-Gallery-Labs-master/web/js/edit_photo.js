/**
 * edit_photo.js    Controlador de la vista edit_photo.html
 */
"use strict"; // Control riguroso de errores
import { photosAPI_auto } from './api/_photos.js'; // Métodos para acceder con Ajax a EndPoints
import { messageRenderer } from './renderers/messages.js'; // Renderizador de mensajes


const photoForm = document.getElementById("form-photo-upload");
const pageTitle = document.getElementById("page-title");
const urlParams = new URLSearchParams(window.location.search);
const photoId = urlParams.get("photoId");
let currentPhoto = null; // Objeto con la foto en edición

async function main() {
    // alert("Tengo control en Main!");
    if (photoId !== null) { loadCurrentPhoto() }; // Cargar datos de foto a editar
    photoForm.onsubmit = handleSubmit; // Controlador del evento submit
}

async function loadCurrentPhoto() {
    pageTitle.innerHTML = `Edit photo #${photoId}`;
    const urlInput = document.getElementById("input-url"); // url de la foto
    const titleInput = document.getElementById("input-title"); // Título de la foto
    const descriptionInput = document.getElementById("input-description"); // Descripción de la foto
    const PublicVisibility = document.getElementById("Public_visibility"); // Visibilidad de la foto
    const PrivateVisibility = document.getElementById("Private_visibility"); // Visibilidad de la foto
    const imgEdit = document.getElementById("img-edit"); // Imagen que sustituye al placeHolder
    urlInput.addEventListener("change", function (event) {
        imgEdit.src = event.target.value; // Refrescar en vivo
    })

    try {
        currentPhoto = await photosAPI_auto.getById(photoId); // Llamada al endpoint localhost.8081/api/v1/photos/<photoId>
        urlInput.value = currentPhoto.url;
        titleInput.value = currentPhoto.title;
        descriptionInput.value = currentPhoto.description;
        PublicVisibility.checked = (currentPhoto.visibility == "Public");
        PrivateVisibility.checked = (currentPhoto.visibility == "Private");
        imgEdit.src = currentPhoto.url;
    } catch (err) {
        messageRenderer.showErrorMessage(err);
    }
}

async function handleSubmit(e) {
    e.preventDefault(); // Inhibir el submit
    let myFd = new FormData(e.target); // Generar FormData a partir de formulario en el DOM
    let ahora = (new Date()).toLocaleString("ja-JP").replaceAll("/", "-");
    myFd.append("userId", 1); // Usuario por defecto. Más adelante el usuario conectado
    myFd.append("date", ahora); // Usuario por defecto. Más adelante el usuario conectado
    // Acceso ajax a POST a ./photos
    if (currentPhoto === null) { // Crear foto nueva
        try {
            let resp = await photosAPI_auto.create(myFd); // Llamada al endpoint localhost.8081/api/v1/photos
            let newId = resp.lastId; // Recupera iD auto-incrementado de la última foto
            window.location.href = `photo_detail.html?photoId=${newId}`;
        } catch (err) {
            console.log(err.response);
            messageRenderer.showErrorMessage(JSON.stringify(err.response.data));
        }
    } else {
        try {
            await photosAPI_auto.update(myFd, photoId); // Llamada al endpoint localhost.8081/api/v1/photos
            window.location.href = `photo_detail.html?photoId=${photoId}`;
        } catch (err) {
            messageRenderer.showErrorMessage(JSON.stringify(err.response.data));
        }
    }

}
document.addEventListener("DOMContentLoaded", main);  // Capturar evento DOM ready