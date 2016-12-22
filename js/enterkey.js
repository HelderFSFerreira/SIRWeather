$(document).keypress(function(e) {
    if(e.which == 13) {
        if ($("#ilocal").val() == "") {
          alert("Está vazio");
        } else {
          todayForecast($("#ilocal").val());
        }
    }
});
