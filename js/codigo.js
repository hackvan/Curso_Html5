$(document).on("ready", inicio);
function inicio () 
{
	//Aqui va el código de inicio de la app.
	$("#personalizar").on("click", transicion);
}
function transicion () 
{
	//Objeto JS/JSON (Javascript Object Notation).
	var cambiosHistoriaCSS = 
	{
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0
	}
	var cambiosPersonalizacionCSS =
	{
		height: "auto",
		opacity: 1,
		width: "40%"
	}		
	$("#historia").css(cambiosHistoriaCSS);
	$("#personalizacion").css(cambiosPersonalizacionCSS);
	$("#color div").on("click", cambiarColor);
}
function cambiarColor (datos) {
	/*console.log(datos);*/
	var col = datos.currentTarget.id;
	$("#cochecito img").attr("src", "img/c" + col + ".jpg");
}