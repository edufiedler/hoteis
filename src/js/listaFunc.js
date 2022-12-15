//const controller = require('./products/controller');
const url = 'http://localhost:3000/funcionarios/'

const todosOsProdutos = document.querySelector("#todosOsProdutos")

async function consultaTodosOsProdutos(){
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    let todosFuncionarios = await resp.json();

    todosFuncionarios.forEach(funcionario => {
        var data = funcionario.datanasc;
        const novoFunc = `
        <div class="item-lista">
        <div class="body-lista">${funcionario.nom_pnome} ${funcionario.nom_snome}</div>
        <div class="body-lista">${funcionario.funcionario_cpf} </div>
        <div class="body-lista">${funcionario.sexo} </div>
        <div class="body-lista"> ${data} </div>
        <div class="body-lista"> ${funcionario.endereco} </div>
        <div class="body-lista"> ${funcionario.salario} </div>
        <div class="body-lista"> ${funcionario.tipodecontrato}</div>
        
          <a href="editar-funcionario.html">
          <svg
            class="icon"
            width="120"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 19H10.4L19.025 10.375L17.625 8.975L9 17.6V19ZM23.3 8.925L19.05 4.725L20.45 3.325C20.8333 2.94167 21.3043 2.75 21.863 2.75C22.421 2.75 22.8917 2.94167 23.275 3.325L24.675 4.725C25.0583 5.10833 25.2583 5.571 25.275 6.113C25.2917 6.65433 25.1083 7.11667 24.725 7.5L23.3 8.925ZM21.85 10.4L11.25 21H7V16.75L17.6 6.15L21.85 10.4ZM18.325 9.675L17.625 8.975L19.025 10.375L18.325 9.675Z"
              fill="black"
            />
          </svg>
          </a>


        </div>`
        document.getElementById("todosOsProdutos").innerHTML=document.getElementById("todosOsProdutos").innerHTML+novoFunc;
    });
    
    // document.getElementById("todosOsProdutos").innerHTML="Todos os produtos: \n" +JSON.stringify(numReserva, null, 3)
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