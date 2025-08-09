// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];

function agregarAmigo(){
	
	let uInput = "";
	
	if (document.getElementById("amigo").value == ""){
		alert("Por favor, inserte un nombre.");
	} else {
		uInput = document.getElementById("amigo").value;
		friends.push(uInput);
		document.querySelector("#amigo").value = "";
	}

	asignarAmigos();
}

function asignarAmigos(){

	let friendList = document.getElementById("listaAmigos");
	friendList.innerHTML = "";

	for (let i = 0; i < friends.length; i++) {
		friendList.innerHTML += "<li>" + friends[i] + "</li>";
	}
}

function sortearAmigo(){

	if (document.getElementById("listaAmigos") !== ""){
		let selection = parseInt(Math.floor(Math.random() * friends.length));
		console.log(selection);
		let friend = friends[selection];
		console.log(friend);
		let winer = document.getElementById("resultado");
		winer.innerHTML += "<li>" + friend + "</li>";
	} else {
		console.log("La lista está vacía");
	}

}
