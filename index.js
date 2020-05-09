$(document).ready(function () {
  $.ajax({
    url: "http://api.kawalcorona.com/indonesia/provinsi",
    success: (results) => {
      console.log(results);
      // const movies = results.Search; //ngilangin Search biar jadi array of object
      // let cards = "";
      // movies.forEach((m) => {
      //   cards += showCards(m);
      // });
      // $(".movie-container").html(cards);
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showCards(m) {
  return `<div class="col-md-4 my-3">
            <div class="card">
            <img src="${m.Poster}" class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
            </div>
            </div>
        </div>`;
}
