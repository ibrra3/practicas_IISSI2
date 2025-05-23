

"use strict";
//------------------------------------------------------------- display these photos in a card-based layout, organized into rows.
import { parseHTML } from "/js/utils/parseHTML.js";
import { photoRenderer } from "/js/renderers/photos.js";
//______________________________________________________________________________________________________________________________
/*
The commented-out version of galleryRenderer was simpler. It would have created a single div with classes photo-gallery row p-2 bg-light 
and appended all photo cards directly into this single row, 
without the logic of creating new rows every three cards. The active version provides a more structured multi-row layout.
*/
//______________________________________________________________________________________________________________________________

/*
const galleryRenderer = {
    // Defines the function that builds the gallery

    asCardGallery: function (photos) {
        // Creates the main container for the gallery, adding Bootstrap's 'row' class

        let galleryContainer = parseHTML('<div class="photo-gallery row p-2 bg-light"> </div>');

        for (let photo of photos) {
            // For each photo, calls the INDIVIDUAL photo renderer to get a card (column)
            // and appends that card directly to the gallery container (which is also the row here)

            galleryContainer.appendChild(photoRenderer.asCard(photo));
        }
        return galleryContainer;
    }
};
export { galleryRenderer }; 

*/


//_______________________________________________________________________________________________________________________________
/*
    Creates a main container for the photo gallery.
    Creates an initial row to hold photo cards.
    Iterates through a list of photo data.
    For each photo, it uses photoRenderer.asCard() to create an HTML card.
    It appends these cards to the current row.
    Crucially, after every three cards are added to a row, it creates a new row and starts populating that new row. 
    This results in a gallery layout where photos are displayed in rows, with each row containing up to three photo cards.
    The final assembled gallery (a DOM element) is then returned, ready to be inserted into the main HTML document of a webpage.

*/
const galleryRenderer = {

    asCardGallery: function (photos) {
        let galleryContainer = parseHTML('<div class="photo-gallery"></div>');
        let row = parseHTML('<div class="row "></div>');
        let counter = 0;

        for (let photo of photos) {
            let card = photoRenderer.asCard(photo);
            row.appendChild(card);
            counter += 1;

            if (counter % 3 === 0) {
                galleryContainer.appendChild(row);
                row = parseHTML('<div class="row "></div>');
            }
        }
        // Append the last row only if it has cards
        if (row.children.length > 0) {
            galleryContainer.appendChild(row);
        }
        return galleryContainer;
    }
}

//______________________________________________________________________________________________________

export { galleryRenderer };










