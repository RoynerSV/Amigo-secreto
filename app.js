// Este es mi primer commit
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ullistaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado")


function agregarAmigo(){
    listaAmigos.push(inputAmigo.value);
    ullistaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}

function sortearAmigo(){
const random = Math.floor(Math.random() * listaAmigos.length);
listaAmigos[random]
const amigoSecreto = listaAmigos[random];
ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

}
