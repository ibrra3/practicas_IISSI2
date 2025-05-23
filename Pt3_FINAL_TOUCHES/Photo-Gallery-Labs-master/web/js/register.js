"use strict";
import { messageRenderer } from "./renderers/messages.js";
import { userValidator } from "./validators/users.js";

function main() {
    const myForm = document.getElementById("register-form");
    const divErrors = document.getElementById("errors");

    if (!myForm) {
        console.error("Registration form with ID 'register-form' not found. Script cannot proceed.");
        return;
    }

    myForm.onsubmit = function(event) {
        event.preventDefault();
        if (divErrors) { // Only clear if it exists
            divErrors.innerHTML = "";
        }

        let formData = new FormData(myForm);
        let errors = [];

        // Check if userValidator and its validate method exist
        if (typeof userValidator !== 'undefined' && typeof userValidator.validate === 'function') {
            errors = userValidator.validate(formData);
        } else {
            console.error("userValidator or userValidator.validate method is not defined. Cannot validate form.");
            if (divErrors && messageRenderer && typeof messageRenderer.showErrorMessage === 'function') {
                messageRenderer.showErrorMessage("Form validation system is not working. Please contact support.");
            } else {
                alert("Form validation system error.");
            }
            return; // Stop if validation cannot occur
        }

        if (errors.length !== 0) {
            if (divErrors && messageRenderer && typeof messageRenderer.showErrorAsAlert === 'function') {
                messageRenderer.showErrorAsAlert(errors.join("<br>"));
            } else {
                // Fallback if messageRenderer or divErrors is not fully available
                alert("Please correct the following errors:\n" + errors.join("\n"));
            }
        } else {
            // Validation passed
            if (messageRenderer && typeof messageRenderer.showSuccessAsAlert === 'function') {
                messageRenderer.showSuccessAsAlert("Form is OK! Redirecting to home page!");
            } else {
                alert("Form is OK! Redirecting...");
            }
            // TODO: Add actual API call to backend here for registration
            console.log("Form is valid. Would proceed with API call to register user here.");
            setTimeout(function() {
                window.location.href = "index.html";
            }, 5000); //                                                3. Redirect to index.html after 5 seconds
        }
    }
}
document.addEventListener("DOMContentLoaded", main);