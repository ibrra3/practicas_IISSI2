"use strict";

import { bookRenderer } from "./renderers/bookR.js";
import { booksAPI_auto } from "./api/_books.js";



async function main() {

    let container = document.getElementById("insert");

    let books = await booksAPI_auto.getAll(); //    Aquí tengo todos los libros de la BD

    for (let b of books) {

        let book = bookRenderer.asCard(b);
        container.appendChild(book);
    }

}

document.addEventListener("DOMContentLoaded", main);
