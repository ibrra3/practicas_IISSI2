/**
 * users.js Validador del formulario register-form
 * 
 */
'use strict';
const userValidator = { 
    validate: function(fD) { // Validar el formulario en formato FormData
        let errors = [];
        let pwdPattern = /^([A-Z][0-9])\w{6,}$/; // Patrón de validación de las password
        // Validación regla-3 passwords coincidentes
        if (fD.get("firstName").length<3 || fD.get("lastName").length<3) {
            errors.push("[err-R1] firstName & lastName length must be greater than 3!");
        }
        if ( !pwdPattern.test( fD.get("password") ) ) {
            errors.push("[err-R2] Password pattern must be Uppercase(1c), Number(2c), any characters and length over 8c!");
        } else if (fD.get("password") != fD.get("password2")) {
            errors.push("[err-R3] Passwords do not match!");
        }
        return errors; // Devolver errores si corresponde
    }
}

export { userValidator};