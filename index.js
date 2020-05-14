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
        time: 2000,
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
            <td>${numeral(d.kasusPosi).format(0, 0)}</td>
            <td>${numeral(d.kasusSemb).format(0, 0)}</td>
            <td>${numeral(d.kasusMeni).format(0, 0)}</td>
          </tr>`;
}

function showCards(r) {
  return ` <div class="col-md-4">
            <div class="card text-center mb-3 MyShadow" style="border-left: 8px solid #FF9960;">
              <div class="card-body">
                <div class="row d-flex justify-content-start align-items-center">
                  <div class="col-4">
                   
                      <i class="icon fas fa-virus p-3 rounded-circle" style="background-color: #FF996030; font-size: 3em; color: #FF9960;"></i>
             
                  </div>
                  <div class="col-8 text-left">
                    <h3 class="card-title m-0 p-0 font-weight-bold text-secondary" style="font-size: 2rem";>Positif</h3>
                    <h3 class="counter m-0 p-0 font-weight-bold" style="color: #FF9960;">${numeral(r.jumlahKasus).format(0, 0)}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-center mb-3 MyShadow" style="border-left: 8px solid #6BD37C;">
              <div class="card-body">
                <div class="row d-flex justify-content-start align-items-center">
                  <div class="col-4">
                  
                      <i class="icon fas fa-heartbeat p-3 rounded-circle" style="background-color: #6BD37C30; font-size: 3em; color: #6BD37C;"></i>
           
                  </div>
                  <div class="col-8 text-left">
                    <h3 class="card-title m-0 p-0 font-weight-bold text-secondary">Sembuh</h3>
                    <h3 class="counter m-0 p-0 font-weight-bold" style="color: #6BD37C;">${numeral(r.sembuh).format(0, 0)}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-center mb-3 MyShadow" style="border-left: 8px solid #FF6060;">
              <div class="card-body">
                <div class="row d-flex justify-content-start align-items-center">
                  <div class="col-4">                
                      <i class="icon fas fa-skull p-3 rounded-circle" style="background-color: #FF606030; font-size: 3em; color: #FF6060;"></i>
                  </div>
                  <div class="col-8 text-left">
                    <h3 class="card-title m-0 p-0 font-weight-bold text-secondary">Meninggal</h3>
                    <h3 class="counter m-0 p-0 font-weight-bold" style="color: #FF6060;">${numeral(r.meninggal).format(0, 0)}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
}
