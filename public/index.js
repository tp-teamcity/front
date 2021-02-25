
function callAPI(){
    var input = $('#recherche').val()
    $.ajax({
	    url: "http://192.168.1.45:82/Upper",
        context: document.body,
	method: 'POST',
	data: input,
	headers: {
	  'Access-Control-Allow-Origin': '*'
	}
      }).done(function(response) {
         console.log("appel fini")
      $("#cible").text('Resultat : ' + response)
   });
}
