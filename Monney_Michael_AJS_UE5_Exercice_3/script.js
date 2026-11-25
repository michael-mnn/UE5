"use strict"
// jai repris le code 
fetch("films.json")
  .then(function (reponse) {
    return reponse.json();
  }).then(function (films) {
    afficherCarte(films);

    document.getElementById("btn-recents").addEventListener("click", () => {
      const filmsFiltres = films.filter(function (film) {
        return film.annee > 2000;
      });


      document.getElementById("liste").innerHTML = ``;
      afficherCarte(filmsFiltres);
    });
  });

function afficherCarte(films) {

  films.forEach(function (film) {
    document.getElementById("liste").innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card shadow-sm">
                    <div class="card-body">
                    <h5 class="card-title">${film.titre}</h5>
                    <p class="card-text">
                        <strong>Genre :</strong> ${film.genre}<br>
                        <strong>Année :</strong> ${film.annee}
                    </p>
                    </div>
                </div>
            </div>`;
  });
};
