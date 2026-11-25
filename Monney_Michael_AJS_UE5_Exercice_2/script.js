"use strict"

fetch("films.json")
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (films) {
        afficherCarte(films);
    });

    
function afficherCarte(films) {

    films.forEach(function (film) {
        document.getElementById("liste").innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card shadow-sm">
                    <div class="card-body">
                    <h5 class="card-title">${film.titre}</h5>
                    <p class="card-text">
                        <strong>Auteur :</strong> ${film.auteur}<br>
                        <strong>Année :</strong> ${film.année}
                    </p>
                    </div>
                </div>
            </div>`;
    });
};