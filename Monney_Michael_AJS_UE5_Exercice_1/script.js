"use strict"

fetch("films.json")
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (films) {
        console.log(films);
    });
