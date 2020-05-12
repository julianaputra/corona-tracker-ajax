$(document).ready(function () {
  $.ajax({
    url: "https://indonesia-covid-19.mathdro.id/api/provinsi",
    success: (results) => {
      const data = results.data;
      let tbrow = "";
      let i = 0;

      data.forEach((d) => {
        // Karena di file jsonnya ada provinsi yang namanya indonesia :/
        if (d.provinsi != "Indonesia") {
          i++;
          tbrow += showTbrow(d, i);
        }
      });

      $(".tbody").html(tbrow);
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
  $.ajax({
    url: "https://indonesia-covid-19.mathdro.id/api",
    success: (results) => {
      let cards = showCards(results);

      $(".card-container").html(cards);
      $(".counter").counterUp({
        delay: 10,
        time: 1000,
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showTbrow(d, i) {
  return ` <tr>
            <th scope="row">${i}</th>
            <td>${d.provinsi}</td>
            <td>${d.kasusPosi}</td>
            <td>${d.kasusSemb}</td>
            <td>${d.kasusMeni}</td>
          </tr>`;
}

function showCards(r) {
  return `  <div class="col-xs-12 col-sm-4">
              <div class="card text-center">
                <div class="card-header bg-warning">
                  <h6 class="card-title m-0">
                    POSITIF
                  </h6>
                </div>
                <div class="card-body">
                  <h2 class="counter">${r.jumlahKasus}</h2>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4">
              <div class="card text-center">
                <div class="card-header bg-success">
                  <h6 class="card-title m-0">
                    SEMBUH
                  </h6>
                </div>
                <div class="card-body">
                  <h2 class="counter">${r.sembuh}</h2>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4">
              <div class="card text-center">
                <div class="card-header bg-danger">
                  <h6 class="card-title m-0">
                    MENINGGAL
                  </h6>
                </div>
                <div class="card-body">
                  <h2 class="counter">${r.meninggal}</h2>
                </div>
              </div>
            </div>`;
}
