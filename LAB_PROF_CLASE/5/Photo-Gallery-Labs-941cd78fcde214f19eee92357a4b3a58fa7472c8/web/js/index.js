"use strict";

import { galleryRenderer } from '/js/renderers/gallery.js';

function handleMouseEnter(event) {
    let card = event.target;
    card.style.border = "2px solid blue";
}

function handleMouseLeave(event) {
    let card = event.target;
    card.style.border = "none";
}

function main() {

    let container = document.getElementById("gallery");
    let photos = [
        {
            title: "Samoyed",
            description: "A very good boy.",
            userId: 1,
            url: "https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg",
            date: "15/08/2020",
        }, {
            title: "ETSII",
            description: "E.T.S. Ing. Informatica, Universidad de Sevilla",
            userId: 2,
            url: "https://investigacion.us.es/docs/web/images/web/w_ingenieria_informatica.jpg",
            date: "01/01/2021",
        }, {
            title: "Seville",
            description: "The beautiful city of Seville",
            userId: 3,
            url: "https://www.spain.info/.content/imagenes/cabeceras-grandes/andalucia/vista-sevilla-s1035089014.jpg",
            date: "03/02/2019",
        }, {
            title: "Abstract art",
            description: "Clipart",
            userId: 4,
            url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Robert_Delaunay%2C_1913%2C_Premier_Disque%2C_134_cm%2C_52.7_inches%2C_Private_collection.jpg",
            date: "14/08/2019",
        },];
    let gallery = galleryRenderer.asCardGallery(photos);
    container.appendChild(gallery);
    
    let cards = document.querySelectorAll("div.card");
    for (let card of cards) {
        card.onmouseenter = handleMouseEnter;
        card.onmouseleave = handleMouseLeave;
    }

}

document.addEventListener("DOMContentLoaded", main);