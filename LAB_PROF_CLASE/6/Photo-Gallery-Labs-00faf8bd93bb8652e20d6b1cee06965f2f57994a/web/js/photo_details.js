"use strict";

import { photoRenderer } from "/js/renderers/photos.js";
import { PhotosAPI_auto } from "/js/api/_photos.js";
import { messageRenderer } from "/js/renderers/messages.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

async function loadPhotoById() {
    let photoContainer = document.querySelector("#photo-details-column");

    try {
        let photo = await PhotosAPI_auto.getById(photoId);
        let photoDetails = photoRenderer.asDetails(photo);
        photoContainer.appendChild(photoDetails);
    } catch (err) {
        messageRenderer.showErrorMessage("Error loading photo", err);
    }

}

async function main() {
    if (photoId === null) {
        messageRenderer.showErrorMessage("Please, provide a photoId");
        return;
    }
    await loadPhotoById()
}

document.addEventListener("DOMContentLoaded", main);