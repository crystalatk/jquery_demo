'use strict'

//  Pleain JS Version
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM is Ready!!!');
    const button = document.querySelector('#button');
    button.addEventListener('click', function (event) {
        event.preventDefault();
        alert('CLICKED!');
    })
})

//  jQuery Version
$(document).ready(function () {
    console.log('jquery DOM ready');
    $('#button2').click(function (event) {
        event.preventDefault();
        alert('BUTTON 2 CLICKED');
    })
})