/**
 * [play description] funcion al pulsar play
 * Buscamos el elemento demo y pulsamos play
 * Mostramos la imagen animada (gif)
 * Quitamos la imagen desanimada (png)
 * Le asignamos el color rojo al btn play
 * Le asignamos el color blanco al btn pause
 * 
 */
function play(){
	document.getElementById('demo').play();
	document.getElementById("imgGif").style.display="block";
	document.getElementById("imgPng").style.display="none";
	document.getElementById("play").style.color="red";
	document.getElementById("pause").style.color="white";
}

/**
 * [pause description] funcion al pulsar pause
 * Buscamos el elemento demo y pulsamos pause
 * Quitamos la imagen animada (gif)
 * Mostramos la imagen desanimada (png)
 * Le asignamos el color blanco  al btn play
 * Le asignamos el color rojo al btn pause
 * 
 */
function pause(){
	document.getElementById('demo').pause();
	document.getElementById("imgGif").style.display="none";
	document.getElementById("imgPng").style.display="block";
	document.getElementById("play").style.color="white";
	document.getElementById("pause").style.color="red";
}

/**
 * [upVolumen description] funcion al pulsar downVolumen
 * Cambiamos el color del elemento upVolumen a rojo
 * Esperamos un segundo y llamamos a la funcion cambiarColor que lo vuelve blanco 
 * Aumentamos el volumen
 */
function upVolumen(){
	document.getElementById("upVolumen").style.color="red";
	setTimeout(cambiarColor, 100);
	document.getElementById('demo').volume+=0.1
}

/**
 * [downVolumen description] funcion al pulsar downVolumen
 * Cambiamos el color del elemento downVolumen a rojo
 * Esperamos un segundo y llamamos a la cunfion cambiar color que lo vuelve blanco 
 * Disminuimos el volumen
 */
function downVolumen(){
	document.getElementById("downVolumen").style.color="red";
	setTimeout(cambiarColor2, 100);
	document.getElementById('demo').volume-=0.1
}

/**
 * [cambiarColor description]
 * cambia el color de upVOlumen a blanco
 */
function cambiarColor(){
	document.getElementById("upVolumen").style.color="white";
}

/**
 * [cambiarColor2 description]
 * cambia el color de downVolumen a blanco
 */
function cambiarColor2(){
	document.getElementById("downVolumen").style.color="white";
}
