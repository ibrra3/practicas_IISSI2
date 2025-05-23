/*
	C.Arévalo
	photos.js.  Renderización de Fotos
	Marzo/2022
*/
//-------------------------------------------------------------------------				The Individual Photo Card Creator  
"use strict";
import { parseHTML } from "/js/utils/parseHTML.js"; // Función para crear elementos del DOM
const photoRenderer = {


	//--------------- 5.2 Devuelve Card para la galería----------------------------------------------------------------
	asCard: function (photo) { // El parámetro es un objeto photo   Takes a photo object as input. 
		// This object is expected to have properties like 	photoId, url (image source), title, description, and userId.

		let html = `
				<div class="col-md-4 text-center mb-4 ">
                  <div class="card-card">
				  
                    <div class="card-image-area d-flex justify-content-center align-items-center pt-2"> 
                                         <a href="photo_detail.html?photoId=${photo.photoId}"> 
                        <img src="${photo.url}" class="img-fluid " style="max-width: 85%; height: auto; border-radius: 0.25rem;">
                      </a>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title ">${photo.title}</h5>
                      <p class="card-text">${photo.description}</p>
                      <p class="text-end">User ${photo.userId}</p>
                    </div>
                  </div>
				  </div>
                </div>`;
		let card = parseHTML(html);
		return card;
	},

	//					 take up 4 out of 12 columns and has different style than asCard ascard as card		
	photoAsCard: function (photo) {
		let html = `<div class="col-md-4">
					<div class="card bg-dark text-light">
						<img src="${photo.url}" class="card-img-top">
					<div class="card-body">
							<h5 class="card-title text-center">${photo.title}</h5>
							<p class="card-text">${photo.description}</p>
							<p class="text-end">User ${photo.userId}</p>
					</div>
					</div>
					</div>`;
		let card = parseHTML(html);
		return card;
	}
	,

	//---------------- 5.3 Detalles de la foto			--------------------------------------------------------------------------------

	asDetails: function (photo) {//creates a more detailed view of a photo, likely for a photo detail page.
		//It includes a larger image, title, description, and user/date information with a link to a user profile.

		let html = `<div class="card p-2">
						<img src="${photo.url}" class="img-fluid w-100">
						<h3>${photo.title}</h3>
						<h6>${photo.description}</h6>
						<p> Uploaded by (User <a href="user_profile.html" class="user-link">@${photo.userId}</a> on ${photo.date})</p>
					</div>`;
		let photoDetails = parseHTML(html);
		return photoDetails;
	},
	

asDetails2: function (photo) {
		let html = `<div class="col-md-9" id="photo-details-column">
			<h3>${photo.title}</h3>
			<h6>${photo.description}</h6>
			<p>Uploaded by <a href="user_profile.html" class="user-link">User ${photo.userId}
			</a> on ${photo.date}</p>
			<hr>
			<img src="${photo.url}" class="img-fluid">
			</div>`;
			let photoDetails = parseHTML(html);
			return photoDetails;

}
};
export { photoRenderer };