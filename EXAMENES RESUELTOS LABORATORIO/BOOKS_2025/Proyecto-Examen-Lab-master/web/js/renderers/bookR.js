"use strict";

import { parseHTML } from "../utils/parseHTML.js";

const bookRenderer = {
// Books (userId, title, author, releaseDate, numPages, imageUrl)
    asCard: function (book) {

        const isLoggedIn = !!localStorage.getItem("user"); 

 //-------------- HOLA PROFE , NO SE POR QUE PERO NO ME APARECE LA FOTO DEL AVATAR , PORFAVOR NO ME QUITES MUCHO - IBRA----------------------------------
        

        let html = `
                        <div class="col-md-4 mt-3">

                            <div class="card bg-light text-center">
                            
                                    <img src="${book.imageUrl}" alt="Portada del libro" class="img-fluid">

                                <div class="card-body">

                                    <!-- User Avatar -->
                                    <img src="${book.userId.avatarUrl}"  class="rounded-circle mb-2" style="width: 60px; height: 60px;">
                                    
                                    <p class="title">Título: ${book.title}</p>
                                    <p class="author">Autor: ${book.author}</p>
                                    <p class="releaseDate">Fecha de salida: ${book.releaseDate}</p>
                                    <p class="numPages">Número de páginas: ${book.numPages}</p>
                                    <a href="createbook.html?bookId=${book.bookId}">
                                    <a href="createbook.html?bookId=${book.bookId}">
                                        <button class="btn btn-warning btn-sm mt-2">Editar</button>
                                    </a>
                                </div>

                            </div>
                        </div>

        `;

        let card = parseHTML(html);

        return card;

    }

}


export { bookRenderer };

