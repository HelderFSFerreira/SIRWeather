$(document).ready(function(){
  commands = {
				"tempo em *texto" : tempoControloAnnyang,
			}
	annyang.setLanguage("pt-PT");
	annyang.addCommands(commands);
	annyang.start();

  function tempoControloAnnyang(data) {
    speak=1;
    console.log("Depois de interpretar o comando"+speak);
    var auxData = data+",Portugal";
    todayForecast(auxData);
  }
});
