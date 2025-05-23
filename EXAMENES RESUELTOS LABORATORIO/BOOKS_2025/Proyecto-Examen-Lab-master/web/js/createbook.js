"use strict";

import { booksAPI_auto } from "./api/_books.js";
import { bookValidator } from "./validators/validador.js";
import { messageRenderer } from "./renderers/messages.js";
import { sessionManager } from "./utils/session.js";


let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");
let usuarioId = sessionManager.getLoggedId();


async function main() {

    if (usuarioId === null) {

        messageRenderer.showErrorMessage("No puedes subir ni editar libros sin registrarte");
        return;
    }

    else {

        // Set userId input to logged-in user and make it read-only
        let userIdInput = document.getElementById("input-userId");
        if (userIdInput) {
           // userIdInput.value = usuarioId;
            userIdInput.readOnly = false;
        }

        if (userId != null) {
            loadBookDetails();
        }

        let formulario = document.getElementById("form-group");
        if (formulario) {
            formulario.onsubmit = handleSubmitFormulario;
        } else {
            console.error("No se encontró el formulario con id 'form-group'");
        }
    }
}

async function handleSubmitFormulario(event) {


    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    let errors = bookValidator.validateBook(formData);

    if (errors.length > 0) {

        let errorsDiv = document.getElementById("errors");
        errorsDiv.innerHTML = " ";

        for (let error of errors) {

            messageRenderer.showErrorMessage(error);

        }
    }

    else {

        if (userId == null) {

            createBook(formData);
        }

        else {

            updateBook(formData);

        }

    }
}

async function createBook(formData) {

    try {

        let resp = await booksAPI_auto.create(formData);
        window.location.href = `index.html`;
    }

    catch (err) {

        messageRenderer.showErrorMessage(err.response.data.message);
    }

}


//TODA LA PARTE DEL EDIT 


async function loadBookDetails() {

    let pageTitle = document.getElementById("page-title");
    let title = document.getElementById("input-title");
    let author = document.getElementById("input-author");
    let releaseDate = document.getElementById("input-releaseDate");
    let numPages = document.getElementById("input-numPages");
    let imageUrl = document.getElementById("input-imageUrl");

    pageTitle.textContent = "Edita tu libro";


    try {

        let currentBook = await booksAPI_auto.getById(userId);
        console.log(currentBook);
        title.value = currentBook.title;
        author.value = currentBook.author;
        releaseDate.value = currentBook.releaseDate;
        numPages.value = currentBook.numPages;
        imageUrl.value = currentBook.imageUrl;

    } catch (err) {

        console.log(err);
        messageRenderer.showErrorMessage(err.response.data.message);
    }


}

async function updateBook(formData) {

    console.log(formData);

    try {

        let resp = await booksAPI_auto.update(formData, userId);
        window.location.href = `index.html`;

    } catch (err) {

        messageRenderer.showErrorMessage("Error actualizando libro", err);
    }

}




document.addEventListener("DOMContentLoaded", main);
