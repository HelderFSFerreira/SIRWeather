$(document).ready(function(){
  commands = {
				"tempo em *texto" : tempoControloAnnyang,
			}
	annyang.setLanguage("pt-PT");
	annyang.addCommands(commands);
	annyang.start();

  function tempoControloAnnyang(data) {
    var auxData = data+",Portugal";
    todayForecast(auxData);
  }
});
