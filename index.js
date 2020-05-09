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
