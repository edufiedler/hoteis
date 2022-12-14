//const controller = require('./products/controller');
const url = 'http://localhost:3000/api/v1/hoteis/'

const todosOsProdutos = document.querySelector("#todosOsProdutos")

async function consultaTodosOsProdutos(){
    const resp = await fetch(url, {
        method: 'GET',
        //mode: 'no-cors',
        //credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    //console.log(await resp.json())
    
    let numReserva = await resp.json();
    //document.getElementById("todosOsProdutos").innerHTML="Todos os produtos: \n" +numReserva;
    document.getElementById("todosOsProdutos").innerHTML="Todos os produtos: \n" +JSON.stringify(numReserva, null, 3)
}

var form = document.getElementById('form');

form.addEventListener('submit', function(event){
    console.log("Entrou aqui...")
    event.preventDefault();
    var numReserva = document.getElementById('numReserva').value;
    document.getElementById("resultado").innerHTML="O código da reserva eh: " +numReserva;
    
});

var todosOsProdutosButton = document.getElementById("todosOsProdutos");

/*
function consultaTodosOsProdutos(){
    console.log("Clicou");
    fetch('localhost:3000/api/v1/hoteis/')
}
*/