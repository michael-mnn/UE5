"use strict"

fetch("livres.json")
    .then(function (reponse) {
        return reponse.json();
    }).then(function (livres) {
        afficherCarte(livres);

        document.getElementById("btn-roman").addEventListener("click", () => {
            const livresFiltres = livres.filter(function (livre) {
                return livre.genre === "Roman";
            });

            document.getElementById("liste").innerHTML = ``;
            afficherCarte(livresFiltres);
        });
    });

function afficherCarte(livres) {

    livres.forEach(function (livre) {
        document.getElementById("liste").innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card shadow-sm">
                    <div class="card-body">
                    <h5 class="card-title">${livre.titre}</h5>
                    <p class="card-text">
                        <strong>Auteur :</strong> ${livre.auteur}<br>
                        <strong>Année :</strong> ${livre.année}
                    </p>
                    </div>
                </div>
            </div>`;
    });
};
