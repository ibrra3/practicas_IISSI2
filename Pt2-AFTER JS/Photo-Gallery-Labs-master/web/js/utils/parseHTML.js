'use strict';

function parseHTML(str) {
    let tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = str;
    return tmp.body.children[0];
}

export { parseHTML };


/*
 the parseHTML function takes an HTML string as input, 
 creates a temporary HTML document, inserts the string into 
 the body of this temporary document, and then returns a reference to 
 the first top-level HTML element that was parsed from the string.

*/

//taking a string of HTML and converting it into actual DOM element that can be manipulated annjd inserted into the web pagbe 


