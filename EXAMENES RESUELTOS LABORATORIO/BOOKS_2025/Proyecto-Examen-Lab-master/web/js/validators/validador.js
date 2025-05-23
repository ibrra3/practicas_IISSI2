"use strict";


const bookValidator = {

    validateBook: function (formData) {

        let errors = [];

        let title = formData.get("title");
        let author = formData.get("author");
        let releaseDate = formData.get("releaseDate");
        let numPages = formData.get("numPages");
        let imageUrl = formData.get("imageUrl");

        if (author.length < 3) {
            errors.push("El nombre del autor ha de tener al menos 3 caracteres");
        }

        if (author === title) {
            errors.push("El nombre del autor debe ser diferente al título");
        }

        if(numPages < 0 || numPages > 5000 ){
            errors.push("El número de páginas ha de estar comprendido entre 0 y 5000");
        }

        return errors;
    }
};

export { bookValidator };