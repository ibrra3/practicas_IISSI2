/**
 * edit_photo.js    Controlador del registro y edición de fotos edit_photo.html
 * 
 */
"use strict";
import { photosAPI_auto } from './api/_photos.js'; // Módulo API con métodos de consumo de API Rest con AJAX
import { messageRenderer } from './renderers/messages.js'; // Renderización de mensajes

const myForm = document.getElementById("form-photo-upload"); // Capturar objeto formulario
async function main() {
    // alert("Estoy en main!");
    myForm.onsubmit=handleSubmit;// Capturar evento submit del formulario de la foto
}

async function handleSubmit(event) {
    event.preventDefault(); // Inhibir el susbmit
    // alert("Quieres hacer submit cuando no hay errores!");
    // alert("Quieres hacer submit, pero no te dejo! Vamos a currar con AJAX cuando yo diga!");
    let ahora = new Date();
    let fD = new FormData(myForm); // Convertir formulario DOM en un FormDATA
    fD.append("userId", 1); // Usuario por defecto. Ya le pondremos el suyo en L08
    fD.append("date", ahora.toLocaleString("ja-JP").replaceAll("/","-")); // Convertir a formato de timestamp esperado por mariaDB
    try {   let response = await photosAPI_auto.create(fD); // Grabar una foto a partir del FormData
            let newId=response.lastId; // Recuperar iD de la foto añadida
            window.location.href=`photo_detail.html?photoId=${newId}`;
    } catch (err) {
        messageRenderer.showErrorAsAlert(JSON.stringify(err.response.data)); // Renderizar error
    }
}
// Control del DOM
document.addEventListener("DOMContentLoaded", main); // DOM Cargado