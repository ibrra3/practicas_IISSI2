"use strict";
console.log("TEKKERA AT WAR");
import {galleryPhotos} from "/js/utils/data.js";

import { parseHTML } from "/js/utils/parseHTML.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { galleryRenderer } from "/js/renderers/gallery.js";

import { photosAPI_auto } from '/js/api/_photos.js'; // Módulo API con métodos de consumo de API Rest con AJAX
import { messageRenderer } from '/js/renderers/messages.js'; // Renderización de mensajes
//alert("Hola. Entro en index.js");

function func1() {
    let myDiv = document.getElementById("dom-test");

    myDiv.textContent = "this is a JS message  , TEKKERA IS AT WAR ";
    myDiv.style.background = "#EEEEEE";
    myDiv.style.color = "black";
    myDiv.style.fontFamily = "monospace";
    // CREAR  A PARRAFO CON JAVASCRIPT 
    let newPr = document.createElement("p");
    newPr.textContent = "this paragraph was made using JS - TKR";
    myDiv.appendChild(newPr);

    let newImage = document.createElement("img");
    newImage.src = "https://loadedlandscapes.com/wp-content/uploads/2019/07/lighting.jpg";
    newImage.title = "landscape";
    myDiv.appendChild(newImage);

    let container = document.querySelector("div.container");
    container.style.backgroundColor = "YELLOW";

    let cards = container.querySelectorAll("div.card");
    for (let card of cards) {
        card.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,2)";

        //0: The horizontal offset of the shadow (no offset in this case).
        //4px: The vertical offset of the shadow (4 pixels down).
        //8px: The blur radius of the shadow (8 pixels of blur).
        //0: The spread radius of the shadow (no spread).
    }


}

function main2() {
    let html = `<div class="row">
        <div class="col-md-4">
            <div class="card bg-dark text-light">
                <img src="https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg"
                    class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title text-center">Samoyed</h5>
                    <p class="card-text">A very good boy.</p>
                    <p class="text-end">@user1</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-dark text-light">
                <img src="https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg"
                    class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title text-center">Samoyed</h5>
                    <p class="card-text">A very good boy.</p>
                    <p class="text-end">@user1</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-dark text-light">
                <img src="https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg"
                    class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title text-center">Samoyed</h5>
                    <p class="card-text">A very good boy.</p>
                    <p class="text-end">@user1</p>
                </div>
            </div>
        </div>
    </div>
                `;

    let newCard = parseHTML(html)
    let container = document.getElementById("gallery");

    container.appendChild(newCard);
    container.style.backgroundColor = "white";



}


function main4() {

    let container = document.getElementById("gallery");
    let photo = [
        {
            title: "Samoyed",
            description: "A very good boy.",
            userId: 1,
            url: "https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg",
            date: "15/08/2020",
        },
        {
            title: "ETSII",
            description: "E.T.S. Ing. Informatica, Universidad de Sevilla",
            userId: 2,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ETSI_Inform%C3%A1tica_Sevilla_y_DrupalCamp_Spain_2011.jpg/1920px-ETSI_Inform%C3%A1tica_Sevilla_y_DrupalCamp_Spain_2011.jpg",
            date: "01/01/2021",
        },
        {
            title: "Seville",
            description: "The beautiful city of Seville",
            userId: 3,
            url: "https://urbansevilla.es/wp-content/uploads/2019/03/urban-sevilla-foto-ciudad.jpg",
            date: "03/02/2019",
        },
        {
            title: "Abstract art",
            description: "Clipart",
            userId: 4,
            url: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2025/performance/corvette-z06/mov/01-images/2025-z06-masthead-01.png?imwidth=1200",
            date: "14/08/2019",
        },
    ];
    //let card = photoRenderer.asCard(photo);
    let card = galleryRenderer.asCardGallery(photo);
    container.appendChild(card);

    
}

function main5() {
	//alert("El DOM está totalmente cargado!");
	let container = document.querySelector ("#divGallery");
	container.appendChild (galleryRenderer.asCardGallery (galleryPhotos[photoId]));	
}

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

















