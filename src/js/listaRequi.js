async function consultaTodasAsRequisicoes() {
    const resp = await fetch(`http://localhost:3000/requisicoes`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
  })

    let resultado = await resp.json();
    mostraRequisicoes(resultado);
}

function mostraRequisicoes(resultado) {
    document.getElementById("todosOsProdutos").innerHTML = '';


      const tabela = `<div class="header-lista">
      <div class="body-bold">ID</div>

      <div class="body-bold">Tipo</div>

      <div class="body-bold">Data de Abertura</div>

      <div class="body-bold">Status</div>

      <div class="body-bold">Texto Livre</div>
    </div>`;
      document.getElementById("todosOsProdutos").innerHTML=document.getElementById("todosOsProdutos").innerHTML+tabela; 
      
      resultado.forEach(requisicao => {
       
        const novoFunc = `
        <div class="item-lista">
        <div class="body-lista">${requisicao.requisicao_id}</div>
        <div class="body-lista">${requisicao.tipo} </div>
        <div class="body-lista">${requisicao.dataabertura} </div>
        <div class="body-lista"> ${requisicao.status} </div>
        <div class="body-lista"> ${requisicao.textolivre} </div>
        <a href="editar-funcionario.html?requi_id=${requisicao.requisicao_id}">
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
        </div>
       
        
        `
        document.getElementById("todosOsProdutos").innerHTML=document.getElementById("todosOsProdutos").innerHTML+novoFunc;
    });
}