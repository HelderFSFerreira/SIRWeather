$(document).ready(function(){
  commands = {
				"tempo em *texto" : tempoControloAnnyang,
			}
  //annyang.debug();
	annyang.setLanguage("pt-PT");
	annyang.addCommands(commands);
	annyang.start();

  function tempoControloAnnyang(data) {
    speak=1;
    var auxData = data+",Portugal";
    todayForecast(auxData);
  }
});
