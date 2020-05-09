$(document).ready(function () {
  $.ajax({
    url: "https://indonesia-covid-19.mathdro.id/api/provinsi",
    success: (results) => {
      const data = results.data;
      let tbrow = "";

      data.forEach((d, i) => {
        tbrow += showTbrow(d);
      });
      $(".tbody").html(tbrow);
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showTbrow(d) {
  return ` <tr>
            <th scope="row">1</th>
            <td>${d.provinsi}</td>
            <td>${d.kasusPosi}</td>
            <td>${d.kasusSemb}</td>
            <td>${d.kasusMeni}</td>
          </tr>`;
}
