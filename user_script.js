// ==UserScript==
// @name         Open URL files
// @namespace    https://sweavo.wordpress.com/
// @version      1.0
// @description  Chrome just opens a .url file in the browser. This script goes to the actual URL.
// @author       You
// @include      /file:.*\.url/
// @grant        none
// @run-at       document-end
// ==/UserScript==

var KEY = 'URL=';
var KEY_LEN = KEY.length;
var text = document.body.innerText;
var position = text.search( KEY );
var destination =text.substr( position + KEY_LEN );
window.open( destination, "_self" )
